import React from 'react';
import InstaFeeds from '../insta-feed/instafeed'
import InstaIcon from '../assets/instagram-icon.jpeg'
import KickStartIcon from '../assets/kickstarter-icon.png'

export function IceCream() {
  return (

  <div style={{display: 'flex', flexDirection: 'column'}}>
      <div  style={{ alignSelf: 'center', alignItems: 'center', margin: '30px', marginTop: '50px', display: 'flex',
    flexDirection: 'column', width: '54%'}}>
    <h2 >In January 2020 I conceived of a project so sweet.</h2>
    <h4 >I wanted to expand my culinary horizons and learn how to make ice cream, while also forming connections with my colleagues. Naturally, I formed a small kick starter to keep me accountable for devising my flavors and delivering on my promises. Covid shut down my dreams of delivering ice cream to friends and coworkers not long after, but I still bought an ice cream maker and put in the work, making 50 different batches in the summer of 2020 and documenting them on instagram.</h4>
    <h4>It has been a joy to share ice cream with my favorite people.</h4>
    <div  style={{width: '100%', margin: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>  
<div style={{ margin: '10px'}}>
 <a href='https://www.kickstarter.com/projects/1444231543/dont-let-ice-creams-be-dreams/description'>
    <img src={KickStartIcon} alt='kickstarter' width='50px'/>
    </a>
    </div> 
    <div style={{ margin: '10px'}}>
    <a href='https://www.instagram.com/icecreamdreamsca/'> 
    <img src={InstaIcon} alt='instagram' width='50px'/>
    </a></div>    </div> 

</div>

    <InstaFeeds token={"IGQVJVa0dLLVFnaVlHVkhrVFBWVWhqZA1hEWU5WZAmgwLUVxTDh2ZAVpWWlpFR2hEOWpJR2d1LVZADeGRFdndlYXQ0ME83b3ItQTY4Tk1FUkU2TVhHbklEa2FWS0FucnJ5SEw1UEhuWGV3"} limit={48}/>
  </div>
);
  }

