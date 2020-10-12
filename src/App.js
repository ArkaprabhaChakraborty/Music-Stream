import React from 'react';
import Nav from './components/Nav'
import Main from './components/Main'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import { Slider } from '@material-ui/core';
import './App.scss';
import { LoopOutlined, VolumeDown, VolumeUp } from '@material-ui/icons';

const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav/>
        <Main/>
      </div>
    <div className="musicControls">
      <div className="Album">
        <div className="AlbumImage">
          <img src="https://d.newsweek.com/en/full/772816/1-5-jupiter-nasa.jpg" alt=""/>
        </div>
        <div className="AlbumDetails">
          <h4>Album name</h4>
          <p>Singer Name</p>
        </div>
      <div className="ControlsLayer">
          <ShuffleIcon/>
          <SkipPreviousIcon/>
          <PlayCircleOutlineIcon className="Play"/>
          <SkipNextIcon/>
          <LoopOutlined/>
      </div>
      <div className="VolumeSection"> 
        <VolumeDown/>
        <br></br>
        <Slider/>
        <br></br>
        <VolumeUp/>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
