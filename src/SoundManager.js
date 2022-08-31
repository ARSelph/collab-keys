// import audio1 from './sounds/test-piano-sound.mp3';
// import pianoC4 from './sounds/piano-C4.wav';
// import pianoG4 from './sounds/piano-G4.wav';
// import pianoC5 from './sounds/piano-C5.wav';
import organC3 from './sounds/C3.m4a';
import organCsharp3 from './sounds/C#3.m4a';
import organD3 from './sounds/D3.m4a';
import organDsharp3 from './sounds/D#3.m4a';
import organE3 from './sounds/E3.m4a';
import organF3 from './sounds/F3.m4a';
import organFsharp3 from './sounds/F#3.m4a';
import organG3 from './sounds/G3.m4a';
import organAflat3 from './sounds/Ab3.m4a';
import organA3 from './sounds/A3.m4a';
import organBflat3 from './sounds/Bb3.m4a';
import organB3 from './sounds/B3.m4a';
import organC4 from './sounds/C4.m4a';


const SoundManager = {
  // testPianoSound: new Audio(audio1),
  // C4: new Audio(pianoC4),
  // G4: new Audio(pianoG4),
  // C5: new Audio(pianoC5),
  'C3': new Audio(organC3),
  'C#3': new Audio(organCsharp3),
  'D3': new Audio(organD3),
  'D#3': new Audio(organDsharp3),
  'E3': new Audio(organE3),
  'F3': new Audio(organF3),
  'F#3': new Audio(organFsharp3),
  'G3': new Audio(organG3),
  'Ab3': new Audio(organAflat3),
  'A3': new Audio(organA3),
  'Bb3': new Audio(organBflat3),
  'B3': new Audio(organB3),
  'C4': new Audio(organC4),
}

export default SoundManager;