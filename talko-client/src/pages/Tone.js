import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';

const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.primary.contrastText
    },
    slider: {
        width: '50%',
        height: '1rem',
        alignSelf: 'center',
        marginTop: '10%',
        marginBottom: '2%'
    },
    emojiContainer: {
        width: '50%',
        alignSelf: 'center'
    },
    emoji: {
        fontSize: '10rem',
        color: 'white'
    }
}));
  

function Tone() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

	return (
		<Grid container direction="column" justify="center">
            <Grid item>
                <Typography variant="h1" align="center" className={classes.title}>
                    <b>Select Your Tone ...</b>
                </Typography>
            </Grid>
            <Grid item className={classes.slider}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    color="secondary"
                    getAriaValueText={value => value}
                    aria-labelledby="discrete-slider-always"
                    step={1}
                    max={10}
                    valueLabelDisplay="on"
                />
            </Grid>
            <Grid container item direction="row" justify="space-between" className={classes.emojiContainer}>
                <SentimentVeryDissatisfiedIcon className={classes.emoji} />
                <SentimentDissatisfiedIcon className={classes.emoji} />
                <SentimentSatisfiedIcon className={classes.emoji} />
                <SentimentSatisfiedAltIcon className={classes.emoji} />
            </Grid>
		</Grid>
	);
}

export default Tone;