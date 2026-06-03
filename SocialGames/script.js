// Player Management System
class PlayerManager {
    constructor() {
        this.playerLibrary = this.loadPlayerLibrary();
        this.activePlayers = this.loadActivePlayers();
        this.colorIndex = 0;
        this.colors = [
            '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3',
            '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43', '#ee5a24', '#0984e3'
        ];
        
        this.renderActivePlayers();
        this.renderPlayerLibrary();
    }

    // Initialize after DOM is loaded
    init() {
        this.initializeEventListeners();
    }

    // Local Storage Methods
    loadPlayerLibrary() {
        const stored = localStorage.getItem('playerLibrary');
        return stored ? JSON.parse(stored) : [];
    }

    savePlayerLibrary() {
        localStorage.setItem('playerLibrary', JSON.stringify(this.playerLibrary));
    }

    loadActivePlayers() {
        const stored = localStorage.getItem('activePlayers');
        return stored ? JSON.parse(stored) : [];
    }

    saveActivePlayers() {
        localStorage.setItem('activePlayers', JSON.stringify(this.activePlayers));
    }

    // Player Management Methods
    addPlayer(name) {
        if (!name.trim()) return false;
        
        const player = {
            id: Date.now(),
            name: name.trim(),
            color: this.getNextColor()
        };
        
        this.playerLibrary.push(player);
        this.savePlayerLibrary();
        this.renderPlayerLibrary();
        return true;
    }

    deletePlayer(playerId) {
        this.playerLibrary = this.playerLibrary.filter(p => p.id !== playerId);
        this.activePlayers = this.activePlayers.filter(p => p.id !== playerId);
        this.savePlayerLibrary();
        this.saveActivePlayers();
        this.renderPlayerLibrary();
        this.renderActivePlayers();
    }

    toggleActivePlayer(player) {
        const isActive = this.activePlayers.some(p => p.id === player.id);
        
        if (isActive) {
            this.activePlayers = this.activePlayers.filter(p => p.id !== player.id);
        } else {
            this.activePlayers.push(player);
        }
        
        this.saveActivePlayers();
        this.renderActivePlayers();
    }

    getNextColor() {
        const color = this.colors[this.colorIndex % this.colors.length];
        this.colorIndex++;
        return color;
    }

    // Rendering Methods
    renderActivePlayers() {
        const container = document.getElementById('active-players');
        
        if (this.activePlayers.length === 0) {
            container.innerHTML = '<p class="no-players">No players selected. Click "Modify Players" to add some!</p>';
            return;
        }

        container.innerHTML = this.activePlayers.map(player => 
            `<div class="active-player" style="--player-color: ${player.color}">${player.name}</div>`
        ).join('');
    }

    renderPlayerLibrary() {
        const container = document.getElementById('players-grid');
        
        if (this.playerLibrary.length === 0) {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666; font-style: italic;">No players in library. Add some players to get started!</p>';
            return;
        }

        container.innerHTML = this.playerLibrary.map(player => {
            const isActive = this.activePlayers.some(p => p.id === player.id);
            return `
                <div class="player-item ${isActive ? 'selected' : ''}" 
                     style="background-color: ${player.color}" 
                     data-player-id="${player.id}">
                    <div class="player-name">${player.name}</div>
                    <button class="delete-btn" data-player-id="${player.id}">&times;</button>
                </div>
            `;
        }).join('');
    }

    // Event Listeners
    initializeEventListeners() {
        console.log('Initializing event listeners...');
        
        // Modify players button
        const modifyBtn = document.getElementById('modify-players-btn');
        if (modifyBtn) {
            modifyBtn.addEventListener('click', () => {
                console.log('Modify players button clicked');
                document.getElementById('player-modal').style.display = 'block';
            });
        } else {
            console.error('Modify players button not found!');
        }

        // Close modal buttons
        const closeModalBtn = document.getElementById('close-modal');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                document.getElementById('player-modal').style.display = 'none';
            });
        } else {
            console.error('Close modal button not found!');
        }

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            const playerModal = document.getElementById('player-modal');
            
            if (e.target === playerModal) {
                playerModal.style.display = 'none';
            }
        });

        // Add player form
        const addPlayerBtn = document.getElementById('add-player-btn');
        if (addPlayerBtn) {
            addPlayerBtn.addEventListener('click', () => {
                console.log('Add player button clicked');
                const nameInput = document.getElementById('new-player-name');
                const name = nameInput.value.trim();
                
                if (name) {
                    console.log('Adding player:', name);
                    if (this.addPlayer(name)) {
                        nameInput.value = '';
                        nameInput.focus();
                        console.log('Player added successfully');
                    }
                } else {
                    console.log('No name provided');
                }
            });
        } else {
            console.error('Add player button not found!');
        }

        // Add player on Enter key
        const nameInput = document.getElementById('new-player-name');
        if (nameInput) {
            nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    document.getElementById('add-player-btn').click();
                }
            });
        } else {
            console.error('Name input not found!');
        }

        // Save players button
        const savePlayersBtn = document.getElementById('save-players-btn');
        if (savePlayersBtn) {
            savePlayersBtn.addEventListener('click', () => {
                document.getElementById('player-modal').style.display = 'none';
            });
        } else {
            console.error('Save players button not found!');
        }

        // Player library interactions
        document.addEventListener('click', (e) => {
            if (e.target.closest('.player-item')) {
                const playerItem = e.target.closest('.player-item');
                const playerId = parseInt(playerItem.dataset.playerId);
                const player = this.playerLibrary.find(p => p.id === playerId);
                
                if (player) {
                    this.toggleActivePlayer(player);
                    this.renderPlayerLibrary();
                }
            }
            
            if (e.target.classList.contains('delete-btn')) {
                e.stopPropagation();
                const playerId = parseInt(e.target.dataset.playerId);
                if (confirm('Are you sure you want to delete this player?')) {
                    this.deletePlayer(playerId);
                }
            }
        });
    }
}

// Game Management System
class GameManager {
    constructor(playerManager) {
        this.playerManager = playerManager;
        this.games = {
            'would-you-rather': {
                title: 'Would You Rather',
                icon: '🤔',
                description: 'Make tough choices and see what your friends prefer!'
            },
            'never-have-i-ever': {
                title: 'Never Have I Ever',
                icon: '🙅‍♀️',
                description: 'Discover surprising facts about your friends!'
            },
            'its-a-10-but': {
                title: 'It\'s a 10 But',
                icon: '🔟',
                description: 'Rate things but with a twist!'
            },
            'the-voting-game': {
                title: 'The Voting Game',
                icon: '🗳️',
                description: 'Vote on controversial topics and see the results!'
            },
            'paranoia': {
                title: 'Paranoia',
                icon: '👁️',
                description: 'Ask and answer questions anonymously!'
            }
        };
        
        this.initializeGameListeners();
        this.initializeNavigationListeners();
    }

    initializeGameListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.game-card')) {
                const gameCard = e.target.closest('.game-card');
                const gameId = gameCard.dataset.game;
                this.startGame(gameId);
            }
        });
    }

    initializeNavigationListeners() {
        // Back to menu button
        document.getElementById('back-to-menu').addEventListener('click', () => {
            window.gameCommon.navigateToMenu();
        });
    }

    startGame(gameId) {
        if (this.playerManager.activePlayers.length === 0) {
            alert('Please select at least one player before starting a game!');
            return;
        }

        const game = this.games[gameId];
        if (!game) return;

        // Initialize common functions with player manager
        window.gameCommon.init(this.playerManager);
        
        // Navigate to game
        window.gameCommon.navigateToGame(gameId, game.title);
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing app...');
    
    try {
        const playerManager = new PlayerManager();
        const gameManager = new GameManager(playerManager);
        
        // Initialize player manager after DOM is loaded
        playerManager.init();
        
        // Make managers globally available for debugging
        window.playerManager = playerManager;
        window.gameManager = gameManager;
        
        // Add test function
        window.testApp = () => {
            console.log('Testing app...');
            console.log('Player manager:', playerManager);
            console.log('Modify button exists:', !!document.getElementById('modify-players-btn'));
            console.log('Add button exists:', !!document.getElementById('add-player-btn'));
            console.log('Name input exists:', !!document.getElementById('new-player-name'));
        };
        
        console.log('App initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
    }
});
