import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './MainScreen';
import ToHome from './ToHome';
import ToWork from './ToWork';
import ToWorkKonkuk from './ToWorkKonkuk';
import ToWorkJamsil from './ToWorkJamsil';
import ToWorkSadang from './ToWorkSadang';
import ToHomeJamsilToKonkuk from './ToHomeJamsilToKonkuk';
import ToHomeMunjung from './ToHomeMunjung';
import ToHomeJamsilToSadang from './ToHomeJamsilToSadang';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/to-work" element={<ToWork />} />
        <Route path="/to-home" element={<ToHome />} />
        <Route path="/to-work-konkuk" element={<ToWorkKonkuk />} />
        <Route path="/to-work-jamsil" element={<ToWorkJamsil />} />
        <Route path="/to-work-sadang" element={<ToWorkSadang />} />
        <Route path="/to-home-jamsil-konkuk" element={<ToHomeJamsilToKonkuk />} />
        <Route path="/to-home-munjung" element={<ToHomeMunjung />} />
        <Route path="/to-home-jamsil-sadang" element={<ToHomeJamsilToSadang />} />
      </Routes>
    </Router>
  );
}

export default App;