import React from 'react';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Emoji from '../components/Emoji';
import LogoButton from '../components/LogoButton';


const useStyles = makeStyles(theme => ({
    container: {
		color: theme.palette.secondary.main,
		height: '82vh'
	},
    grow: {
        flexGrow: 1
    }
}));

function Error() {
    const classes = useStyles();

    return (
        <Grid container direction="column" alignItems="center" spacing={2} className={classes.container}>
            {/* Title */}
            <Grid item className={classes.grow} />

            <Grid item>
                <Typography variant="h2" align="center" paragraph>
                    <b>Cannot find what you're looking for <Emoji symbol="😱" label="mad" /></b>
                </Typography>
            </Grid>

            <Grid item className={classes.grow} />

            <LogoButton />
		</Grid>
    );
}

export default Error;