// The Voting Game
class TheVotingGame {
    constructor() {
        this.currentQuestion = null;
        this.questions = [];
        this.playerManager = null;
        this.votes = {};
        this.votingInProgress = false;
        this.resultsShown = false;
    }

    // Initialize the game
    init(playerManager) {
        console.log('The Voting Game initializing...');
        this.playerManager = playerManager;
        this.loadQuestions();
        this.renderGame();
    }

    // Load questions from JSON file
    async loadQuestions() {
        try {
            // Use absolute path from root
            const response = await fetch('./games/the-voting-game/questions.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.questions = data.questions || data;
            console.log('Questions loaded successfully:', this.questions.length);
            this.showRandomQuestion();
        } catch (error) {
            console.error('Error loading questions:', error);
            this.showError();
        }
    }

    // Render the game interface
    renderGame() {
        console.log('Rendering The Voting Game...');
        const gameContent = document.getElementById('game-content');
        gameContent.innerHTML = `
            <div class="voting-game-container">
                <div class="game-instructions">
                    <h3>How to Play</h3>
                    <p>Read the question and vote for who you think fits the description. Tap a player to vote!</p>
                </div>
                <div class="question-display" id="question-display">
                    <div class="question-text" id="question-text">
                        Loading questions...
                    </div>
                </div>
                <div class="voting-section" id="voting-section">
                    <div class="voting-instruction" id="voting-instruction">
                        Tap a player to vote for them
                    </div>
                    <div class="players-voting" id="players-voting">
                        ${this.renderVotingPlayers()}
                    </div>
                </div>
                <div class="results-section hidden" id="results-section">
                    <h3>Voting Results</h3>
                    <div class="results-display" id="results-display"></div>
                    <button class="next-question-btn" id="next-question-btn">Next Question</button>
                </div>
                <div class="game-controls">
                    <button class="show-results-btn hidden" id="show-results-btn">Show Results</button>
                </div>
                ${window.gameCommon.formatPlayersList()}
            </div>
        `;

        this.initializeEventListeners();
    }

    // Render voting players
    renderVotingPlayers() {
        if (!this.playerManager || this.playerManager.activePlayers.length === 0) {
            return '<p class="no-players">No players available for voting</p>';
        }

        return this.playerManager.activePlayers.map(player => `
            <div class="voting-player" 
                 data-player-id="${player.id}" 
                 style="--player-color: ${player.color}">
                <div class="player-name">${player.name}</div>
                <div class="vote-count" id="vote-count-${player.id}">0</div>
            </div>
        `).join('');
    }

    // Initialize event listeners
    initializeEventListeners() {
        // Voting players
        document.addEventListener('click', (e) => {
            if (e.target.closest('.voting-player') && this.votingInProgress && !this.resultsShown) {
                const playerElement = e.target.closest('.voting-player');
                const playerId = parseInt(playerElement.dataset.playerId);
                this.castVote(playerId);
            }
        });

        // Show results button
        const showResultsBtn = document.getElementById('show-results-btn');
        if (showResultsBtn) {
            showResultsBtn.addEventListener('click', () => {
                this.showResults();
            });
        }

        // Next question button
        const nextQuestionBtn = document.getElementById('next-question-btn');
        if (nextQuestionBtn) {
            nextQuestionBtn.addEventListener('click', () => {
                this.nextQuestion();
            });
        }
    }

    // Show a random question
    showRandomQuestion() {
        if (this.questions.length === 0) {
            this.showError();
            return;
        }

        // Reset game state
        this.votes = {};
        this.votingInProgress = true;
        this.resultsShown = false;

        // Get a random question
        const randomIndex = Math.floor(Math.random() * this.questions.length);
        this.currentQuestion = this.questions[randomIndex];

        // Update the display
        const questionText = document.getElementById('question-text');
        questionText.textContent = this.currentQuestion;

        // Reset UI
        this.resetVotingUI();

        // Add a subtle animation
        const questionDisplay = document.getElementById('question-display');
        questionDisplay.style.transform = 'scale(0.95)';
        setTimeout(() => {
            questionDisplay.style.transform = 'scale(1)';
        }, 100);
    }

    // Reset voting UI
    resetVotingUI() {
        // Reset vote counts
        this.playerManager.activePlayers.forEach(player => {
            const voteCountElement = document.getElementById(`vote-count-${player.id}`);
            if (voteCountElement) {
                voteCountElement.textContent = '0';
            }
        });

        // Show voting section, hide results
        document.getElementById('voting-section').classList.remove('hidden');
        document.getElementById('results-section').classList.add('hidden');
        document.getElementById('show-results-btn').classList.add('hidden');
        document.getElementById('voting-instruction').textContent = 'Tap a player to vote for them';
    }

    // Cast a vote
    castVote(playerId) {
        if (!this.votingInProgress || this.resultsShown) return;

        // Initialize vote count for this player if not exists
        if (!this.votes[playerId]) {
            this.votes[playerId] = 0;
        }

        // Increment vote count
        this.votes[playerId]++;

        // Update display
        const voteCountElement = document.getElementById(`vote-count-${playerId}`);
        if (voteCountElement) {
            voteCountElement.textContent = this.votes[playerId];
        }

        // Show show results button after first vote
        if (Object.values(this.votes).some(count => count > 0)) {
            document.getElementById('show-results-btn').classList.remove('hidden');
            document.getElementById('voting-instruction').textContent = 'Tap "Show Results" when everyone has voted';
        }
    }

    // Show voting results
    showResults() {
        this.votingInProgress = false;
        this.resultsShown = true;

        // Hide voting section, show results
        document.getElementById('voting-section').classList.add('hidden');
        document.getElementById('results-section').classList.remove('hidden');
        document.getElementById('show-results-btn').classList.add('hidden');

        // Calculate and display results
        this.displayResults();
    }

    // Display voting results
    displayResults() {
        const resultsDisplay = document.getElementById('results-display');
        
        // Sort players by vote count (descending)
        const sortedResults = this.playerManager.activePlayers
            .map(player => ({
                ...player,
                votes: this.votes[player.id] || 0
            }))
            .sort((a, b) => b.votes - a.votes);

        // Create results HTML
        const resultsHTML = sortedResults.map((player, index) => {
            const position = index + 1;
            const percentage = this.getTotalVotes() > 0 ? 
                Math.round((player.votes / this.getTotalVotes()) * 100) : 0;
            
            return `
                <div class="result-item ${position === 1 ? 'winner' : ''}">
                    <div class="result-position">#${position}</div>
                    <div class="result-player" style="--player-color: ${player.color}">
                        ${player.name}
                    </div>
                    <div class="result-votes">
                        ${player.votes} vote${player.votes !== 1 ? 's' : ''} (${percentage}%)
                    </div>
                </div>
            `;
        }).join('');

        resultsDisplay.innerHTML = resultsHTML || '<p>No votes were cast.</p>';
    }

    // Get total votes cast
    getTotalVotes() {
        return Object.values(this.votes).reduce((total, count) => total + count, 0);
    }

    // Move to next question
    nextQuestion() {
        this.showRandomQuestion();
    }

    // Show error message
    showError() {
        const questionText = document.getElementById('question-text');
        questionText.textContent = 'Error loading questions. Please refresh the page.';
    }
}

// Create global instance
window.thevotinggameGame = new TheVotingGame();
