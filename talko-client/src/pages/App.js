import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// React components import
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Navbar from '../components/Navbar';
import Landing from './Landing';
import Tone from './Tone';
import Speech from './Speech';
import Recording from './Recording';
import Dashboard from './Dashboard';
import About from './About';
import Error from './Error';

// Contexts: To enable information-sharing between siblings
import AppContext from '../contexts/AppContext';
import useAppData from '../hooks/useAppData';

// Constant import
import * as ROUTES from '../constants/routes';


const useStyles = makeStyles({
	box: {
    maxWidth: '100%',
    margin: '0 2rem 2rem 2rem'
	}
});

function App() {
  const classes = useStyles();
  const appData = useAppData();

  return (
    <AppContext.Provider value={appData}>
      <Router>
        {/* Navigation bar */}
        <Navbar />

        {/* Main pages: route-based rendering */}
        <Box className={classes.box}>
          <Switch>
            <Route
              exact
              path={ROUTES.LANDING}
              render={() => <Landing />}
            />
            <Route
              exact
              path={ROUTES.TONE}
              render={() => <Tone />}
            />
            <Route
              exact
              path={ROUTES.SPEECH}
              render={() => <Speech />}
            />
            <Route
              exact
              path={ROUTES.RECORDING}
              render={() => <Recording />}
            />
            <Route
              exact
              path={ROUTES.DEMO}
              render={() => <Dashboard />}
            />
            <Route
              exact
              path={ROUTES.DASHBOARD}
              render={() => <Dashboard />}
            />
            <Route
              exact
              path={ROUTES.ABOUT}
              render={() => <About />}
            />
            <Route component={Error} />
          </Switch>
        </Box>
      </Router>
    </AppContext.Provider>
  );
}

export default App;