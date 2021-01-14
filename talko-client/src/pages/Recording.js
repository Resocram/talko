import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../contexts/AppContext';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MicIcon from '@material-ui/icons/Mic';
import LoadingSpinner from '../components/LoadingSpinner';

// Constants import
import { DASHBOARD, ERROR } from '../constants/routes';
import { MAIN_YELLOW, MAIN_BLUE, CORAL_RED } from '../constants/colors';

// Services import
import analyzeAudio from '../services/analyzeAudio';

// Audio Recorder Library
import { ReactMic } from 'react-mic';


const useStyles = makeStyles(theme => ({
    container: {
		color: theme.palette.secondary.main,
		height: '82vh'
	},
    title: {
        maxWidth: '50%',
        minHeight: '27.8%'
    },
    grow: {
        flexGrow: 1
    },
    micContainer: {
        width: '90vw'
    },
    mic: { 
        width: '100%'
    },
    iconButton: {
        border: `solid 5px ${CORAL_RED}`
    },
    micIcon: {
        fontSize: '5rem'
    },
    button: {
		color: 'white',
		textTransform: 'None',
		display: 'flex',
		direction: 'row',
		alignItems: 'center',
		width: 'fit-content'
	},
	buttonIcon: {
		fontSize: '40px'
    }
}));

function Recording() {
    const classes = useStyles();
    const { state, setAudioBlob, setSpeechStats } = useContext(AppContext);
    const { audioBlob } = state;
    const [record, setRecord] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [waitingRes, setWaitingRes] = useState(false);
    const [error, setError] = useState(false);

    const handleRecord = () => setRecord(!record);

    const onStop = (recordedBlob) => setAudioBlob(recordedBlob);

	const handleClick = () => {
        setWaitingRes(true);
        analyzeAudio(audioBlob)
            .then(data => {
                console.log('Analyzed result: ', data);
                setSpeechStats(data);
                setRedirect(true);
            })
            .catch(err => {
                console.log(err);
                setError(true);
            });
    };

    const instruction = record ? 'Recording ...' : (!audioBlob ? 'Press on the icon to start recording ...' : 'Done!');

    if (error)
        return <Redirect to={ERROR} />

    if (redirect)
        return <Redirect to={DASHBOARD} />

    if (waitingRes)
        return <LoadingSpinner />
    
	return (
        <Grid container direction="column" alignItems="center" alignContent="space-between" spacing={2} className={classes.container}>
            {/* Title */}
            <Grid item className={classes.title}>
                <Typography variant="h2" align="center" paragraph>
                    <b>{instruction}</b>
                </Typography>
            </Grid>

            {/* Sound Wave from react-mic */}
            <Grid item className={classes.micContainer}>
                <ReactMic
                    record={record}
                    className={classes.mic}
                    onStop={onStop}
                    strokeColor={MAIN_YELLOW}
                    backgroundColor={MAIN_BLUE}
                />
            </Grid>

            {/* Recording button */}
            <Grid item>
                <IconButton onClick={handleRecord} className={classes.iconButton}>
                    <MicIcon color="secondary" className={classes.micIcon} />
                </IconButton>
            </Grid>

            <Grid item className={classes.grow} />

            {/* Next step button */}
            <Grid container item justify="flex-end">
                <Button disabled={!(instruction === 'Done!')} onClick={handleClick} className={classes.button}>
                    <Typography variant="h4" display="inline">
                        <b>See Results</b>
                    </Typography>
                    &nbsp;&nbsp;
                    <ArrowForwardIcon className={classes.buttonIcon} style={{ color: (instruction === 'Done!') ? 'white' : 'rgba(0, 0, 0, 0.26)' }} />
                </Button>
            </Grid>
        </Grid>
	);
}

export default Recording;