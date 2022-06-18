import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Routes, Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap"
import '../style/styles.scss'
import logo from '../images/mafia-logo.svg'

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
        <Container>
            <Row className='align-items-center'>
                <Col xs={12}>
                    <img className="logo" src={logo} alt='Mafia' />
                </Col>
                <Col xs={12}>
                <input onChange={handleNameChange} value={name} placeholder="Name"></input>
                </Col>
                <Col xs={12}>
                <button onClick={createGame} class="button host">Create Game</button>
                </Col>
                <Col xs={12}>
                <input onChange={handleGameIdChange} value={gameId} placeholder="GameId"></input>
                <button onClick={joinGame}>Join Game</button>
                </Col>
                <Col xs={12}>
                    <p className="white">Created by Tom, Dan &amp; Jack</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;