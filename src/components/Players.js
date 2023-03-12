import { Component, useState } from 'react';
import '../styles/player.css'

function Players(props) {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  
  return (
    <div >
            <div className='player' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className='playerName'>{props.player.firstName} {props.player.lastName}</div>
                <img src={props.player.img} className='playerImg' />
                <div className='jersey'>{props.player.jersey}</div>
                <div className='pos'>{props.player.pos}</div>
                <div>
                {isHovering && (
                  <div>
                    <div className='goals'>Goals: {props.player.goals}</div>
                    <div className='goals'>Assists: {props.player.assists}</div>
                    <div className='goals'>Appearances: {props.player.appearances}</div>
                    <div className='goals'>Minutes played: {props.player.minutesPlayed}</div>
                    </div>
                    )}
                </div>
            </div>            
    </div>
  );
}

export default Players;