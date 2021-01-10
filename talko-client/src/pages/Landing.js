import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Desktop from '../assets/desktop_nobkg.svg';
import Grid from '@material-ui/core/Grid'; 

function Landing() {
	return (
		<div style={{width:"60%"}}> 
			<Grid container spacing={2}>
				<Grid item xs={10}>
					<Typography varaint="h1" style={{color: "#F2C407", fontSize: "160px", fontFamily: "Righteous", paddingLeft:"60px", marginTop: "50px"}}>Talko.</Typography>
					<Typography varaint="h2" style={{color: "#F2C407", fontSize: "20px", fontFamily: "Montserrat", paddingLeft:"60px", marginTop: "-20px"}}><strong>Receive INSTANT feedback on your public speaking skills.</strong></Typography>
					<Typography varaint="h3" style={{color: "#F2C407", fontSize: "17px", fontFamily: "Montserrat", paddingLeft:"60px"}}>Talko will work with you to improve enunciation, pace, volume and much more. Input your speech now, and let's get talking!</Typography>
					<Button style={{color: "white", fontSize: "26px", fontWeight:"bold", paddingLeft:"60px", marginTop: "-30px"}}>Get Started</Button>
					<ArrowForwardIcon style={{fontSize: "40px", marginTop: "10px", color: "white"}} />
				</Grid>
				<Grid item xs={2}>
					<img src={Desktop} style={{width: "25rem", height: "25rem", marginLeft: "9rem", marginTop: "4rem"}}/>
				</Grid>
			</Grid>
		</div>
		// test comment
		
	);
}

export default Landing;

