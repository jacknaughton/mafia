const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const Player = require('./models/player')
const Game = require('./models/game')

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


// // Testing player creation
// playerList = [];

// var player = new Player("Dan");
// var player2 = new Player("Jack");
// playerList.push(player);
// playerList.push(player2);

// playerList.forEach(element => {
//   console.log(element)
// });

// // Testing game creation
// gameList = [];

// var game = new Game("Dan");
// var game2 = new Game("Jack");
// gameList.push(game);
// gameList.push(game2);

// gameList.forEach(element => {
//   console.log(element)
// });

// Route to create a new game
app.post("/api/game", async function(req, res) {
  // Testing game creation
  gameList = [];

  var game = new Game("GameId");
  game.setPlayers(req.body.name)
  gameList.push(game);

  gameList.forEach(element => {
    console.log(element)
  });

  return res.json({gameId: game.getId()})
})


