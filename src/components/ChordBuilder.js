import React, { Component } from 'react';
import {posToNote} from '../SoundManager.js';

class ChordBuilder extends Component {
  render() {
    const {chordType, chordNote, changeChord, changeNote, submitChord} = this.props;
    const noteArr = posToNote.slice(0, 12).map(note => note.slice(0, note.length - 1));
    const noteOptions = [];
    noteArr.forEach(note => {
      noteOptions.push(<option value={note}>{note}</option>)
    })
    
    return (
      <div id='chord'>
        <form onSubmit={submitChord}>
          <label>
            Build a
            <select value={chordType} onChange={changeChord}>
              <option value="major">major</option>
              <option value="minor">minor</option>
              <option value="augmented">augmented</option>
              <option value="diminished">diminished</option>
              <option value="dominant 7th">dominant 7th</option>
              <option value="minor 7th">minor 7th</option>
            </select>
          </label>
          <label>
            chord on the note
            <select value={chordNote} onChange={changeNote}>
              {noteOptions}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ChordBuilder;