import React, { Component } from 'react';
import SoundPlayer from './SoundPlayer';

class Keyboard extends Component {
  render() {
    const { buttonClicked, handleClick, notes } = this.props;
    // const notesArr = ['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4'];
    const soundPlayers = [];
    for (let i = 0; i < notes.length; i++) {
      soundPlayers.push(<SoundPlayer buttonClicked={buttonClicked[i]} handleClick={handleClick} note={notes[i]} keyNum={i} />);
    }
    return (
      <div id='keyboard'>
        {/* <SoundPlayer buttonClicked={buttonClicked[0]} handleClick={handleClick} note='C4' keyNum={0} />
        <SoundPlayer buttonClicked={buttonClicked[1]} handleClick={handleClick} note='G4' keyNum={1} />
        <SoundPlayer buttonClicked={buttonClicked[2]} handleClick={handleClick} note='C5' keyNum={2} /> */}
        {soundPlayers}
      </div>
    )
  }
}

export default Keyboard;