import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import axios from "axios";
import * as serviceWorker from './serviceWorker';
import PlayerCard from "./components/PlayerCard";
import NavBar from "./components/NavBar";

class Player extends React.Component {
    state = {
        player: [],
        country:""
    }

    // componentDidMount() {
    //     fetch("http://localhost:5000/api/players")
    //     .then(res => res.json())
    //     .then(players => this.setState({player: players.data}))
    //     .catch(err => console.log("no:", err));
    // }

    // componentDidUpdate(prevState) {
    //     if (prevState.player !== this.state.player){
    //         fetch("http://localhost:5000/api/players")
    //         .then (res => res.json())
    //         .then(country => this.setState({location: country.data  }))
    //         .catch (err => console.log("no: ", err));
    //     }
    // }

    handleChange = event => { 
        this.setState({player: event.target.value});
    };

    handleClick = event => {
        event.preventDefault(); 
        axios.get("http://localhost:5000/api/players")
        .then ( res => this.setState({player: res.data}))
        .catch (err => {
            console.log(err.message);
        })
    }

        render() {
            return (
                <div>
                    <NavBar />
                    <h1>Women's World Cup</h1>
                   <button onClick = {this.handleClick}>Get Players</button>
                   {this.state.player.map( player =>
                  <PlayerCard player = {player}/>)}
                </div>
            )

        }
    }



const rootElement = document.getElementById("root");
ReactDOM.render(<Player />,  rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
