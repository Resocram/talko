import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TalkoLogo from '../assets/talko-logo.svg';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#1A2930',
    },
    tab: {
        color: '#F2C407'
    }
});

function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container direction="row" justify="flex-end" className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
            >
                <img src={TalkoLogo} alt="talko-logo" />
                <Tab label="Get Started" className={classes.tab} />
                <Tab label="Dashboard" className={classes.tab} />
                <Tab label="About Us" className={classes.tab} />
            </Tabs>
        </Grid>
    );
}

export default Navbar;