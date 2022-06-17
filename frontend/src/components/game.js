import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';

function Game() {
    let data = useLocation();

    return (
        <div>This is a game with the id: {data.state.gameId}</div>
    )
}

export default Game;