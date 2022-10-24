import React, { Component } from 'react';

const SoundPlayer = props => {
  const { buttonClicked, note, keyNum, handlers, sustain } = props;
  const classes = `${buttonClicked ? 'on' : 'off'} ${note.length === 2 ? 'white' : 'black'}`
  const onMouseDown = (keyNum, note) => {
    return () => handlers.handleMouseDown(keyNum, note);
  }
  const onMouseUp = (keyNum, note) => {
    return sustain ? null : () => handlers.handleMouseUp(keyNum, note);
  }
  return (
    <div>
      <button onMouseDown={onMouseDown(keyNum, note)} onMouseUp={onMouseUp(keyNum, note)} onMouseLeave={onMouseUp(keyNum, note)}className={classes}>{/*note.slice(0, note.length - 1)*/}</button>
      {/* <p>{message}</p> */}
    </div>
  )
}

export default SoundPlayer;