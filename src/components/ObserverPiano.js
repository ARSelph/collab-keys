import React, { useState, useEffect } from 'react';
import SoundManager, {posToNote} from '../SoundManager.js';
import Keyboard from './Keyboard.js';

const setButtons = () => {
  const buttons = [];
  for (let i = 0; i < posToNote.length; i++) {
    buttons.push(false);
  }
  return buttons;
}

const ObserverPiano = () => {

  const [sessionId, setSessionId] = useState('');
  const [buttonClicked, setButtonClicked] = useState(setButtons());
  const [sustain, setSustain] = useState(false);
  
  const refreshState = () => {
    fetch(`/api/session/${sessionId}`)
    .then(res => res.json())
    .then(data => {
      // const { newButtonClicked, newSustain } = data;
      const newButtonClicked = data.buttonClicked; 
      const newSustain = data.sustain;
      for (let i = 0; i < newButtonClicked.length; i++) {
        const note = posToNote[i];
        if (newButtonClicked[i] && !buttonClicked[i]) {
          SoundManager[note].loop = true;
          SoundManager[note].load();
          SoundManager[note].play();
        } else if (!newButtonClicked[i]) {
          SoundManager[note].pause();
        }
      }
      setButtonClicked(newButtonClicked);
      setSustain(newSustain);
    })
  }

  const handleChange = () => {
    console.log('entered', event.target.value)
    setSessionId(event.target.value);
  }
  
  const handlers = {
    handleMouseDown: () => {},
    handleMouseUp: () => {},
    setSustain: () => {}
  }

  return (
    <div id='main'>
      <div id='title'>
        <h1>CollabKeys</h1>
      </div>
      <label>Paste your shared link here, then follow along with your partner!</label>
      <input type='text' value={sessionId} onChange={handleChange}></input>
      <Keyboard buttonClicked={buttonClicked} notes={Object.keys(SoundManager)} sustain={sustain} handlers={handlers}/>
      <button onClick={refreshState}>Refresh</button>
    </div>
  )
}

export default ObserverPiano;