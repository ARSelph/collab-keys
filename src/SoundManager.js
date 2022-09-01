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
import organCsharp4 from './sounds/C#4.m4a';
import organD4 from './sounds/D4.m4a';
import organDsharp4 from './sounds/D#4.m4a';
import organE4 from './sounds/E4.m4a';
import organF4 from './sounds/F4.m4a';
import organFsharp4 from './sounds/F#4.m4a';
import organG4 from './sounds/G4.m4a';
import organAflat4 from './sounds/Ab4.m4a';
import organA4 from './sounds/A4.m4a';
import organBflat4 from './sounds/Bb4.m4a';
import organB4 from './sounds/B4.m4a';
import organC5 from './sounds/C5.m4a';


const SoundManager = {
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
  'C#4': new Audio(organCsharp4),
  'D4': new Audio(organD4),
  'D#4': new Audio(organDsharp4),
  'E4': new Audio(organE4),
  'F4': new Audio(organF4),
  'F#4': new Audio(organFsharp4),
  'G4': new Audio(organG4),
  'Ab4': new Audio(organAflat4),
  'A4': new Audio(organA4),
  'Bb4': new Audio(organBflat4),
  'B4': new Audio(organB4),
  'C5': new Audio(organC5),
}

export const posToNote = Object.keys(SoundManager);

export default SoundManager;