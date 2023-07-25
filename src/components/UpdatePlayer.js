import React, { useState } from "react";
import "../styles/actions.css";
import axios from 'axios'


function UpdatePlayer(props) {

    const [input, setInput] = useState({ name: "", team: "", pos: "", jersey: "", img: "", goals: "", assists: "", appearances: "", minutesPlayed: "" })

    const transfer = async (input) => {
        await axios.put(`http://localhost:4200/team/${input.name}/${input.team}`)
    }

    const updateJersey = async (input) => {
        await axios.put(`http://localhost:4200/jersey/${input.name}/${input.jersey}`)
    }

    const updateImage = async (input) => {
        await axios.put(`http://localhost:4200/image/${input.name}/${input.img}`)
    }

    const updatePosition = async (input) => {
        await axios.put(`http://localhost:4200/position/${input.name}/${input.pos}`)
    }

    const updateGoals = async (input) => {
        await axios.put(`http://localhost:4200/goals/${input.name}/${input.goals}`)
    }

    const updateAssists = async (input) => {
        await axios.put(`http://localhost:4200/assists/${input.name}/${input.assists}`)
    }

    const updateAppearances = async (input) => {
        await axios.put(`http://localhost:4200/appearances/${input.name}/${input.appearances}`)
    }

    const updateMinutesPlayed = async (input) => {
        await axios.put(`http://localhost:4200/minutesPlayed/${input.name}/${input.minutesPlayed}`)
    }

    const getJersey = () => {
        const jersey = props.players.filter(p => p.team === input.team).map(p => p.jersey);
        let newJersey = []
        for(let i=1; i<30; i++){
            if(!jersey.includes(i)){
                newJersey.push(i)
            }
        }
        return newJersey;
    }

    return (
        <div id="Update">
            <h3>Update</h3>
            <div className="updateWrapper">
                Player
          <input
                    placeholder="select player"
                    id="PlayerName"
                    list="client"
                    type="text"
                    className="selectInput"
                    value={input.name}
                    onChange={({ target }) => setInput(state => ({ ...state, name: target.value }))}
                />
                <datalist id="client">
                    {props.players.map(p => (
                        <option value={p.firstName + " "+  p.lastName} key={p._id} />
                    ))}
                </datalist>
            </div>


            <div className="updateWrapper">
                team
          <input
                    placeholder="Team"
                    id="transfer"
                    list="owner"
                    type="text"
                    className="selectInput"
                    value={input.team}
                    onChange={({ target }) => setInput(state => ({ ...state, team: target.value }))}
                />
                <datalist id="owner">
                    {props.teams.map((o, i) => (
                        <option value={o} key={i} />
                    ))}
                </datalist>

                <div className= "update-btn-text" onClick={()=>transfer(input)}>TRANSFER</div><span id="TRANSFER"></span>
            </div>

            <div className="updateWrapper">
                jersey
          <input
                    placeholder="Jersey"
                    id="transfer"
                    list="jersey"
                    type="text"
                    className="selectInput"
                    value={input.jersey}
                    onChange={({ target }) => setInput(state => ({ ...state, jersey: target.value }))}
                />
                <datalist id="jersey">
                    {getJersey().map((o, i) => (
                        <option value={o} key={i} />
                    ))}
                </datalist>

                <div className= "update-btn-text" onClick={()=>updateJersey(input)}>Update</div><span id="SEND"></span>
            </div>     

            <div className="updateWrapper">
                position
          <input
                    list="email"
                    id="sendEmail"
                    placeholder="Position"
                    onChange={({ target }) => setInput(state => ({ ...state, pos: target.value }))}
                    className="selectInput"
                />
                <datalist id="email">
                    <option value="GoalKeeper">GoalKeeper</option>
                    <option value="Defender">Defender</option>
                    <option value="Midfielder">Midfielder</option>
                    <option value="Forward">Forward</option>
                </datalist>

                <div className="update-btn-text" onClick={()=>updatePosition(input)}>Update</div><span id="SEND"></span>
            </div>

            <div className="updateWrapper">image
                <input
                        className="selectInput"
                        placeholder="image"
                        type="text"
                        id="img"
                        value={input.img}
                        onChange={({ target }) => setInput(state => ({ ...state, img: target.value }))}
                        
                />
                <div className="update-btn-text" onClick={()=>updateImage(input)}>Update</div><span id="SEND"></span>

            </div>

            <div className="updateWrapper">goals
                <input
                        className="selectInput"
                        placeholder="goals"
                        type="text"
                        id="goals"
                        value={input.goals}
                        onChange={({ target }) => setInput(state => ({ ...state, goals: target.value }))}
                        
                />
                <div className="update-btn-text" onClick={()=>updateGoals(input)}>Update</div><span id="SEND"></span>

            </div>

            <div className="updateWrapper">assists
                <input
                        className="selectInput"
                        placeholder="assists"
                        type="text"
                        id="assists"
                        value={input.assists}
                        onChange={({ target }) => setInput(state => ({ ...state, assists: target.value }))}
                        
                />
                <div className="update-btn-text" onClick={()=>updateAssists(input)}>Update</div><span id="SEND"></span>

            </div>

            <div className="updateWrapper">appearances
                <input
                        className="selectInput"
                        placeholder="appearances"
                        type="text"
                        id="img"
                        value={input.appearances}
                        onChange={({ target }) => setInput(state => ({ ...state, appearances: target.value }))}
                        
                />
                <div className="update-btn-text" onClick={()=>updateAppearances(input)}>Update</div><span id="SEND"></span>

            </div>

            <div className="updateWrapper">minutes played
                <input
                        className="selectInput"
                        placeholder="minutes played"
                        type="text"
                        id="img"
                        value={input.minutesPlayed}
                        onChange={({ target }) => setInput(state => ({ ...state, minutesPlayed: target.value }))}
                        
                />
                <div className="update-btn-text" onClick={()=>updateMinutesPlayed(input)}>Update</div><span id="SEND"></span>

            </div>

        </div>        
    );
}


export default UpdatePlayer;