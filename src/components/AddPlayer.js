import React, { useState } from "react";
import "../styles/actions.css";
import axios from 'axios'


function AddPlayer(props) {

    const [input, setInput] = useState({ name: "", jersey: "", team: "", pos:"", img: "" })

    const add = async (input) => {
        const newPlayer = {
            firstName: input.name.substring(0, input.name.indexOf(" ")),
            lastName: input.name.substring(input.name.indexOf(" ") + 1),
            jersey: input.jersey,
            team: input.team,
            pos: input.pos,
            img: input.img
        };
        console.log(newPlayer)
        await axios.post("http://localhost:4200/addPlayer", newPlayer)
        
    }

    return (
        <div id="Add-client">
            <h3>Add Player</h3>
            <div id="addPlayer">
                <div className="addwrapper" >
                    Name:
                    <input
                        className="addPlayerInput"
                        type="text"
                        id="name"
                        value={input.name}
                        onChange={({ target }) => setInput(state => ({ ...state, name: target.value }))}
                    /> </div>


                <div className="addwrapper">position:
                <input
                        list="email"
                        className="addPlayerInput"
                        type="text"
                        id="position"
                        value={input.pos}
                        onChange={({ target }) => setInput(state => ({ ...state, pos: target.value }))}
                />
                 <datalist id="email">
                    <option value="GoalKeeper">GoalKeeper</option>
                    <option value="Defender">Defender</option>
                    <option value="Midfielder">Midfielder</option>
                    <option value="Forward">Forward</option>
                </datalist>
                
                </div>

                <div className="addwrapper">image:
                <input
                        className="addPlayerInput"
                        type="text"
                        id="position"
                        value={input.img}
                        onChange={({ target }) => setInput(state => ({ ...state, img: target.value }))}
                /></div>

                <div className="addwrapper">jersey:
                <input
                        className="addPlayerInput"
                        type="text"
                        id="position"
                        value={input.jersey}
                        onChange={({ target }) => setInput(state => ({ ...state, jersey: target.value }))}
                /></div>     

                <div className="addwrapper">team:
                <input
                        className="addPlayerInput"
                        type="text"
                        id="position"
                        value={input.team}
                        onChange={({ target }) => setInput(state => ({ ...state, team: target.value }))}
                /></div>                           
                

                
            </div>
            <button id="addPlayerButton" onClick={() => add(input)}>Add New Player</button>
        </div>
    );
}


export default AddPlayer;