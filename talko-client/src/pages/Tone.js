import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../contexts/AppContext';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import Slider from '../components/Slider';

// Constants import
import { SPEECH } from '../constants/routes';


const useStyles = makeStyles(theme => ({
    container: {
		color: theme.palette.secondary.main,
		height: '82vh'
	},
    slider: {
        width: '50%',
        height: '1rem',
        marginTop: '8%',
        marginBottom: '4%'
    },
    emojiContainer: {
        width: '50%'
    },
    emoji: {
        fontSize: '7rem',
        color: 'white'
    },
    grow: {
        flexGrow: 1
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
	}
}));

function Tone() {
    const classes = useStyles();
    const { state, setTone } = useContext(AppContext);
    const { tone } = state;
    const [redirect, setRedirect] = useState(false);

    const handleChange = (_, newToneVal) => setTone(newToneVal);

    const handleClick = () => setRedirect(true);

    if (redirect)
        return <Redirect to={SPEECH} />

	return (
		<Grid container direction="column" alignItems="center" spacing={2} className={classes.container}>
            {/* Title */}
            <Grid item>
                <Typography variant="h2" align="center" paragraph>
                    <b>Select Your Tone ...</b>
                </Typography>
            </Grid>

            {/* Silder */}
            <Grid item className={classes.slider}>
                <Slider
                    value={tone}
                    onChange={handleChange}
                    color="secondary"
                    getAriaValueText={value => value}
                    aria-labelledby="discrete-slider-always"
                    step={1}
                    max={10}
                    valueLabelDisplay="on"
                />
            </Grid>

            {/* Emojis */}
            <Grid container item direction="row" justify="space-between" className={classes.emojiContainer}>
                <SentimentVeryDissatisfiedIcon className={classes.emoji} />
                <SentimentDissatisfiedIcon className={classes.emoji} />
                <SentimentSatisfiedIcon className={classes.emoji} />
                <SentimentSatisfiedAltIcon className={classes.emoji} />
            </Grid>
            
            {/* Placeholder: To make sure button are at the same location for each page */}
            <Grid item className={classes.grow} />

            {/* Next button */}
            <Grid container item justify="flex-end">
                <Button onClick={handleClick} className={classes.button}>
					<Typography variant="h4" display="inline">
						<b>Next</b>
					</Typography>
					&nbsp;&nbsp;
					<ArrowForwardIcon className={classes.buttonIcon} />
				</Button>
            </Grid>
		</Grid>
	);
}

export default Tone;