import React from 'react';

// Style components import
import { lighten, makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    grid: {
        alignItems: 'center',
        minHeight: '82vh'
    },
    paper: {
        width: '40%',
        padding: '4vw',
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    root: {
      position: 'relative'
    },
    bottom: {
      color: lighten(theme.palette.secondary.main, 0.7)
    },
    top: {
      color: theme.palette.secondary.main,
      animationDuration: '550ms',
      position: 'absolute',
      left: 0
    },
    circle: {
      strokeLinecap: 'round'
    }
}));

function LoadingSpinner(props) {
    const classes = useStyles();
    
    return (
        <Grid container spacing={2} direction="column" justify="center" className={classes.grid}>
            <div className={classes.paper}>
                <div className={classes.root}>
                    <CircularProgress
                        variant="determinate"
                        className={classes.bottom}
                        size={100}
                        thickness={4}
                        {...props}
                        value={100}
                    />
                    <CircularProgress
                        variant="indeterminate"
                        disableShrink
                        className={classes.top}
                        classes={{
                        circle: classes.circle,
                        }}
                        size={100}
                        thickness={4}
                        {...props}
                    />
                </div>
            </div>
        </Grid>
    )
}

export default LoadingSpinner;