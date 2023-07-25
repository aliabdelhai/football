import React  from 'react';
import '../styles/player.css'

function Team(props) {

  return (
    <div >
            <div className='player'>
                <img alt="" src={props.team.logo} className='teamlogo' />
                <div className='playerName'>{props.team.team}</div>

            </div>            
    </div>
  );
}

export default Team;