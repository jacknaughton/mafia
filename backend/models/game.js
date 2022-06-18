class Game {
    id;
    state;
    players;
    shareCode;
    host;
    createdAt;
    
    constructor() {
        this.id = this.generateId();
        this.state = null;
        this.players = [];
        this.shareCode = null;
        this.host = null;
        this.createdAt = Date();
    }

    generateId() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    addPlayer(player) {
        this.players.push(player);
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }

    getPlayers() {
        return this.players;
    }

    setPlayers(players) {
        this.players = players;
    }

    getShareCode() {
        return this.shareCode;
    }

    setShareCode(shareCode) {
        this.shareCode = shareCode;
    }

    getHost() {
        return this.host;
    }

    setHost(host) {
        this.host = host;
    }

    getCreatedAt() {
        return this.createdAt;
    }

}

module.exports = Game;