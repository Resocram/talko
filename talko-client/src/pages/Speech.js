import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.primary.contrastText
    }
}));

function Speakers() {
    const classes = useStyles();

	return (
		<Grid container justify="center">
			<Typography variant="h1" align="center" className={classes.title}>
                <b>What do you wanna say?</b>
            </Typography>
            <Grid container item direction="row">
                
            </Grid>
		</Grid>
	);
}

export default Speakers;