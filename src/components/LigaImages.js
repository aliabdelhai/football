import { BrowserRouter as Link } from "react-router-dom";
import { Component, useState } from 'react';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/player.css'

function LigaImages(props) {

  return (
    <div >
            <div className='player'>
            <a href={`${props.image.title}/teams`}>
                <img 
                    src={props.image.img} className='leagueImg'/> </a>
            </div>            
    </div>
  );
}

export default LigaImages;