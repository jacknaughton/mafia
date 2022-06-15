import React, { Component } from 'react';
import './App.css';

class App extends Component {
  createGame() {
    fetch('/api/game', {
      method: 'POST',
      credentials: 'include',
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      }
  ).then(function(res) {
      res.json().then(log => {
        
      });
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.createGame}>Create game</button>
      </div>
    );
  }

}

export default App;
