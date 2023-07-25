import {  useState } from 'react';
import Button from '@material-ui/core/Button';
import Players from './Players';
import LigaImages from './LigaImages';
import React  from 'react';
import axios from 'axios'

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
      '& .MuiTextField-root': {
          margin: theme.spacing(2),

      },
      '& > *': {
          margin: theme.spacing(2),
      },
  },
  btn: {
      marginTop: 17
  }

}));

const ligaImages = [
  {
    img: 'https://images.saymedia-content.com/.image/t_share/MTc0MjA4NDc4NTM2MzQ1NDY4/best-soccer-leagues.gif',
    title: 'Premier League',
  },
  {
    img: 'https://a2.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F15.png',
    title: 'Laliga',
  },
  {
    img: 'https://4.bp.blogspot.com/-4LwsXxqR5wY/Xu9eHQlhwuI/AAAAAAACdf8/6uIxrhfUHnYpXzfqMwwkq--mOq7WxlNgQCNcBGAsYHQ/s550/ligue-1-logo-%25284%2529.png',
    title: 'Ligue 1',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png',
    title: 'Bundesliga',
  },
  {
    img: 'https://play-lh.googleusercontent.com/CT3rvx6321K2XLYt8Q9QeIeXUFuWsp1DxDtzyuSSoZEhhYxvD5lyIR7RIQOz0EXmXXc',
    title: 'Serie A',
  },
];

function Home() {
  const [team, setTeam] = useState([])
  const [teamName, setTeamName] = useState('')


  const handleInput = function (e) {
    setTeamName(e.target.value)
  } 

  const search = async function () {
    console.log(teamName)
    const team = await axios.get(`http://localhost:4200/team/${teamName}`)
    console.log(team.data)
    setTeam(team.data)
  }


  const classes = useStyles();

  return (
    <div className={classes.root}>
            <center>
           <TextField
                    label="TEAM NAME"
                    id="outlined-size-small"
                    defaultValue=""
                    variant="outlined"
                    size="small"
                    value={teamName}
                    onChange={handleInput}
              />
              <Button className={classes.btn} variant="contained" color="primary" onClick={search}>
                  SEARCH 
              </Button>
            </center>

            <>
                <Grid container direction="row" justify="space-evenly" spacing={3}>
                    {
                        ligaImages.map(i => (
                            <Grid item >
                                <LigaImages image={i} />
                            </Grid>
                        ))
                    }
                </Grid>
            </>

            <hr></hr>

  

            <>
                <Grid container direction="row" justify="space-evenly" spacing={3}>
                    {
                        team.map(p => (
                            <Grid item key={p._id}>
                                <Players player={p} key={p._id} />
                            </Grid>
                        ))
                    }
                </Grid>
            </>
 
          

    </div>
  );
}

export default Home;