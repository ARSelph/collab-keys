import React, { Component } from 'react';
import SoundManager, {posToNote} from '../SoundManager.js';
import Keyboard from './Keyboard.js';
import ChordBuilder from './ChordBuilder.js';

class App extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.setSustain = this.setSustain.bind(this);
    this.changeChord = this.changeChord.bind(this);
    this.changeNote = this.changeNote.bind(this);
    this.submitChord = this.submitChord.bind(this);
    this.state = {
      buttonClicked: this.setButtons(),
      sustain: false,
      chordType: 'major',
      chordNote: 'C'
    }
  }

  setButtons() {
    const buttons = [];
    for (let i = 0; i < posToNote.length; i++) {
      buttons.push(false);
    }
    return buttons;
  }

  setSustain() {
    if (this.state.sustain === true) {
      const newButtons = [];
      for (let i = 0; i < this.state.buttonClicked.length; i++) {
        if (this.state.buttonClicked[i]) {
          SoundManager[posToNote[i]].pause();
        }
        newButtons.push(false);
      }
      this.setState({sustain: false, buttonClicked: newButtons})
    } else this.setState({sustain: true});
  }

  handleMouseDown(position, note) {
    if (!this.state.buttonClicked[position]) {
      SoundManager[note].loop = true;
      SoundManager[note].load();
      SoundManager[note].play();
    } else {
      SoundManager[note].pause();
    }
    const newButtons = this.state.buttonClicked.slice();
    newButtons[position] = !newButtons[position];
    this.setState({buttonClicked: newButtons});
  }

  handleMouseUp(position, note) {
    SoundManager[note].pause();
    const newButtons = this.state.buttonClicked.slice();
    newButtons[position] = false;
    this.setState({buttonClicked: newButtons});
  }

  changeNote() {
    console.log('new note:', event.target.value);
    this.setState({chordNote: event.target.value});
  }

  changeChord() {
    console.log('new chord:', event.target.value);
    this.setState({chordType: event.target.value});
  }

  submitChord(event) {
    console.log(`setting a ${this.state.chordType} chord on ${this.state.chordNote}`);
    event.preventDefault();
    let startIndex;
    switch (this.state.chordNote) {
      case 'C':
        startIndex = 0;
        break;
      case 'C#':
        startIndex = 1;
        break;
      case 'D':
        startIndex = 2;
        break;
      case 'D#':
        startIndex = 3;
        break;
      case 'E':
        startIndex = 4;
        break;
      case 'F':
        startIndex = 5;
        break;
      case 'F#':
        startIndex = 6;
        break;
      case 'G':
        startIndex = 7;
        break;
      case 'Ab':
        startIndex = 8;
        break;
      case 'A':
        startIndex = 9;
        break;
      case 'Bb':
        startIndex = 10;
        break;
      case 'B':
        startIndex = 11;
        break;
      case 'C':
        startIndex = 12;
        break;
      default:
        console.log('expected a valid note, got none');
    }
    const chordNums = [startIndex];
    switch (this.state.chordType) {
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
      case 'dominant 7th':
        chordNums.push(startIndex + 4, startIndex + 7, startIndex + 10);
        break;
      case 'minor 7th':
        chordNums.push(startIndex + 3, startIndex + 7, startIndex + 10);
      default:
        console.log('expected a valid chord, got none');
    }
    const newButtons = this.setButtons();
    for (let i = 0; i < this.state.buttonClicked.length; i++) {
      if (this.state.buttonClicked[i] && !chordNums.includes(i)) {
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
    this.setState({buttonClicked: newButtons, sustain: true});
  }
  
  render() {
    const handlers = {
      handleMouseDown: this.handleMouseDown,
      handleMouseUp: this.handleMouseUp,
      setSustain: this.setSustain
    }
    console.log('sustain', this.state.sustain);
    return (
      <div id='main'>
        <div id='title'>
          <h1>CollabKeys</h1>
        </div>
        <Keyboard buttonClicked={this.state.buttonClicked} handlers={handlers} notes={Object.keys(SoundManager)} sustain={this.state.sustain}/>
        <ChordBuilder chordType={this.state.chordType} chordNote={this.state.chordNote} changeNote={this.changeNote} changeChord={this.changeChord} submitChord={this.submitChord}/>
      </div>
    )
  }
}

export default App;