import React, { Component } from 'react';
import SoundManager from '../SoundManager.js';
import Keyboard from './Keyboard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      buttonClicked: this.setButtons() //[false, false, false, false, false, false, false, false, false, false, false, false, false]
    }
  }

  setButtons() {
    const buttons = [];
    for (let i = 0; i < Object.keys(SoundManager).length; i++) {
      buttons.push(false);
    }
    return buttons;
  }

  handleClick(position, note) {
    console.log('clicked from', position);
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
  
  render() {
    return (
      <div id='main'>
        <div id='title'>
          <h1>CollabKeys</h1>
        </div>
        <Keyboard buttonClicked={this.state.buttonClicked} handleClick={this.handleClick} notes={Object.keys(SoundManager)} />
      </div>
    )
  }
}

export default App;