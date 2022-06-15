class Game {
    id;
    state;
    players;
    shareCode;
    host;
    createdAt;
    
    constructor(id) {
        this.id = id;
        this.state = null;
        this.players = null;
        this.shareCode = null;
        this.host = null;
        this.createdAt = Date();
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