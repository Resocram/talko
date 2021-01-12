import React from 'react';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MonitorDash from '../assets/monitor-dash.svg';

// Constants import
import { TONE } from '../constants/routes';


const useStyles = makeStyles(theme => ({
	container: {
		color: theme.palette.secondary.main,
		minHeight: '82vh'
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
		fontSize: '40px',
		color: 'white'
	},
	title: {
		fontFamily: 'Righteous',
		fontSize: '12rem'
	},
	demoImage: {
		width: '95%'
	}
}));

function Landing() {
	const classes = useStyles();

	return (
		<Grid container direction="row" alignItems="center" spacing={2} className={classes.container}>
			{/* Left: App Intro */}
			<Grid item xs={7} container direction="column">
				<Typography variant="h1" className={classes.title}>
					Talko.
				</Typography>
				<Typography variant="h4" paragraph>
					<b>Receive INSTANT feedback on your public speaking skills.</b>
				</Typography>
				<Typography variant="h6" paragraph>
					Talko will work with you to improve enunciation, pace, volume and much more. Input your speech now, and let's get talking!
				</Typography>
				<br />
				<Grid item>
					<Button href={TONE} className={classes.button}>
						<Typography variant="h4" display="inline">
							<b>Get Started</b>
						</Typography>
						&nbsp;&nbsp;
						<ArrowForwardIcon className={classes.buttonIcon} />
					</Button>
				</Grid>
			</Grid>

			{/* Right: App Demo */}
			<Grid item xs={5}>
				<img
					src={MonitorDash}
					alt="monitor-dash"
					className={classes.demoImage}
				/>
			</Grid>
		</Grid>		
	);
}

export default Landing;

