import React from 'react';
import HikingImage from '../assets/hiking.jpeg';

export function HomePage() {
  return (
<div style={{display:'flex', flexDirection : 'column'}}>
    <div style={{margin: '5px'}}>

</div>
  <div style={{display:'flex', flexDirection:'row', margin: '15px' }}>
    <h2 style={{width: '50%', alignSelf: 'center'}}>Hi! I'm Rosie.</h2>
    <img src={HikingImage} alt='Snowshoeing in Utah!' width='50%'/>

    </div> 
    </div>
);
  }

