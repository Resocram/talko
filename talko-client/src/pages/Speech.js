import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Desktop from '../assets/desktop.svg';
import Grid from '@material-ui/core/Grid'; 

function Speech() {
	return (
		<div> 
            <Typography varaint="h2" style={{color: "#F2C407", fontSize: "20px", fontFamily: "Montserrat", paddingLeft:"60px", marginTop: "-20px"}}>What do you wanna say?</Typography>
            <Typography varaint="h3" style={{color: "#F2C407", fontSize: "17px", fontFamily: "Montserrat", paddingLeft:"60px"}}>Talko will work with you to improve enunciation, pace, volume and much more. Input your speech now, and let's get talking!</Typography>
            <Button style={{color: "white", fontSize: "26px", fontWeight:"bold", paddingLeft:"60px", marginTop: "-30px"}}>Ready, set, record!</Button>
            <ArrowForwardIcon style={{fontSize: "40px", marginTop: "10px", color: "white"}} />
		</div>
		
	);
}

export default Speech;
