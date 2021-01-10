import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const CustomSlider = withStyles({
    rail: {
        height: '1rem',
        borderRadius: '10px'
    },
    track: {
        height: '1rem',
        borderRadius: '10px'
    },
    thumb: {
        width: '2rem',
        height: '2rem',
        marginTop: '-10px',
        marginLeft: '-15px',
        backgroundColor: '#F2C407',
        color: 'rgba(242, 196, 7, 0.20)',
        marginRight: '100px',
        borderLeft: 'solid 10px #F2C407',
        borderRight: 'solid 10px #F2C407'
    }
})(Slider);

const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.primary.contrastText
    },
    slider: {
        width: '50%',
        height: '1rem',
        alignSelf: 'center',
        marginTop: '8%',
        marginBottom: '3%'
    },
    emojiContainer: {
        width: '50%',
        alignSelf: 'center'
    },
    emoji: {
        fontSize: '7rem',
        color: 'white'
    },
    button: {
        color: 'white',
        textTransform: 'None'
    }
}));

function Tone() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    const handleClick = () => {

    };

	return (
		<Grid container direction="column" justify="center">
            <Grid item>
                <Typography variant="h2" align="center" className={classes.title}>
                    <b>Select Your Tone ...</b>
                </Typography>
            </Grid>
            <Grid item className={classes.slider}>
                <CustomSlider
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
            <Grid container item style={{ marginTop: '3rem', paddingRight: '3rem'}} justify="flex-end">
                <Button onClick={handleClick} className={classes.button}>
                    <Typography variant="h4" display="inline"><b>Next</b></Typography>&nbsp;&nbsp;
                    <ArrowForwardIcon style={{fontSize: "40px", marginTop: "-10x", color: "white"}} />
                </Button>
            </Grid>
		</Grid>
	);
}

export default Tone;