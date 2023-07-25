import axios from 'axios'
import { useEffect, useState } from 'react';
import { Grid } from "@material-ui/core";
import React  from 'react';
import DreamTeamPlayers from "./DreamTeamPlayers";

function DreamTeam(props) {

  const [bestPlayers, setBestPlayers] = useState([])

  const getBestGoalkeeper = async() => {
    const goalkeepers = await axios.get('http://localhost:4200/goalkeepers')
    return goalkeepers.data.reduce((maxApp, goalkeeper) => maxApp.appearances > goalkeeper.appearances ? maxApp : goalkeeper)
  }

  const getDefenders = async() => {
    const defenders = await axios.get('http://localhost:4200/defenders')
    let besFourDefenders = []
    defenders.data.sort((def1, def2) => def2.minutesPlayed - def1.minutesPlayed).forEach((d, ind) => {
      if(ind < 4) {
        besFourDefenders.push(d)
      }
    })
    console.log(besFourDefenders)
    return besFourDefenders;
  }


  const getMidfielders = async() => {
    const midfielders = await axios.get('http://localhost:4200/midfielders')
    console.log(midfielders.data)
    let besThreeMid = []
    midfielders.data.sort((mid1, mid2) => mid2.assists - mid1.assists).forEach((m, ind) => {
      if(ind < 3) {
        besThreeMid.push(m)
      }
    })
    console.log(besThreeMid)
    return besThreeMid;
  }

  const getForwards = async() => {
    const forwards = await axios.get('http://localhost:4200/forwards')
    let besThreeForwards = []
    forwards.data.sort((forw1, forw2) => forw2.goals - forw1.goals).forEach((f, ind) => {
      if(ind < 3) {
        besThreeForwards.push(f)
      }
    })
    console.log(besThreeForwards)
    return besThreeForwards;
  }

  useEffect(async () => {
    let bestGoalkeeper = await getBestGoalkeeper();
    let bestDefenders = await getDefenders();
    let bestMidfielders = await getMidfielders();
    let bestForwards = await getForwards();
    let bestTeam = [bestGoalkeeper, ...bestDefenders, ...bestMidfielders, ...bestForwards]

    setBestPlayers(bestTeam)

  }, [])

  return (
    <div >

            <>
                <Grid container direction="row" justify="space-evenly" spacing={3}>
                    {
                        bestPlayers.map(bp => (
                            <Grid item key={bp._id}>
                                <DreamTeamPlayers player={bp} key={bp._id} />
                            </Grid>
                        ))
                    }
                </Grid>
            </>
    </div>
  );
}

export default DreamTeam;