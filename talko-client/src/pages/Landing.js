import React from 'react';
import Typography from '@material-ui/core/Typography';

function Landing() {
	return (
		<div style={{width:"60%"}}> 
			<Typography varaint="h1" style={{color: "#F2C407", fontSize: "180px", fontFamily: "Righteous", paddingLeft:"60px", marginTop: "30px"}}>Talko.</Typography>
			<Typography varaint="h2" style={{color: "#F2C407", fontSize: "25px", fontFamily: "Montserrat", paddingLeft:"60px", paddingTop: "-10px"}}><strong>Receive INSTANT feedback on your public speaking skills.</strong></Typography>
			<Typography varaint="h3" style={{color: "#F2C407", fontSize: "20px", fontFamily: "Montserrat", paddingLeft:"60px"}}>Talko will work with you to improve enunciation, pace, volume and much more. Input your speech now, and let's get talking!</Typography>
		</div>
	);
}

export default Landing;

