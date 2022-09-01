import React, { Component } from 'react';
import SoundPlayer from './SoundPlayer';

class Keyboard extends Component {
  render() {
    const { buttonClicked, notes, handlers, sustain, observer } = this.props;
    const soundPlayers = [];
    for (let i = 0; i < notes.length; i++) {
      soundPlayers.push(<SoundPlayer buttonClicked={buttonClicked[i]} handlers={handlers} note={notes[i]} keyNum={i} sustain={sustain}/>);
    }
    return (
      <div id='keyboard'>
        {soundPlayers}
        <label htmlFor='sustain'>Sustain</label>
        <input type="checkbox" id="sustain" name="sustain" checked={sustain} onChange={observer ? null : handlers.setSustain}></input>
      </div>
    )
  }
}

export default Keyboard;