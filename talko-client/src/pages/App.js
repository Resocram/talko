import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Landing from './Landing';
import Tone from './Tone';
import Speech from './Speech';
import Recording from './Recording';
import Dashboard from './Dashboard';
import About from './About';
import SpeechContext from '../context/speechContext';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Landing />}
        />
        <Route
          exact
          path="/tone"
          render={() => <Tone />}
        />
        <Route
          exact
          path="/speech"
          render={() => <Speech />}
        />
        <Route
          exact
          path="/recording"
          render={() => <Recording />}
        />
        <Route
          exact
          path="/dashboard"
          render={() => <Dashboard />}
        />
        <Route
          exact
          path="/about"
          render={() => <About />}
        />
      </Switch>
    </Router>
  );
}

export default App;