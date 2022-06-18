const express = require("express");
const app = express();
const cors = require("cors");
const http = require('http').createServer(app)
const io = require("socket.io")(http);
const port = process.env.PORT || 5000;

require("dotenv").config({ path: "./config.env" });
app.use(express.json())
app.use(cors());

const Player = require('./models/player')
const Game = require('./models/game')

gameList = new Map();
playerList = new Map();

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("joining-game", (socket) => {
    console.log("New player joining game with id of: " + socket.query.gameId);
    console.log(gameList.get(socket.query.gameId).getPlayers());
    io.emit("player-list", gameList.get(socket.query.gameId).getPlayers());

  })

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

http.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


//TODO: for the following routes, we need to check if a player with the same ID exists

// Route to create a new game
app.post("/api/game/create", async function(req, res) {
  // Create a new player
  var player = new Player(req.body.name);
  var game = new Game("GameId");

  player.setGameId(game.getId());
  game.addPlayer(player);
  game.setHost(player.getId());

  // Add game and player to global list
  playerList.set(player.getId(), player);
  gameList.set(game.getId(), game);

  return res.json({gameId: game.getId(), success: true})
})

// Route to join a game
app.post("/api/game/join", async function(req, res) {
  // Create a new player
  var player = new Player(req.body.name);
  playerList.set(player.getId(), player);

  // Add player to game
  gameList.get(req.body.gameId).addPlayer(player);
  
  return res.json({gameId: req.body.gameId, success: true})
})