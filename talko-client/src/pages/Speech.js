import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
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

function Speech() {
    const classes = useStyles();
    const [transcript, setTranscript] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    const handleChange = (event) => {
        setTranscript(event.target.value);
    };

    const handleClick = async () => {
        setRedirect(true);
        const res = await axios.get('/api');
    };
    
    if (redirect)
        return <Redirect to="/recording" />

	return (
		<div className={classes.container}> 
            <Typography variant="h2" className={classes.title}>
                <b>What do you wanna say?</b>
            </Typography>
            <form >
                <TextField
                    value={transcript}
                    onChange={handleChange}
                    multiline
                    placeholder="Enter your speech here..."
                    InputProps={{style: {fontSize: 30}}}
                    style={{
                        backgroundColor: "#1A2930",
                        width: "90%",
                        border: "4px solid #F2C407",
                        height: "230px", 
                        color: "#F2C407",
                        fontSize: "35px",
                        marginTop: "20px",
                        paddingLeft: "40px",
                        paddingTop: "20px",
                        borderRadius: "45px",
                    }}
                />
            </form>
            <div style={{float: "right", marginRight: "3rem", marginTop: "2rem"}}>
                <Button onClick={handleClick} className={classes.button}>
					<Typography variant="h4" display="inline"><b>Ready, set, record!</b></Typography>&nbsp;&nbsp;
					<ArrowForwardIcon style={{fontSize: "40px", marginTop: "-10x", color: "white"}} />
				</Button>
            </div>
		</div>
		
	);
}

export default Speech;
