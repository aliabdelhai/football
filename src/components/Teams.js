import '../styles/player.css'
import Team from "./Team";
import { Grid } from "@material-ui/core";
import axios from 'axios'
import { useEffect, useState } from 'react';

function Teams(props) {

    const league = props.league
    const [teams, setTeams] = useState([])
    console.log(league)

    useEffect(async () => {
        const teams = await axios.get(`http://localhost:4200/league/${league}`)
        setTeams(teams.data)
        console.log(teams)
    
      }, [])

  
  return (
    <div >
            <>
                <Grid container direction="row" justify="space-evenly" spacing={3}>
                    {
                        teams.map(t => (
                            <Grid item key={t._id}>
                                <Team team={t} key={t._id} />
                            </Grid>
                        ))
                    }
                </Grid>
            </>        
    </div>
  );
}

export default Teams;