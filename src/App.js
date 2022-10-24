import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import PlayerPiano from './components/PlayerPiano';
import ObserverPiano from './components/ObserverPiano';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome />}/>
      <Route path='/app' element={<PlayerPiano />}/>
      <Route path='/obsapp' element={<ObserverPiano />}/>
    </Routes>
  )
}

export default App;