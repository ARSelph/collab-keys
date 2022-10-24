import React, { Component } from 'react';

const Welcome = () => {
  return (
    <div id='main'>
      <div id='title'>
        <h1>Welcome to CollabKeys!</h1>
      </div>
      <div id='buttons'>
        <a href='/app'>
          <button className='welcome appButton'>Click here to start a new session</button>
        </a>
        <a href='/obsapp'>
          <button className='welcome obsButton'>Click here to join an existing session</button>
        </a>
      </div>
    </div>
  )
}

export default Welcome;