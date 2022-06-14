class Game {
    id;
    state;
    playerCount;
    shareCode;
    host;
    createdAt;
    
    constructor(id) {
        this.id = id;
        this.state = null;
        this.playerCount = null;
        this.shareCode = null;
        this.host = null;
        this.createdAt = Date();
    }

}

module.exports = Game;