import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Routes, Link, useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [gameId, setGameId] = useState('1234');

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const createGame = async () => {
        await fetch('/api/game', {
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
                //TODO: Only do the following if a success message is returned
                navigate("/game", {state: {gameId: log.gameId}})
                setGameId(log.gameId);
                if (log.success) {
                    
                }
            });
        }).catch(error => console.log(error))
    }


    return (
        <div>
            <input onChange={handleNameChange} value={name} placeholder="Name"></input>
            <button onClick={createGame}>Create Game</button>
        </div>
    )
}

export default Home;