import '../styles/actions.css';
import AddPlayer from "./AddPlayer";
import DeletePlayer from "./DeletePlayer";
import UpdatePlayer from "./UpdatePlayer";
import AddTeam from "./AddTeam";

import axios from 'axios'
import { Component, useEffect, useState } from 'react';



function Actions() {

    const [players, setPlayers] = useState([])
    const [teams, setTeams] = useState([])


    useEffect(async () => {
        const players = await axios.get('http://localhost:4200/players')
        let teams = new Set();
        players.data.map(p => teams.add(p.team));
        let teamsArray = Array.from(teams);
        setTeams(teamsArray)
        setPlayers(players.data)

      }, [])

    return (
        <div>
            <AddPlayer />
            <hr></hr>
            <DeletePlayer />
            <hr></hr>
            <UpdatePlayer players={players} teams={teams}/>
            <hr></hr>
            <AddTeam/>

        </div>
    )
}

export default Actions;