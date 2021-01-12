import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Style components import
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import LogoButton from './LogoButton';

// Constants import
import { LANDING, DASHBOARD, ABOUT } from '../constants/routes';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#1A2930',
        padding: '1rem'
    },
    grow: {
        flexGrow: 1,
        height: 0
    },
    link: {
        color: '#F2C407',
        textDecoration: 'None'
    },
    tab: {
        padding: 0
    }
});

const TAB_INDEX = {
    [LANDING]: 0,
    [DASHBOARD]: 1,
    [ABOUT]: 2
};

const TAB_TITLE = ['Get Started', 'Dashboard', 'About Us'];

function Navbar() {
    const classes = useStyles();
    const location = useLocation();

    return (
        <Grid container direction="row" className={classes.root}>
            {/* Talko Logo Button */}
            <LogoButton />

            {/* Placeholder to make right-aligned tabs */}
            <Grid item className={classes.grow} />

            {/* Tabs */}
            <Grid item>
                <Tabs value={TAB_INDEX[location.pathname] || 0}>
                    {TAB_TITLE.map((title, index) => {
                        return (
                            <Tab
                                key={index}
                                label={
                                    <Link to={Object.keys(TAB_INDEX)[index]} className={classes.link}>
                                        <Typography variant="body1">
                                            <b>{title}</b>
                                        </Typography>
                                    </Link>
                                }
                                className={classes.tab}
                            />
                        );
                    })}
                </Tabs>
            </Grid>
        </Grid>
    );
}

export default Navbar;