import React, { Component } from 'react';

class SoundPlayer extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     previousState
  //   }
  // }

  render() {
    const { buttonClicked, note, keyNum, handleClick } = this.props;
    const message = buttonClicked ? 'Playing note' : '--';
    const classes = `${buttonClicked ? 'on' : 'off'} ${note.length === 2 ? 'white' : 'black'}`
    return (
      <div>
        <button onClick={() => handleClick(keyNum, note)} className={classes}>{note.slice(0, note.length - 1)}</button>
        {/* <p>{message}</p> */}
      </div>
    )
  }
}

export default SoundPlayer;