import React, { Component } from 'react';
import SoundManager from './SoundManager.js';

class SoundPlayer extends Component {
  
  render() {
    const { buttonClicked, note } = this.props;
    let message = 'this shouldn\t show';
    // console.log(SoundManager.testPianoSound);
    if (buttonClicked) {
      message = 'turned on';
      SoundManager[note].loop = true;
      SoundManager[note].load();
      SoundManager[note].play();
    }
    else {
      message = 'turned off';
      SoundManager[note].pause();
    }
    return (
      <div id='keys'>
        <button onClick={this.props.handleClick}>{buttonClicked ? 'Pause' : 'Play'}</button>
        <p>{message}</p>
      </div>
    )
  }
}

export default SoundPlayer;