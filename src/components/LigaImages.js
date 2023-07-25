import '../styles/player.css'
import React  from 'react';

function LigaImages(props) {

  return (
    <div >
            <div className='player'>
            <a href={`${props.image.title}/teams`}>
                <img 
                    src={props.image.img} className='leagueImg' alt=""/> </a>
            </div>            
    </div>
  );
}

export default LigaImages;