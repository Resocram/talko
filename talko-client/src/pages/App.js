import React from 'react';
import Navbar from '../components/Navbar';
import Landing from './Landing';
import Tone from './Tone';
import Speech from './Speech';
import Recording from './Recording';
import Dashboard from './Dashboard';
import SpeechContext from '../context/speechContext';

function App() {
  return (
    <React.Fragment>
<<<<<<< HEAD
      <Navbar /> 
      <Dashboard />
    </React.Fragment>
    // {/*<SpeechContext>*/}
    //   {/* <Landing /> */}
    //   {/* <Tone /> */}
    //   {/* <Speech /> */}
    //   {/* <Dashboard /> */}
    // {/* </SpeechContext> */}
=======
      <Navbar />
      {/* <Landing /> */}
      {/* <Tone /> */}
      {/* <Speech /> */}
      {/* <Recording /> */}
      <Dashboard />
    </React.Fragment>
>>>>>>> 7f0b4270c6acd556e577245d51dba6af8a840573
  );
}

export default App;