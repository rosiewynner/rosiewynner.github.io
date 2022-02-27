import React from 'react';
import InstaFeeds from '../insta-feed/instafeed'

export function IceCream() {
  return (

  <div >
    <h2 style={{width: '100%'}}>In January 2020 I conceived of a project so sweet.</h2>
    <h3 style={{width: '100%'}}>I wanted to expand my culinary horizons and learn how to make ice cream, while also forming connections with my colleagues. Naturally, I formed a small kick starter to keep me accountable for devising my flavors and delivering on my promises. Covid shut down my dreams of delivering ice cream to friends and coworkers not long after, but I still bought an ice cream maker and put in the work,making 50 different batches in the summer of 2020 and documenting them on instagram. It has been a joy to share ice cream with my favorite people.</h3>
    <a href='https://www.kickstarter.com/projects/1444231543/dont-let-ice-creams-be-dreams/description'></a>

    <InstaFeeds token={"IGQVJVa0dLLVFnaVlHVkhrVFBWVWhqZA1hEWU5WZAmgwLUVxTDh2ZAVpWWlpFR2hEOWpJR2d1LVZADeGRFdndlYXQ0ME83b3ItQTY4Tk1FUkU2TVhHbklEa2FWS0FucnJ5SEw1UEhuWGV3"} limit={12}/>
  </div>
);
  }

