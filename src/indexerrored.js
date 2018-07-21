import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';

/*
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick ={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {

    super(props);
    this.state = {

      squares: Array(9).fill(null),

    };


  }


  handleClick(i) {

    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});

  }


  renderSquare(i) {
    return (<Square
             value={this.state.squares[i]}
             onClick = {() => this.handleClick(i)}/>);
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
*/


//class Game extends React.Component {
//  render() {
//    return (
//      <div className="game">
//        <div className="game-board">
//          <Board />
//        </div>
//        <div className="game-info">
//          <div>{/* status */}</div>
//          <ol>{/* TODO */}</ol>
//        </div>
//      </div>
//    );
//  }
//}

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

/*   $("#resizeAndDrag").resizable({
      containment: "parent"
   });

   $("#resizeAndDrag").draggable({
      containment: "parent"
   });*/



   return (
            <div>
               <div className = "clear"></div>
               <div id = "videoSectionContainer">
                  <div id = "videoContainer">
                     <video id = "video" src = "fish2.mp4" width = "640" height = "480" controls>
                     Your browser does not support the video tag.
                     </video>
                     <div id = "boundingBoxContainer">
                        <BoundingBox />
                     </div>
                  </div>
                  <div className = "clear"></div>
                  <button id = "backwardButton" onClick = {rewind}>-5 sec</button>
                  <button id = "playButton" onClick = {playPause}>Play/Pause</button>
                  <button id = "forwardButton" onClick = {fastForward}>+5 sec</button>
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

class BoundingBox extends React.Component {
   componentDidMount() {
      this.node = ReactDOM.findDOMNode(this);
   $(this.node).draggable();
   }

   render() {
      return (
         <div id = "resizeAndDrag">
         </div>
      );
   }
}

class CurrentConcepts extends React.Component {
   render() {
      var concepts = ['concept1', 'concept2', 'concept3', 'concept4', 'concept5', 'concept6', 'concept7', 'concept8'];
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






