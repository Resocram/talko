import React, { useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Mic from '../assets/mic.svg';

// Audio Recorder Dependencies
import { ReactMic } from 'react-mic';

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
    const [record, setRecord] = useState(false);

    const handleClick = () => {
        setRecord(!record);
    };

    const onData = (recordedBlob) => {
        console.log('chunk of real-time data is: ', recordedBlob);
    };

    const onStop = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob);
    };
    
	return (
        <Grid container direction="column" justify="center">
            <Grid item container justify="center">
                <Typography variant="h2" align="center" className={classes.title}>
                    <b>Press the icon to start recording your speech</b>
                </Typography>
            </Grid>
            <ReactMic
                record={record}
                className="sound-wave"
                onStop={onStop}
                onData={onData}
                strokeColor="#F2C407"
                backgroundColor="#1A2930"
            />
            <Box style={{border: "4px solid #C75943", height: "112px", width: "112px", borderRadius: "50%", marginLeft:"629px", marginTop: "103px"}}/>
            <Box style={{border: "4px solid #C75943", height: "145px", width: "145px", borderRadius: "50%", marginLeft:"612px", marginTop: "-136px"}}/>
            <Button onClick={handleClick}>
                <img src={Mic} alt="Mic" style={{width: "75px", height: "75px", marginLeft: "-45px", marginTop: "-175px"}}/>
            </Button>
        </Grid>
	);
}

export default Recording;