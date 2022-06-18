import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', { transports: ['websocket'] });

function Game() {
    let data = useLocation();
    const [joined, setJoined] = useState(false);
    const [players, setPlayers] = useState(new Array());

    useEffect(() => {
        if (!joined) {
            // TODO: Pass player id via socket as well
            socket.emit("joining-game", { query: { gameId: data.state.gameId } });
            setJoined(true);
        }
    })


    socket.on("player-list", (arg) => {
        setPlayers(arg);
        console.log(players);
    });


    return (
        <div>
            This is a game with the id: {data.state.gameId}

            <p>PLAYERS:</p>
            {players.map((player, index) => (
                <p key={index}>{player.name}</p>
            ))}
        </div>
    )
}

export default Game;