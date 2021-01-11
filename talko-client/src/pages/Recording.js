import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { convert } from 'blob-converter'
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Mic from '../assets/mic.svg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LoadingSpinner from '../components/LoadingSpinner';

// Audio Recorder Dependencies
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

    const handleRecord = () => {
        setRecord(!record);
    };

    const onData = (recordedBlob) => {
        console.log('chunk of real-time data is: ', recordedBlob);
    };

    const onStop = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob);
        setAudioBlob(recordedBlob);
    };

	const handleClick = () => {
        const convertToData = async () => {
            let formData = new FormData()
            let textBlob = new Blob(["string"], { type: "text/xml"});
            console.log(audioBlob)
            formData.append('audio', audioBlob.blob)
            formData.append('text', textBlob)

            axios.post('https://cors-anywhere.herokuapp.com/http://talko-301223.wl.r.appspot.com/api',formData,{timeout: 300000})
             .then(resp => console.log(resp))
            //  .then(data => {
            //     if (data.errors) {
            //        alert(data.errors)
            //     }
            //     else {
            //        console.log(data)
            //     }
            //  })
        }
        convertToData();
	};

    const ins = record ? 'Recording...' : (!audioBlob ? 'Press the icon to start recording your speech' : 'Done!');

    if (redirect)
        return <Redirect to="/dashboard" />

    if (waitingRes)
    return <LoadingSpinner />
    
	return (
        <React.Fragment>
            <Grid container direction="column" justify="center">
                <Grid item container justify="center">
                    <Typography variant="h2" align="center" className={classes.title}>
                        <b>{ins}</b>
                    </Typography>
                </Grid>
                <br/>
                <br/>
                <ReactMic
                    record={record}
                    className="sound-wave"
                    onStop={onStop}
                    onData={onData}
                    strokeColor="#F2C407"
                    backgroundColor="#1A2930"
                />
                <Box style={{border: "4px solid #C75943", height: "112px", width: "112px", borderRadius: "50%", marginLeft:"655px", marginTop: "30px"}}/>
                <Box style={{border: "4px solid #C75943", height: "145px", width: "145px", borderRadius: "50%", marginLeft:"638px", marginTop: "-136px"}}/>
                <Button onClick={handleRecord}>
                    <img src={Mic} alt="Mic" style={{width: "75px", height: "75px", marginLeft: "60px", marginTop: "-168px"}}/>
                </Button>
            </Grid>
            <br />
            {ins === 'Done!' &&
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