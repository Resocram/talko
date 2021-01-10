import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Mic from '../assets/Mic.svg';
import Box from '@material-ui/core/Box';

function Recording() {
	return (
        <div>
            <Typography varaint="h2" style={{color: "#F2C407", fontSize: "60px", fontFamily: "Montserrat", marginTop: "10px", textAlign: "center"}}>Press the icon to start</Typography>
            <Typography varaint="h2" style={{color: "#F2C407", fontSize: "60px", fontFamily: "Montserrat", marginTop: "-10px", textAlign:"center"}}>recording your speech</Typography>
            <Box style={{border: "4px solid #C75943", height: "112px", width: "112px", borderRadius: "50%", marginLeft:"629px", marginTop: "103px"}}/>
            <Box style={{border: "4px solid #C75943", height: "145px", width: "145px", borderRadius: "50%", marginLeft:"612px", marginTop: "-136px"}}/>
            <Button style={{justifyContent: "center"}}>
                <img src={Mic} alt="Mic" style={{width: "75px", height: "75px", marginLeft:"643px", marginTop: "-175px"}}/>
            </Button>
        </div>
		
	);
}

export default Recording;