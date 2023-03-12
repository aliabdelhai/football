import React, { useState } from "react";
import "../styles/actions.css";
import axios from 'axios'


function AddTeam(props) {

    const [input, setInput] = useState({ team: "", league: "", logo: ""})

    const add = async (input) => {
        const newTeam = {
            team: input.team,
            league: input.league,
            logo: input.logo
        };
        const team = await axios.post("http://localhost:4200/addTeam", newTeam)
        return team
        
    }

    return (
        <div id="Add-client">
            <h3>Add Team</h3>
            <div id="addPlayer">
                <div className="addwrapper" >
                    Team:
                    <input
                        className="addPlayerInput"
                        type="text"
                        id="team"
                        value={input.team}
                        onChange={({ target }) => setInput(state => ({ ...state, team: target.value }))}
                    /> </div>

                <div className="addwrapper">League:
                <input
                        list="league"
                        className="addPlayerInput"
                        type="text"
                        id="position"
                        value={input.league}
                        onChange={({ target }) => setInput(state => ({ ...state, league: target.value }))}
                />
                 <datalist id="league">
                    <option value="Laliga">Laliga</option>
                    <option value="Premier League">Premier League</option>
                    <option value="Ligue 1">Ligue  1</option>
                    <option value="Serie A">Serie A</option>
                    <option value="Bundesliga">Bundesliga</option>

                </datalist>
                
                </div>

                <div className="addwrapper">logo:
                <input
                        className="addPlayerInput"
                        type="text"
                        id="logo"
                        value={input.logo}
                        onChange={({ target }) => setInput(state => ({ ...state, logo: target.value }))}
                /></div>

   
            </div>
            <button id="addPlayerButton" onClick={() => add(input)}>Add team</button>

        </div>
    );
}


export default AddTeam;