import React, { useState, useEffect } from 'react';
import SoundManager, {posToNote} from '../SoundManager.js';
import Keyboard from './Keyboard.js';
import ChordBuilder from './ChordBuilder.js';

const setButtons = () => {
  const buttons = [];
  for (let i = 0; i < posToNote.length; i++) {
    buttons.push(false);
  }
  return buttons;
}

const PlayerPiano = () => {
  const [sessionId, setSessionId] = useState('');
  const [buttonClicked, setButtonClicked] = useState(setButtons());
  const [sustain, setSustain] = useState(false);
  const [chordType, setChordType] = useState('major');
  const [chordNote, setChordNote] = useState('C');

  useEffect(() => {
    fetch('api/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({buttonClicked, sustain}),
    })
    .then(res => res.json())
    .then((data) => {
      console.log('fetched data:', data);
      setSessionId(data._id)
    })
    .catch(err => console.log('error in creating session:', err));
  }, [])

  useEffect(() => {
    fetch('/api/session', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({_id: sessionId, change: {buttonClicked, sustain}})
    })
    .then(res => console.log(`updated session: ${sessionId}`))
    .catch(err => console.log('failed to update session:', err))
  })

  const changeSustain = () => {
    if (sustain === true) {
      const newButtons = [];
      for (let i = 0; i < buttonClicked.length; i++) {
        if (buttonClicked[i]) {
          SoundManager[posToNote[i]].pause();
        }
        newButtons.push(false);
      }
      setSustain(false);
      setButtonClicked(newButtons);
    } else setSustain(true);
  }

  const handleMouseDown = (position, note) => {
    if (!buttonClicked[position]) {
      SoundManager[note].loop = true;
      SoundManager[note].load();
      SoundManager[note].play();
    } else {
      SoundManager[note].pause();
    }
    const newButtons = buttonClicked.slice();
    newButtons[position] = !newButtons[position];
    setButtonClicked(newButtons);
  }

  const handleMouseUp = (position, note) => {
    SoundManager[note].pause();
    const newButtons = buttonClicked.slice();
    newButtons[position] = false;
    setButtonClicked(newButtons);
  }

  const changeNote = () => {
    console.log('new note:', event.target.value);
    setChordNote(event.target.value);
  }

  const changeChord = () => {
    console.log('new chord:', event.target.value);
    setChordType(event.target.value);
  }

  const submitChord = (event) => {
    // console.log(`setting a ${chordType} chord on ${chordNote}`);
    event.preventDefault();
    const noteArr = posToNote.slice(0, 12).map(note => note.slice(0, note.length - 1));
    const startIndex = noteArr.indexOf(chordNote);
    const chordNums = [startIndex];
    switch (chordType) {
      case 'major':
        chordNums.push(startIndex + 4, startIndex + 7);
        break;
      case 'minor':
        chordNums.push(startIndex + 3, startIndex + 7);
        break;
      case 'augmented':
        chordNums.push(startIndex + 4, startIndex + 8);
        break;
      case 'diminished':
        chordNums.push(startIndex + 3, startIndex + 6);
        break;
      case 'major 7th':
        chordNums.push(startIndex + 4, startIndex + 7, startIndex + 11);
        break;
      case 'dominant 7th':
        chordNums.push(startIndex + 4, startIndex + 7, startIndex + 10);
        break;
      case 'minor 7th':
        chordNums.push(startIndex + 3, startIndex + 7, startIndex + 10);
      default:
        console.log('expected a valid chord, got none');
    }
    const newButtons = setButtons();
    for (let i = 0; i < buttonClicked.length; i++) {
      if (buttonClicked[i] && !chordNums.includes(i)) {
        SoundManager[posToNote[i]].pause();
      }
    }
    chordNums.forEach(i => {
      newButtons[i] = true;
      const note = posToNote[i];
      SoundManager[note].loop = true;
      SoundManager[note].load();
      SoundManager[note].play();
    })
    setButtonClicked(newButtons);
    setSustain(true);
  }
  
  const handlers = {changeSustain, handleMouseDown, handleMouseUp}

  return (
    <div id='main'>
      <div id='title'>
        <h1>CollabKeys</h1>
      </div>
      <h2>Shareable session ID: {sessionId}</h2>
      <Keyboard buttonClicked={buttonClicked} handlers={handlers} notes={Object.keys(SoundManager)} sustain={sustain} observer={false}/>
      <ChordBuilder chordType={chordType} chordNote={chordNote} changeNote={changeNote} changeChord={changeChord} submitChord={submitChord}/>
    </div>
  )
}

export default PlayerPiano;