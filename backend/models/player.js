class Player {
    id;
    name;
    role;
    gameId;
    alive;
    createdAt;

    constructor(name) {
        this.name = name;
        this.role = "None";
        this.gameId = null;
        this.alive = false;
        this.createdAt = Date();
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getRole() {
        return this.role;
    }

    setRole(role) {
        this.role = role;
    }

    getGameId() {
        return this.gameId;
    }

    setGameId(gameId) {
        this.gameId = gameId;
    }

    getAlive() {
        return this.alive;
    }

    setAlive(alive) {
        this.alive = alive;
    }
}

module.exports = Player;