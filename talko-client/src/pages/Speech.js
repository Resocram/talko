import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';

function Speech() {
    const [transcript, setTranscript] = useState('');

    const handleChange = (event) => {
        setTranscript(event.target.value);
    };

	return (
		<div> 
            <Typography varaint="h2" style={{color: "#F2C407", fontSize: "68px", fontFamily: "Montserrat", marginLeft: "8%", marginTop: "10px"}}>What do you wanna say?</Typography>
            <form >
                <TextField
                    value={transcript}
                    onChange={handleChange}
                    multiline
                    placeholder="Enter your speech here..."
                    InputProps={{style: {fontSize: 30}}}
                    style={{
                        backgroundColor: "#1A2930",
                        width: "81%",
                        border: "4px solid #F2C407",
                        height: "230px", 
                        color: "#F2C407",
                        fontSize: "35px",
                        marginTop: "20px",
                        paddingLeft: "40px",
                        paddingTop: "20px",
                        borderRadius: "45px",
                        marginLeft: "8%",
                        marginRight: "8%"}}
                />
            </form>
            <div style={{float: "right", marginRight: "8%", marginTop: "100px"}}>
                <Button style={{color: "white", fontSize: "26px", fontWeight:"bold", paddingLeft:"60px", marginTop: "-32px"}}>Ready, set, record!</Button>
                <ArrowForwardIcon style={{fontSize: "40px", marginTop: "-10x", color: "white"}} />
            </div>
		</div>
		
	);
}

export default Speech;
