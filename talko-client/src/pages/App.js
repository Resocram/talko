import React from 'react';
import Navbar from '../components/Navbar';
import Speech from './Speech';
import Tone from './Tone';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Speech /> */}
      <Tone />
    </React.Fragment>
  );
}

export default App;