import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Mic from '../assets/mic.svg';
import LoadingSpinner from '../components/LoadingSpinner';

// Services import
import analyzeAudio from '../services/analyzeAudio';

// Audio Recorder Library
import { ReactMic } from 'react-mic';


const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.primary.contrastText,
        width: '50%'
    },
    button: {
		color: 'white',
        textTransform: 'None',
        marginRight: "3rem"
    }
}));


function Recording() {
    const classes = useStyles();
    const [record, setRecord] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [waitingRes, setWaitingRes] = useState(false);

    const handleRecord = () => setRecord(!record);

    const onStop = (recordedBlob) => setAudioBlob(recordedBlob);

	const handleClick = () => {
        setWaitingRes(true);
        analyzeAudio(audioBlob)
            .then(data => {
                console.log('Analyzed result: ', data);
                setRedirect(true);
            })
            .catch(err => console.log(err));
    };

    const instruction = record ? 'Recording...' : (!audioBlob ? 'Press the icon to start recording your speech' : 'Done!');

    if (redirect)
        return <Redirect to="/dashboard" />

    if (waitingRes)
    return <LoadingSpinner />
    
	return (
        <React.Fragment>
            <Grid container direction="column" justify="center">

                {/* Title */}
                <Grid item container justify="center">
                    <Typography variant="h2" align="center" className={classes.title}>
                        <b>{instruction}</b>
                    </Typography>
                </Grid>

                {/* Newline */}
                <br/>
                <br/>

                {/* Sound Wave from react-mic */}
                <ReactMic
                    record={record}
                    className="sound-wave"
                    onStop={onStop}
                    strokeColor="#F2C407"
                    backgroundColor="#1A2930"
                />

                {/* Recording button */}
                <Box style={{border: "4px solid #C75943", height: "112px", width: "112px", borderRadius: "50%", marginLeft:"655px", marginTop: "30px"}}/>
                <Box style={{border: "4px solid #C75943", height: "145px", width: "145px", borderRadius: "50%", marginLeft:"638px", marginTop: "-136px"}}/>
                <Button onClick={handleRecord}>
                    <img src={Mic} alt="Mic" style={{width: "75px", height: "75px", marginLeft: "60px", marginTop: "-168px"}}/>
                </Button>

            </Grid>

            {/* Newline */}
            <br />

            {/* Next step button */}
            {instruction === 'Done!' &&
            <Grid container justify="flex-end" >
                <Button onClick={handleClick} className={classes.button}>
                    <Typography variant="h4" display="inline"><b>See Results</b></Typography>&nbsp;&nbsp;
                    <ArrowForwardIcon style={{fontSize: "40px", marginTop: "-10x", color: "white"}} />
                </Button>
            </Grid>}

        </React.Fragment>
	);
}

export default Recording;