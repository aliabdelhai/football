import '../styles/player.css'
import React  from 'react';

function DreamTeamPlayers(props) {

  return (
    <div >
            <div className='player'>
                <div className='playerName'>{props.player.firstName} {props.player.lastName}</div>
                <img alt="" src={props.player.img} className='playerImg' />
                <div className='pos'>{props.player.pos}</div>
            </div>            
    </div>
  );
}

export default DreamTeamPlayers;