import React, { Component } from 'react';
import SoundManager, {posToNote} from '../SoundManager.js';
import Keyboard from './Keyboard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.refreshState = this.refreshState.bind(this);
    this.state = {
      sessionId: '',
      buttonClicked: this.setButtons(),
      sustain: false,
    }
  }
  

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  refreshState() {
    fetch(`/api/session/${this.state.sessionId}`)
    .then(res => res.json())
    .then(data => {
      const { buttonClicked, sustain } = data;
      for (let i = 0; i < buttonClicked.length; i++) {
        const note = posToNote[i];
        if (buttonClicked[i] && !this.state.buttonClicked[i]) {
          SoundManager[note].loop = true;
          SoundManager[note].load();
          SoundManager[note].play();
        } else if (!buttonClicked[i]) {
          SoundManager[note].pause();
        }
      }
      this.setState({buttonClicked, sustain});
    })
  }

  setButtons() {
    const buttons = [];
    for (let i = 0; i < posToNote.length; i++) {
      buttons.push(false);
    }
    return buttons;
  }

  handleChange() {
    console.log('entered', event.target.value)
    this.setState({sessionId: event.target.value});
  }
  
  render() {
    const handlers = {
      handleMouseDown: null,
      handleMouseUp: null,
      setSustain: null
    }
    return (
      <div id='main'>
        <div id='title'>
          <h1>CollabKeys</h1>
        </div>
        <label>Paste your shared link here, then follow along with your partner!</label>
        <input type='text' value={this.state.sessionId} onChange={this.handleChange}></input>
        <Keyboard buttonClicked={this.state.buttonClicked} notes={Object.keys(SoundManager)} sustain={this.state.sustain} handlers={handlers}/>
        <button onClick={this.refreshState}>Refresh</button>
      </div>
    )
  }
}

export default App;