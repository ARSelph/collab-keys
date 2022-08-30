import React, { Component } from 'react';
import SoundPlayer from './SoundPlayer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      buttonClicked: false //[false, false, false]
    }
  }

  handleClick() {
    this.setState({buttonClicked: !this.state.buttonClicked});
  }
  
  render() {
    return (
      <div id='main'>
        <div id='title'>
          <h1>CollabKeys</h1>
        </div>
        <SoundPlayer buttonClicked={this.state.buttonClicked} handleClick={this.handleClick} note='testPianoSound' />
      </div>
    )
  }
}

export default App;