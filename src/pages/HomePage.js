import React, { useLayoutEffect, useRef, useState } from 'react';
// import HikingImage from '../assets/hiking.jpeg';
// import PaperPlaneIcon from  '../assets/paper-plane.png'
// import IthacaImage from '../assets/taughannock.svg'
// import CornellImage from '../assets/cornell.svg'
// import MetzImage from '../assets/metz.svg'
// import GraduationImage from '../assets/graduation.svg'

import Ithaca from '../assets/ithaca-poloroid.svg'
import Cornell from '../assets/cornell-poloroid.svg'
import Graduation from '../assets/graduation-poloroid.svg'
import Metz from '../assets/metz-poloroid.svg'


import './HomePage.scss';

export function HomePage() {

  const refRef = useRef(null);
  // const topPos = refRef.current.getBoundingClientRect().top;

  const [position, setPosition] = useState(0);

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

const onScroll = () => {
setPosition(window.scrollY);
}

  return (
    <div class="page" style={{display:'flex', flexDirection : 'row', height:'2000px'}}>
            <div style={{display:'flex', flexDirection : 'column'}}>
{/* <h1 class="date" >1997</h1> */}
</div>
     <img src={Ithaca} height='600px'/>
     <img src={Cornell}height='600px' />
    <img src={Metz}height='600px' />
    <img src={Graduation}height='600px' />

    </div>
);
  }



  ///  <div style={{display:'flex', flexDirection:'row', margin: '15px' }}>
    // <h2 style={{width: '50%', alignSelf: 'center'}}>Hi! I'm Rosie.</h2>
    // <img src={HikingImage} alt='Snowshoeing in Utah!' width='50%'/>
    // </div> 


  //   <div class="verticalLine" />
  //   <div style={{display:'flex', flexDirection : 'column'}}>
  //     <img src={IthacaImage} height='300px'/>
  //     <div style={{display:'flex', flexDirection : 'row', height:'300px'}}>
  //     <div class="horizontalLine"></div>
  //     <h1 class="bio">Born and Raised in Ithaca, NY</h1>
  //     </div>
  //     <img src={CornellImage} height='300px'/>
  //     <div style={{display:'flex', flexDirection : 'row', height:'300px'}}>
  //     <div class="horizontalLine"></div>
  //     <h1 class="bio"> Started study at Cornell University</h1>
  //     </div>
  //     <img src={MetzImage} height='300px'/>
  //     <div style={{display:'flex', flexDirection : 'row', height:'300px'}}>
  //     <div class="horizontalLine"></div>
  //     <h1 class="bio">Studied Abroad in Metz, France</h1>
  //     </div>
  //     <img src={GraduationImage} height='300px'/>
  //     <div style={{display:'flex', flexDirection : 'row', height:'300px'}}>
  //     <div class="horizontalLine"></div>
  //     <h1 class="bio">Graduated with a Bachelors in Computer Science</h1>
  //     </div>
  //     <div style={{display:'flex', flexDirection : 'row', height:'300px'}}>
  //     <div class="horizontalLine"></div>
  //     <h1 class="bio"> Started studying computer science at Cornell University</h1>
  //     </div>
  //     <div style={{display:'flex', flexDirection : 'row',}}>
  //     <div class="horizontalLine"></div>
  //     <h1 class="bio"> Started studying computer science at Cornell University</h1>
  //     </div> 
  //     <div style={{display:'flex', flexDirection : 'row', height:'100px'}}>
  //     <div class="horizontalLine"></div>
  //     <h1 class="bio"> Started studying computer science at Cornell University</h1>
  //     </div>
  //     <div style={{display:'flex', flexDirection : 'row', height:'100px'}}>
  //     <div class="horizontalLine"></div>
  //     <h1 class="bio"> Started studying computer science at Cornell University</h1>
  //     </div>
  //     <div style={{display:'flex', flexDirection : 'row', height:'100px'}}>
  //     <div class="horizontalLine"></div>
  //     <h1 class="bio">Moved to California to start work full time at Workday Inc</h1>
  //     {/* <img ref={refRef} class="slideanim" src={PaperPlaneIcon} style={{width:'50px', marginLeft: position, }} /> */}

  //     </div>
  //  <div style={{margin: '5px'}}> 
  // </div>