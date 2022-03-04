import React from 'react';
import Avocado from '../assets/avocados.png'
import Moon from '../assets/moon.png'
import Fish from '../assets/fish.png'
import painting2019 from '../assets/painting2019.png'
 
import './GalleryWall.scss'

export function GalleryWall() {
  return (
  <div>
      <img class='rotated' src={Avocado} height='300px' style={{position: 'fixed', left: '158px',top: '290px'}}></img>
      <img class='rotated' src={Moon} height='200px' style={{position: 'fixed', left: '782px',top: '236px'}}></img>
      <img src={Fish} height='300px' style={{position: 'fixed', left: '735px',top: '455px'}}></img>
      <img  class='rotated' src={painting2019} height='300px' style={{position: 'fixed', top: '300px', left:'300px'}}></img>

  </div>
);
  }

