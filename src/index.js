import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rnd from 'react-rnd';
import Button from '@material-ui/core/Button';

function MenuBar(props)
{
   return (
            <div>
               <div id = "topBar">
                  <div id = "top-logo">Video Annotation Tool</div>
               </div>
               <div className = "clear"></div>
               <div id = "menuBar">
                  <div id = "menuInfoTab">
                     <a href = "">Info</a>
                  </div>
                  <div id = "menuInfoTab">
                     <a href = "">Select Concept</a>
                  </div>
                  <div id = "menuInfoTab">
                     <a href = "">Annotate Video</a>
                  </div>
                  <div id = "menuInfoTab">
                     <a href = "">Logout</a>
                  </div>
               </div>
               <div className = "clear"></div>

            </div>
         );
}

function VideoSection(props)
{


   return (
            <div>
               <div className = "clear"></div>
               <div id = "videoSectionContainer">
                  <div id = "videoContainer">
                  <div id = "boxContainer">
                     <video id = "video" src = "fish2.mp4" width = "1280" height = "723" controls>
                     Your browser does not support the video tag.
                     </video>
                     <Rnd
                       default = {{
                          x: 30,
                          y: 30,
                          width: 60,
                          height: 60,
                       }}
                       minWidth = {25}
                       minHeight = {25}
                       maxWidth = {400}
                       maxHeight = {400}
                       bounds = "parent"
                       id = "dragBox"
                       >
                     </Rnd>
                  </div>
                  </div>
                  <div className = "clear"></div>
                  <Button variant = "contained" color = "primary" id = "backwardButton1" onClick = {rewind}>-5 sec</Button>
                  <Button variant = "contained" color = "primary" id = "playButton" onClick = {playPause}>Play/Pause</Button>
                  <Button variant = "contained" color = "primary" id = "forwardButton" onClick = {fastForward}>+5 sec</Button>
                  <br />
                  <span id = "playScript">Play at speed:</span>
                  <p><input type = "text" id = "playSpeed" placeholder = "100" />&ensp; %</p>
                  <input type = "submit" value = "Enter" id = "entered" onClick = {changeSpeed} />
               </div>
               <div id = "conceptSectionContainer">
                  <span id = "conceptsText">Current Concepts</span>
                  <br />
                  <CurrentConcepts />
               </div>
            </div>
   );


}


class CurrentConcepts extends React.Component {
   render() {
      var concepts = ['concept1', 'concept2', 'concept3', 'concept4', 'concept5', 'concept6', 'concept7', 'concept8', 'concept9', 'concept10', 'concept11', 'concept12', 'concept13', 'concept14', 'concept15', 'concept16', 'concept17', 'concept18', 'concept19', 'concept20'];
      var conceptsList = concepts.map(function(name){return <li className = "conceptListElement">{name} <br /> <img src = "fish1.png" alt = "Could not be downloaded" height="100" width="100" /></li>})
      var leftList = [];
      var rightList = [];
      var conceptsListLength = conceptsList.length;
      for (var i = 0; i < conceptsListLength; i++)
      {
         if ((i % 2) === 1)
         {
            rightList.push(conceptsList[i]);
         }
         else
         {
            leftList.push(conceptsList[i]);
         }

      }
      return (
                <div>
                   <div id = "leftConcepts">
                      <ul>{ leftList }</ul>
                   </div>
                   <div id = "rightConcepts">
                      <ul>{ rightList }</ul>
                   </div>
                </div>
             );
   }

}


function changeSpeed() {

   try {
   var myVideo = document.getElementById("video");
   var speed = document.getElementById("playSpeed").value;
   if ((speed / 100) === 0)
   {
      myVideo.playbackRate = (1);
   }
   else
   {
      myVideo.playbackRate = (speed / 100);
   }
   }
   catch(err) {
   alert("invalid input");
   myVideo.playbackRate = 1;
   }
}

function playPause() {
   var myVideo = document.getElementById("video");
   if(myVideo.paused)
   {
      myVideo.play();
   }
   else
   {
      myVideo.pause();
   }

}

function fastForward() {
   var myVideo = document.getElementById("video");
   var cTime = myVideo.currentTime;
   myVideo.currentTime = (cTime + 5);

}

function rewind() {
   var myVideo = document.getElementById("video");
   var cTime = myVideo.currentTime;
   myVideo.currentTime = (cTime - 5);


}





function App() {

   return (
      <div>
         <MenuBar />
         <VideoSection />
      </div>
   );

}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);






