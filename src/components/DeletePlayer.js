import React, { useState } from "react";
import "../styles/actions.css";
import axios from 'axios'


function DeletePlayer(props) {

    const [input, setInput] = useState({ name: "", team: "" })

    const remove = async (input) => {
        let player;
        if(input.name.indexOf(' ') >= 0) {
            player = {
                firstName: input.name.substring(0, input.name.indexOf(" ")),
                lastName: input.name.substring(input.name.indexOf(" ") + 1),
                team: input.team
            };
        } else {
            player = {
                firstName: input.name,
                lastName: "",
                team: input.team
            };
        }
        console.log(player)
        const p = await axios.delete(`http://localhost:4200/deletePlayer`, { data: { player } })
        console.log(p)
        
    }

    return (
        <div id="Add-client">
            <h3>Remove Player</h3>
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


                <div className="addwrapper">team:
                <input
                        className="addPlayerInput"
                        type="text"
                        id="position"
                        value={input.team}
                        onChange={({ target }) => setInput(state => ({ ...state, team: target.value }))}
                /></div>                           
                

                
            </div>
            <button id="addPlayerButton" onClick={() => remove(input)}>Remove Player</button>
        </div>
    );
}


export default DeletePlayer;