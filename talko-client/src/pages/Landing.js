import React, { useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Desktop from '../assets/desktop.svg';
import Grid from '@material-ui/core/Grid'; 

const useStyles = makeStyles({
	container: {
		paddingLeft: '60px'
	},
    button: {
		color: 'white',
		textTransform: 'None'
    }
});

function Landing() {
	const classes = useStyles();
	const [redirect, setRedirect] = useState(false);

	const handleClick = () => {
		setRedirect(true);
	};

	return (
		<div style={{width:"60%"}}> 
			<Grid container spacing={2} className={classes.container}>
				<Grid item xs={10}>
					<Typography varaint="h1" style={{color: "#F2C407", fontSize: "160px", fontFamily: "Righteous", marginTop: "50px"}}>Talko.</Typography>
					<Typography varaint="h2" style={{color: "#F2C407", fontSize: "20px", marginTop: "-20px"}}><strong>Receive INSTANT feedback on your public speaking skills.</strong></Typography>
					<Typography varaint="h3" style={{color: "#F2C407", fontSize: "17px"}}>Talko will work with you to improve enunciation, pace, volume and much more. Input your speech now, and let's get talking!</Typography>
					<br />
					<Button href="/tone" className={classes.button}>
						<Typography variant="h4" display="inline"><b>Get Started</b></Typography>&nbsp;&nbsp;
						<ArrowForwardIcon style={{fontSize: "40px", marginTop: "-10x", color: "white"}} />
					</Button>
				</Grid>
				<Grid item xs={2}>
					<img src={Desktop} alt="desktop" style={{width: "25rem", height: "25rem", marginLeft: "9rem", marginTop: "4rem"}}/>
				</Grid>
			</Grid>
		</div>		
	);
}

export default Landing;

