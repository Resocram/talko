import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import lightbulb from '../assets/lightbulb.svg';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'

function Dashboard() {
	return (
        <div>
            <Grid container spacing={1}>
				<Grid item xs={3} style={{marginLeft:"50px"}}>
                    <Box style={{height: "370px", width: "370px", borderRadius: "50%", backgroundColor: "#1B372D", marginTop:"-25px"}}/>
                    <Box style={{height: "285px", width: "285px", borderRadius: "50%", backgroundColor: "#3C7C64", marginTop: "-323px", marginLeft: "44px"}}/>
                    <Box style={{height: "230px", width: "230px", borderRadius: "50%", backgroundColor: "#52AA8A", marginTop: "-258px", marginLeft:"71px"}}/>
                    <Typography varaint="h3" style={{color: "white", fontSize: "70px", fontFamily: "Montserrat", marginTop: "-170px", marginLeft: "114px"}}><strong>87%</strong></Typography>
				</Grid>
                <Grid item xs={3}>
                    <Typography varaint="h3" style={{color: "white", fontSize: "70px", fontFamily: "Montserrat", marginTop: "-170px", marginLeft: "114px"}}><strong>87%</strong></Typography>
				</Grid>
                <Grid item xs={2}>
				</Grid>
                <Grid item xs={2}>
				</Grid>
                <Grid item xs={2}>
				</Grid>
			</Grid>
        </div>
		
	);
}

export default Dashboard;