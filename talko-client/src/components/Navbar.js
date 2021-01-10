import React from 'react';
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
        <Grid container direction="row" className={classes.root}>
            <LogoButton />
            <Grid item style={{ flexGrow: 1, height: 0 }} />
            <Grid item>
                <Tabs
                    value={value}
                    onChange={handleChange}
                >
                    <Tab label={<Typography variant="body1" paragraph><b>Get Started</b></Typography>} className={classes.tab} />
                    <Tab label={<Typography variant="body1" paragraph><b>Dashboard</b></Typography>} className={classes.tab} />
                    <Tab label={<Typography variant="body1" paragraph><b>About Us</b></Typography>} className={classes.tab} />
                </Tabs>
            </Grid>
        </Grid>
    );
}

export default Navbar;