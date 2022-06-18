import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [gameId, setGameId] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleGameIdChange = e => {
        setGameId(e.target.value);
    }

    const createGame = async () => {
        await fetch('/api/game/create', {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify({ name: name })
        }
        ).then(async res => {
            await res.json().then(async log => {
                if (log.success) {
                    navigate("/game", {state: {gameId: log.gameId}})
                }
            }).catch(error => console.log(error));
        }).catch(error => console.log(error))
    }

    const joinGame = async () => {
        await fetch('/api/game/join', {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify({ name: name, gameId: gameId })
        }
        ).then(async res => {
            await res.json().then(async log => {
                navigate("/game", {state: {gameId: log.gameId}})
                // if (log.success) {
                //     navigate("/game", {state: {gameId: log.gameId}})
                // }
            }).catch(error => console.log(error));
        }).catch(error => console.log(error))
    }


    return (
        <div>
            <input onChange={handleNameChange} value={name} placeholder="Name"></input>
            <button onClick={createGame}>Create Game</button>

            <input onChange={handleGameIdChange} value={gameId} placeholder="GameId"></input>
            <button onClick={joinGame}>Join Game</button>
        </div>
    )
}

export default Home;