import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    bottom: {
        color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    container: {
        marginLeft: '8%',
        width: '90%'
    },
    title: {
        color: theme.palette.primary.contrastText
    },
    button: {
		color: 'white',
		textTransform: 'None'
    }
}));

function CircularProgressWithLabel(props) {
    const classes = useStyles();

    return (
        <Grid container direction="column" justify="center">
            <Grid item>
                <Box position="relative" display="inline-flex">
                    <CircularProgress
                        variant="determinate"
                        className={classes.bottom}
                        size={100}
                        thickness={4}
                        {...props}
                    />
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="h6" component="div" style={{ color: 'white' }}>
                            {`${Math.round(props.value,)}%`}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="div" style={{ color: 'white' }}>
                    {props.title}
                </Typography>
            </Grid>
        </Grid>
    );
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

function CircularStatic(props) {
    const { maxVal, color, title } = props;
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= maxVal - 1) {
                    clearInterval(timer);
                    return prevProgress + 1;
                }
                else
                    return prevProgress + 1;
            });
        }, 10);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <CircularProgressWithLabel value={progress} color={color} title={title} />;
}

export default CircularStatic;