// Common functions for all games
class GameCommon {
    constructor() {
        this.playerManager = null;
    }

    // Initialize with player manager reference
    init(playerManager) {
        this.playerManager = playerManager;
    }

    // Get random question from a JSON file
    async getRandomQuestion(gameFolder) {
        try {
            const response = await fetch(`./games/${gameFolder}/questions.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const questions = data.questions || data;
            return questions[Math.floor(Math.random() * questions.length)];
        } catch (error) {
            console.error('Error loading questions:', error);
            return "Error loading questions. Please try again.";
        }
    }

    // Add score to a player
    addScore(playerId, points = 1) {
        if (!this.playerManager) return;
        
        const player = this.playerManager.activePlayers.find(p => p.id === playerId);
        if (player) {
            player.score = (player.score || 0) + points;
            this.playerManager.saveActivePlayers();
        }
    }

    // Remove score from a player
    removeScore(playerId, points = 1) {
        if (!this.playerManager) return;
        
        const player = this.playerManager.activePlayers.find(p => p.id === playerId);
        if (player) {
            player.score = Math.max(0, (player.score || 0) - points);
            this.playerManager.saveActivePlayers();
        }
    }

    // Set score for a player
    setScore(playerId, score) {
        if (!this.playerManager) return;
        
        const player = this.playerManager.activePlayers.find(p => p.id === playerId);
        if (player) {
            player.score = score;
            this.playerManager.saveActivePlayers();
        }
    }

    // Get player score
    getScore(playerId) {
        if (!this.playerManager) return 0;
        
        const player = this.playerManager.activePlayers.find(p => p.id === playerId);
        return player ? (player.score || 0) : 0;
    }

    // Get all players with their scores
    getPlayersWithScores() {
        if (!this.playerManager) return [];
        
        return this.playerManager.activePlayers.map(player => ({
            ...player,
            score: player.score || 0
        }));
    }

    // Reset all scores
    resetScores() {
        if (!this.playerManager) return;
        
        this.playerManager.activePlayers.forEach(player => {
            player.score = 0;
        });
        this.playerManager.saveActivePlayers();
    }

    // Get random player
    getRandomPlayer() {
        if (!this.playerManager || this.playerManager.activePlayers.length === 0) return null;
        
        const players = this.playerManager.activePlayers;
        return players[Math.floor(Math.random() * players.length)];
    }

    // Shuffle array
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Format player list for display (non-interactive)
    formatPlayersList() {
        if (!this.playerManager || this.playerManager.activePlayers.length === 0) {
            return '<p class="no-players">No players selected</p>';
        }

        return `
            <div class="game-players">
                <h3>Players</h3>
                <div class="game-players-list">
                    ${this.playerManager.activePlayers.map(player => 
                        `<div class="game-player" style="--player-color: ${player.color}">${player.name}</div>`
                    ).join('')}
                </div>
            </div>
        `;
    }

    // Navigate to a game
    navigateToGame(gameId, gameTitle) {
        // Hide main menu
        document.querySelector('.container').style.display = 'none';
        
        // Show game view
        const gameView = document.getElementById('game-view');
        gameView.classList.remove('hidden');
        
        // Set game title
        document.getElementById('game-title').textContent = gameTitle;
        
        // Load game content
        this.loadGameContent(gameId);
    }

    // Load game content dynamically
    async loadGameContent(gameId) {
        const gameContent = document.getElementById('game-content');
        
        try {
            // Load the game's JavaScript file
            const script = document.createElement('script');
            script.src = `./games/${gameId}/game.js`;
            script.onload = () => {
                console.log(`Game script loaded: ${gameId}`);
                // Initialize the game if it has an init function
                if (window[`${gameId.replace(/-/g, '')}Game`] && window[`${gameId.replace(/-/g, '')}Game`].init) {
                    window[`${gameId.replace(/-/g, '')}Game`].init(this.playerManager);
                }
            };
            script.onerror = () => {
                console.error(`Failed to load game script: ${gameId}`);
                gameContent.innerHTML = `
                    <div class="game-placeholder">
                        <h3>Error Loading Game</h3>
                        <p>Could not load the game script. Please check the file path.</p>
                    </div>
                `;
            };
            document.head.appendChild(script);
        } catch (error) {
            console.error('Error loading game:', error);
            gameContent.innerHTML = `
                <div class="game-placeholder">
                    <h3>Error Loading Game</h3>
                    <p>Could not load the game. Please try again.</p>
                </div>
            `;
        }
    }

    // Navigate back to main menu
    navigateToMenu() {
        // Show main menu
        document.querySelector('.container').style.display = 'block';
        
        // Hide game view
        const gameView = document.getElementById('game-view');
        gameView.classList.add('hidden');
        
        // Clear game content
        document.getElementById('game-content').innerHTML = '';
        
        // Remove any loaded game scripts
        const gameScripts = document.querySelectorAll('script[src*="games/"]');
        gameScripts.forEach(script => script.remove());
    }
}

// Create global instance
window.gameCommon = new GameCommon();
