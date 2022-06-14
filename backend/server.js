const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const Player = require('./models/player')

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


// Testing player creation
playerList = [];

var player = new Player("Dan");
var player2 = new Player("Jack");
playerList.push(player);
playerList.push(player2);

playerList.forEach(element => {
  console.log(element)
});

