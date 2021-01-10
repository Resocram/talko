import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

function Speech() {
	return (
		<div> 
            <Typography varaint="h2" style={{color: "#F2C407", fontSize: "68px", fontFamily: "Montserrat", marginLeft: "8%"}}>What do you wanna say?</Typography>
            <Box style={{backgroundColor: "#1A2930", marginLeft: "8%", marginRight: "8%", border: "4px solid #F2C407", height: "230px", 
                color: "#F2C407", fontSize: "35px", marginTop: "20px", paddingLeft: "40px", paddingTop: "20px",
                borderRadius: "45px"}}>Enter your speech here...
            </Box>
            <form >
                <TextField multiline placeholder="Enter your speech here..." style={{backgroundColor: "#1A2930", width: "85%", border: "4px solid #F2C407", height: "230px", 
                color: "#F2C407", fontSize: "35px", marginTop: "20px", paddingLeft: "40px", paddingTop: "20px",
                borderRadius: "45px"}}/>
            </form>
            <div style={{float: "right", marginRight: "8%", marginTop: "100px"}}>
                <Button style={{color: "white", fontSize: "26px", fontWeight:"bold", paddingLeft:"60px", marginTop: "-30px"}}>Ready, set, record!</Button>
                <ArrowForwardIcon style={{fontSize: "40px", marginTop: "10px", color: "white"}} />
            </div>
		</div>
		
	);
}

export default Speech;