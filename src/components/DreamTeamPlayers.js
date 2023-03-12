import { BrowserRouter as Link } from "react-router-dom";
import { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import '../styles/player.css'


function DreamTeamPlayers(props) {

  return (
    <div >
            <div className='player'>
                <div className='playerName'>{props.player.firstName} {props.player.lastName}</div>
                <img src={props.player.img} className='playerImg' />
                <div className='pos'>{props.player.pos}</div>
            </div>            
    </div>
  );
}

export default DreamTeamPlayers;