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
playerList = [];

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("joining-game", (socket) => {
    console.log("New player joining game with id of: " + socket.query.gameId);
    io.emit("player-list", gameList.get(socket.query.gameId).getPlayers());

  })

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

http.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


// Route to create a new game
app.post("/api/game", async function(req, res) {
  // Create a new player
  var player = new Player(req.body.name);
  var game = new Game("GameId");

  player.setGameId(game.getId());
  game.addPlayer(player);

  // Add game and player to global list
  playerList.push(player);
  gameList.set(game.getId(), game);

  return res.json({gameId: game.getId(), success: true})
})