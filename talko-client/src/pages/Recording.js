import React, { useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Mic from '../assets/Mic.svg';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.primary.contrastText,
        width: '50%'
    },
    button: {
		color: 'white',
		textTransform: 'None'
    }
}));

function Recording() {
    const classes = useStyles();

	return (
        <Grid container direction="column" justify="center">
            <Grid item alignItems="center">
                <Typography variant="h2" align="center" className={classes.title}>
                    <b>Press the icon to start recording your speech</b>
                </Typography>
            </Grid>
            <Box style={{border: "4px solid #C75943", height: "112px", width: "112px", borderRadius: "50%", marginLeft:"629px", marginTop: "103px"}}/>
            <Box style={{border: "4px solid #C75943", height: "145px", width: "145px", borderRadius: "50%", marginLeft:"612px", marginTop: "-136px"}}/>
            <Button style={{justifyContent: "center"}}>
                <img src={Mic} alt="Mic" style={{width: "75px", height: "75px", marginLeft:"643px", marginTop: "-175px"}}/>
            </Button>
        </Grid>
		
	);
}

export default Recording;