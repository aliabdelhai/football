import { BrowserRouter as Link } from "react-router-dom";
import { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import '../styles/player.css'


function Team(props) {

  return (
    <div >
            <div className='player'>
                <img src={props.team.logo} className='teamlogo' />
                <div className='playerName'>{props.team.team}</div>

            </div>            
    </div>
  );
}

export default Team;