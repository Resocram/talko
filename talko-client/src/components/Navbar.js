import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import LogoButton from './LogoButton';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#1A2930',
        padding: '2rem'
    },
    link: {
        color: '#F2C407',
        textDecoration: 'None'
    }
});

const tabIndex = {
    "/": 0,
    "/dashboard": 1,
    "/about": 2
};

function Navbar() {
    const classes = useStyles();
    const location = useLocation();

    return (
        <Grid container direction="row" className={classes.root}>
            <LogoButton />
            <Grid item style={{ flexGrow: 1, height: 0 }} />
            <Grid item>
                <Tabs
                    value={tabIndex[location.pathname] || 0}
                >
                    
                    <Tab 
                        label={<Link to="/" className={classes.link}><Typography variant="body1" paragraph><b>Get Started</b></Typography></Link>}
                    />
                    
                    <Tab
                        label={<Link to="/dashboard" className={classes.link}><Typography variant="body1" paragraph><b>Dashboard</b></Typography></Link>}
                    />
                    
                    <Tab
                        label={<Link to="/about" className={classes.link}><Typography variant="body1" paragraph><b>About Us</b></Typography></Link>}
                    />
                    
                </Tabs>
            </Grid>
        </Grid>
    );
}

export default Navbar;