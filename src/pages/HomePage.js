import React from 'react';
import Ithaca from '../assets/ithaca-polaroid.svg'
import Cornell from '../assets/cornell-polaroid.svg'
import Graduation from '../assets/graduation-polaroid.svg'
import Metz from '../assets/metz-polaroid.svg'
import PushPin from '../assets/push-pin.png'
import PushPin2 from '../assets/push-pin-2.png'
import PushPin3 from '../assets/push-pin-3.png'
import Hiking from '../assets/hiking.jpeg'
import Yellowstone from '../assets/yellowstone.jpg'
import Glacier from '../assets/glacier.jpg'
import Note from '../assets/note.png'

import Draggable from 'react-draggable';


import '../assets/hate_your_writing/Regular.ttf';

import './HomePage.scss';

export function HomePage() {

  return (
    <div class="page" style={{display:'flex', flexDirection : 'column', height:'2000px'}}>
<div style={{display: 'flex', flexDirection: 'row'}}>
     <Draggable handle="#handle">
       <div className={'ithaca'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="handle" src={PushPin} width='40px' style={{position: 'absolute', marginLeft: '180px'}}/>
         <img  src={Ithaca} height='400px'/>
         </div>
         </Draggable>
         <Draggable handle="#handle">
       <div className={'cornell'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="handle" src={PushPin2} width='40px' style={{position: 'absolute', marginLeft: '180px'}}/>
         <img  src={Cornell} height='400px'/>
         </div>
         </Draggable>
         <Draggable handle="#handle">
       <div className={'metz'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="handle" src={PushPin3} width='40px' style={{position: 'absolute', marginLeft: '180px'}}/>
         <img  src={Metz} height='400px'/>
         </div>
         </Draggable>
         <Draggable handle="#handle">
       <div className={'graduation'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="handle" src={PushPin} width='40px' style={{position: 'absolute', marginLeft: '180px'}}/>
         <img  src={Graduation} height='400px'/>
         </div>
         </Draggable>
         </div>
         <div style={{display: 'flex', flexDirection: 'row'}}>
     <Draggable handle="#handle">
       <div className={'note'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="note" src={PushPin} width='40px' style={{position: 'absolute', marginLeft: '230px'}}/>
         {/* <h1 class='handwriting' style={{marginTop: '15px', marginLeft: '280px'}}>Snowshoeing in Utah!</h1> */}
         <img  src={Note} width='500px'/>
         </div>
         </Draggable>
         </div>
         <div style={{display: 'flex', flexDirection: 'row'}}>
     <Draggable handle="#handle">
       <div className={'snowshoeing'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="handle" src={PushPin} width='40px' style={{position: 'absolute', marginLeft: '230px'}}/>
         <h1 class='handwriting' style={{marginTop: '15px', marginLeft: '280px'}}>Snowshoeing in Utah!</h1>
         <img  src={Hiking} width='500px'/>
         </div>
         </Draggable>
         <Draggable handle="#handle">
       <div className={'glacier'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="handle" src={PushPin2} width='40px' style={{position: 'absolute', marginLeft: '230px'}}/>
         <h1 class='handwriting' style={{marginTop: '250px', marginLeft: '280px'}}>Glacier National Park</h1>
         <img  src={Glacier} width='500px'/>
         </div>
         </Draggable>
         <Draggable handle="#handle">
       <div className={'yellowstone'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="handle" src={PushPin3} width='40px' style={{position: 'absolute', marginLeft: '230px'}}/>
         <h1 class='handwriting' style={{marginTop: '15px', marginLeft: '280px'}}>Yellowstone</h1>
         <img  src={Yellowstone} width='500px'/>
         </div>
         </Draggable>
         </div>

    </div>
);
  }

