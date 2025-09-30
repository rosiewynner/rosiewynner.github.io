<script>
    import Ithaca from '$lib/assets/ithaca-polaroid.svg'
    import Cornell from '$lib/assets/cornell-polaroid.svg'
    import Graduation from '$lib/assets/graduation-polaroid.svg'
    import Metz from '$lib/assets/metz-polaroid.svg'
    import PushPin from '$lib/assets/push-pin.png'
    import PushPin2 from '$lib/assets/push-pin-2.png'
    import PushPin3 from '$lib/assets/push-pin-3.png'
    import Hiking from '$lib/assets/hiking.jpeg'
    import Yellowstone from '$lib/assets/yellowstone.jpg'
    import Glacier from '$lib/assets/glacier.jpg'
    import Note from '$lib/assets/note.png'

    import '$lib/assets/hate_your_writing/Regular.ttf';

</script>

    <div class="page">
      <img src="rain-2.gif" class="office">
      <img src="office-2.svg" class="office">


          <img class='ithaca' alt="ithaca" src={Ithaca} />
          <img class='yellowstone' alt="yellowstone" src={Yellowstone} />
          <!-- <img class='cornell' alt="yellowstone" src={Yellowstone} /> -->
          <img class='graduation' alt="graduation" src={Graduation} />
          <img class='hiking' alt="Hiking" src={Hiking} />
          <img class='glacier' alt="Glacier" src={Glacier} />

    <!-- <div class="images">
       <div className={'ithaca'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="handle" src={PushPin} width='40px' style={{position: 'absolute', marginLeft: '180px'}}/>
         <img  src={Ithaca} height='400px'/>
         </div>
       <div className={'cornell'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="handle" src={PushPin2} width='40px' style={{position: 'absolute', marginLeft: '180px'}}/>
         <img  src={Cornell} height='400px'/>
         </div>
       <div className={'metz'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="handle" src={PushPin3} width='40px' style={{position: 'absolute', marginLeft: '180px'}}/>
         <img  src={Metz} height='400px'/>
         </div>
       <div className={'graduation'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="handle" src={PushPin} width='40px' style={{position: 'absolute', marginLeft: '180px'}}/>
         <img  src={Graduation} height='400px'/>
         </div>
         </div>
         <div style={{display: 'flex', flexDirection: 'row'}}>
       <div className={'note'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="note" src={PushPin2} width='40px' style={{position: 'absolute', marginLeft: '200px', marginTop: '40px'}}/>
         <h3 class='todo' style={{marginTop: '77px', marginLeft: '153px'}}>To do list</h3>
         <input class='todobox' type="checkbox" checked={true} style={{marginTop: '134px', marginLeft: '72px', position: 'absolute'}} />
         <h3 class='todo' style={{marginTop: '113px', marginLeft: '88px'}}>Write a novel</h3>
         <input class='todobox' type="checkbox" checked={false} style={{marginTop: '156px', marginLeft: '76px', position: 'absolute'}} />
         <h3 class='todo' style={{marginTop: '131px', marginLeft: '93px'}}>Climb Mount Rainier</h3>
         <input class='todobox' type="checkbox" checked={true} style={{marginTop: '178px', marginLeft: '80px', position: 'absolute'}} />
         <h3 class='todo' style={{marginTop: '150px', marginLeft: '98px'}}>Learn how to knit a hat</h3>
         <input class='todobox' type="checkbox" checked={false} style={{marginTop: '200px', marginLeft: '84px', position: 'absolute'}} />
         <h3 class='todo' style={{marginTop: '174px', marginLeft: '104px'}}>Make a video game</h3>
         <img  src={Note} width='500px'/>
         </div>
      
       <div className={'snowshoeing'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="handle" src={PushPin} width='40px' style={{position: 'absolute', marginLeft: '230px'}}/>
         <h1 class='handwriting' style={{marginTop: '15px', marginLeft: '280px'}}>Snowshoeing in Utah!</h1>
         <img  src={Hiking} width='500px'/>
         </div>
       <div className={'glacier'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="handle" src={PushPin2} width='40px' style={{position: 'absolute', marginLeft: '230px'}}/>
         <h1 class='handwriting' style={{marginTop: '250px', marginLeft: '280px'}}>Glacier National Park</h1>
         <img  src={Glacier} width='500px'/>
         </div>
         </div>
         <div style={{display: 'flex', flexDirection: 'row'}}>
       <div className={'yellowstone'} style={{marginLeft: `${Math.random()*50}px`, marginTop:`${Math.random()*50}px`}}>
         <img id="handle" src={PushPin3} width='40px' style={{position: 'absolute', marginLeft: '230px'}}/>
         <h1 class='handwriting' style={{marginTop: '15px', marginLeft: '280px'}}>Yellowstone</h1>
         <img  src={Yellowstone} width='500px'/>
         </div>
         </div> -->

    </div>

    <style>

.page {
  /* background-color: #02422E; */
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  
}

.office {
  position: fixed;
  z-index: 1;
  top: 200px;
  height: 90%;

}

.ithaca {
  position: fixed;
  z-index: 3;
  top: 400px;
  left: 640px;
  height: 150px;
}

.yellowstone {
    position: fixed;
    z-index: 3;
    top: 260px;
    left: 640px;
    height: 100px;
}

.hiking {
    position: fixed;
    z-index: 3;
    top: 260px;
    left: 850px;
    height: 100px;
}

.graduation{
    position: fixed;
    z-index: 3;
    top: 400px;
    left: 900px;
    height: 150px;
}

.glacier {
    position: fixed;
    z-index: 3;
    top: 260px;
    left: 1050px;
    height: 100px;
}


  .bio {
    margin-top: -184px;
    padding: 15px;
    color: white
  }

  h1 { 
    color: white;
    span {
        display: block;
        color: darken(white, 20%);
        font-size: 14px;
        font-style: italic;
        height: 14px;
    }
}

.date {
  transform: rotate(-90deg);
  margin-top: 180px;
}

.polaroid {
  position: absolute;
}

@font-face {
  font-family: 'HandWriting';
  src: local('HandWriting'),
   url($lib/assets/hate_your_writing/Regular.ttf) format('truetype');
}

.handwriting {
  font-family: "HandWriting";
  position: absolute;
  color: white;
  transform: rotate(-3deg);
}

.todo {
  font-family: "HandWriting";
  position: absolute;
  color: black;
  transform: rotate(-10deg);
}

.todobox {
  transform: rotate(-10deg);
}
    </style>