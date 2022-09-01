import React, { Component } from 'react';

class WelcomeApp extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id='main'>
        <div id='title'>
          <h1>Welcome to CollabKeys!</h1>
        </div>
        <p>Click <a href='/app'>HERE</a> to start a new session</p>
      </div>
    )
  }
}

export default WelcomeApp;