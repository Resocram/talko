import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../contexts/AppContext';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// Constants import
import { RECORDING } from '../constants/routes';


const useStyles = makeStyles(theme => ({
    container: {
		color: theme.palette.secondary.main,
		height: '82vh'
	},
    grow: {
        flexGrow: 1
    },
    form: {
        width: '70%'
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
    textfield: {
        borderRadius: '45px',
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
        border: `4px solid ${theme.palette.secondary.main}`,
        width: '100%'
    }
}));

function Speech() {
    const classes = useStyles();
    const { state, setTranscriptInput } = useContext(AppContext);
    const { transcriptInput } = state;
    const [redirect, setRedirect] = useState(false);

    const handleChange = (event) => setTranscriptInput(event.target.value);
  
    const handleClick = () => setRedirect(true);
  
    if (redirect)
        return <Redirect to={RECORDING} />

	return (
		<Grid container direction="column" alignItems="center" spacing={2} className={classes.container}>
            {/* Title */}
            <Grid item>
                <Typography variant="h2" align="center" paragraph>
                    <b>Type in Your Speech ...</b>
                </Typography>
            </Grid>

            <Grid item className={classes.grow} />

            {/* Text Box */}
            <Grid item className={classes.form}>
                <form>
                    <TextField
                        value={transcriptInput}
                        onChange={handleChange}
                        rows={10}
                        multiline
                        placeholder="Enter your speech here..."
                        InputProps={{
                            style: {
                                fontSize: 25,
                                padding: '1rem'
                            }
                        }}
                        className={classes.textfield}
                    />
                </form>
            </Grid>

            {/* Placeholder: To make sure button are at the same location for each page */}
            <Grid item className={classes.grow} />

            {/* Next button */}
            <Grid container item justify="flex-end">
                <Button onClick={handleClick} className={classes.button}>
					<Typography variant="h4" display="inline">
						<b>Ready, Set, Record!</b>
					</Typography>
					&nbsp;&nbsp;
					<ArrowForwardIcon className={classes.buttonIcon} />
				</Button>
            </Grid>
		</Grid>
	);
}

export default Speech;
