import React, { useContext, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import AppContext from '../contexts/AppContext';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, DialogContent, DialogActions } from '../components/CustomDialog';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ConcentricCircle from '../components/ConcentricCircle';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import Bulb from '../assets/lightbulb.svg';

// Constants import
import { MAIN_BLUE, MAIN_YELLOW, DARK_GREEN, MAIN_GREEN, LIGHT_GREEN, ORANGE, RED } from '../constants/colors';
import { DEMO, DASHBOARD, ERROR, TONE } from '../constants/routes';
import data from '../constants/responses';


const useStyles = makeStyles(theme => ({
    container: {
		color: 'white',
		height: '82vh'
	},
    grow: {
        flexGrow: 1
    },
    lineChartCont: {
        height: '50vh'
    },
    lineChartBox: {
        height: '100%',
        backgroundColor: '#324F5D',
        borderRadius: '50px',
        padding: '1rem'
    },
    button: {
		color: 'white',
		textTransform: 'None',
		padding: '0.5rem 2rem',
        border: `3px solid ${theme.palette.secondary.main}`,
        borderRadius: '5rem'
    },
    lightbulb: {
        width: '200px'
    }
}));

function Dashboard() {
    const location = useLocation();
    const { state } = useContext(AppContext);
    const classes = useStyles();
    const [transcriptOpen, setTranscriptOpen] = useState(false);

    let parsedData = {};

    if (location.pathname === DEMO) {
        parsedData = data[Math.floor(Math.random() * data.length)];
    }

    if (location.pathname === DASHBOARD) {
        const { speechStats } = state;
        if (Object.keys(speechStats).length < 1)
            return <Redirect to={ERROR} />
        else
            parsedData = speechStats;
    }

    if (Object.keys(parsedData).length < 1)
        return <Redirect to={ERROR} />

    const { accuracy, audioValues, stats, transcription, tone, errorsInterval, suggestions } = parsedData;

    const handleTranscriptOpen = () => setTranscriptOpen(true);

    const handleTranscriptClose = () => setTranscriptOpen(false);

	return (
        <Grid container alignItems="center" spacing={2} className={classes.container}>
            {/* Overall Scores */}
            <Grid item xs={12} container direction="row" justify="space-between">
                <Grid item xs={6} spacing={2} container direction="row">
                    <Grid item xs={6}>
                        <ConcentricCircle
                            size={300}
                            fontType="h2"
                            label={`${accuracy}%`}
                            outerColor={DARK_GREEN}
                            middleColor={MAIN_GREEN}
                            innerColor={LIGHT_GREEN}
                        />
                    </Grid>
                    <Grid item container xs={6} alignItems="center">
                        <Typography variant="h6" paragraph>
                            <b>
                                Excellent speaking! From our analysis, the tone of your 
                                speech was {accuracy}% {tone}, which matches your initial 
                                selection.
                            </b>
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={6} spacing={2} container direction="row" justify="space-evenly">
                    {/* Enunciation */}
                    <Grid item>
                        <ConcentricCircle
                            title="Enunciation"
                            size={200}
                            fontType="h3"
                            label={`${stats.enunciation}%`}
                            outerColor={MAIN_BLUE}
                            middleColor={MAIN_YELLOW}
                            innerColor={MAIN_BLUE}
                        />
                    </Grid>

                    {/* WPM */}
                    <Grid item>
                        <ConcentricCircle
                            title="Words per Minute"
                            size={200}
                            fontType="h3"
                            label={stats.words_per_min}
                            outerColor={MAIN_BLUE}
                            middleColor={ORANGE}
                            innerColor={MAIN_BLUE}
                        />
                    </Grid>

                    {/* No of Pauses */}
                    <Grid item>
                        <ConcentricCircle
                            title="No of Pauses"
                            size={200}
                            fontType="h3"
                            label={stats.number_of_pauses}
                            outerColor={MAIN_BLUE}
                            middleColor={RED}
                            innerColor={MAIN_BLUE}
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item className={classes.grow} />

            {/* Energy over Time Line Chart */}
            <Grid item xs={12} className={classes.lineChartCont}>
                <Box m={2} className={classes.lineChartBox}>
                    <LineChart values={audioValues} />
                </Box>
            </Grid>

            <Grid item className={classes.grow} />

            {/* Bar Graph & Tips and Tricks Section */}
            <Grid item xs={12} style={{ padding: '3rem'}}>
                <Grid item container spacing={4} direction="row" justify="center">
                    {/* Bar Graph */}
                    <Grid item xs={6}>
                        <BarChart values={errorsInterval} />
                    </Grid>

                    {/* Tips and Tricks */}
                    <Grid item container xs={6} direction="column">
                        <Grid item container direction="row" alignItems="center">
                            <img src={Bulb} alt="lightbulb" className={classes.lightbulb} />
                            <Typography variant="h3">
                                <strong>Tips and Tricks</strong>
                            </Typography>
                        </Grid>
                        <Grid item container direction="column">
                            {
                                suggestions.map((item, i) => 
                                    <Typography key={i} variant="h6" paragraph>{item}</Typography>
                                )
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item className={classes.grow} />

            {/* Button Group */}
            <Grid item container spacing={6} direction="row" justify="space-evenly">
                <Grid item>
                    <Button onClick={handleTranscriptOpen} className={classes.button}>
						<Typography variant="h5"><b>Transcript</b></Typography>
					</Button>
                </Grid>
                <Grid item>
                    <Button href={TONE} className={classes.button}>
						<Typography variant="h5"><b>One More Time!</b></Typography>
					</Button>
                </Grid>
            </Grid>

            {/* Transcript Popup */}
            <Dialog onClose={handleTranscriptClose} aria-labelledby="customized-dialog-title" open={transcriptOpen}>
                <DialogTitle id="customized-dialog-title" onClose={handleTranscriptClose}>
                    Transcript
                </DialogTitle>
                <DialogContent dividers>
                    <Typography variant="body1" gutterBottom>
                        {transcription}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleTranscriptClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
		</Grid>
	);
}

export default Dashboard;