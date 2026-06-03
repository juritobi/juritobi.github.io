// Never Have I Ever Game
class NeverHaveIEverGame {
    constructor() {
        this.currentQuestion = null;
        this.questions = [];
        this.playerManager = null;
    }

    // Initialize the game
    init(playerManager) {
        console.log('Never Have I Ever game initializing...');
        this.playerManager = playerManager;
        this.loadQuestions();
        this.renderGame();
    }

    // Load questions from JSON file
    async loadQuestions() {
        try {
            // Use absolute path from root
            const response = await fetch('./games/never-have-i-ever/questions.json');
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
        console.log('Rendering Never Have I Ever game...');
        const gameContent = document.getElementById('game-content');
        gameContent.innerHTML = `
            <div class="never-have-i-ever-container">
                <div class="question-display" id="question-display">
                    <div class="question-text" id="question-text">
                        Loading questions...
                    </div>
                </div>
                <div class="tap-instruction">
                    Tap anywhere to get a new question
                </div>
                ${window.gameCommon.formatPlayersList()}
            </div>
        `;

        // Add click event listener to question display
        const questionDisplay = document.getElementById('question-display');
        questionDisplay.addEventListener('click', () => {
            this.showRandomQuestion();
        });

        // Add click event listener to the entire container for easier tapping
        const container = document.querySelector('.never-have-i-ever-container');
        container.addEventListener('click', (e) => {
            if (e.target === container || e.target.classList.contains('tap-instruction')) {
                this.showRandomQuestion();
            }
        });
    }

    // Show a random question
    showRandomQuestion() {
        if (this.questions.length === 0) {
            this.showError();
            return;
        }

        // Get a random question
        const randomIndex = Math.floor(Math.random() * this.questions.length);
        this.currentQuestion = this.questions[randomIndex];

        // Update the display
        const questionText = document.getElementById('question-text');
        questionText.textContent = this.currentQuestion;

        // Add a subtle animation
        const questionDisplay = document.getElementById('question-display');
        questionDisplay.style.transform = 'scale(0.95)';
        setTimeout(() => {
            questionDisplay.style.transform = 'scale(1)';
        }, 100);
    }

    // Show error message
    showError() {
        const questionText = document.getElementById('question-text');
        questionText.textContent = 'Error loading questions. Please refresh the page.';
    }
}

// Create global instance
window.neverhaveieverGame = new NeverHaveIEverGame();
