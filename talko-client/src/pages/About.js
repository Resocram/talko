import React from 'react';
import Typography from '@material-ui/core/Typography';

function About() {
	return (
		<div style={{ margin: '0 3rem' }}> 
			<Typography variant="h1" paragraph style={{color: "#F2C407", fontFamily: "Righteous"}}>About Us</Typography>
            <hr style={{backgroundColor: "#F2C407", height: "5px", width: "500px", float: "left", borderColor: "#F2C407", margin: '3rem'}} />

		</div>		
	);
}

export default About;