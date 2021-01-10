import React, { useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import lightbulb from '../assets/lightbulb.svg';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
// import CircularProgress from '@material-ui/core/CircularProgress';
import CircularProgress from '../components/CircularProgress';
import LineChart from '../components/LineChart';

const useStyles = makeStyles({
    button: {
		color: 'white',
        textTransform: 'None',
        padding: '0.5rem 2rem',
        border: '3px solid #F2C407',
        borderRadius: '5rem'
    }
});

const res = {
    "accuracy": 92,
    "audioValues": [
        0.15804717705851132,
        0.9823222860336408,
        0.9721155990933149,
        0.8876469949617101,
        0.8899375741945893,
        0.9348861674344412,
        0.9521287966650752,
        0.9066197750257862,
        0.8037928229358282,
        0.6736049892518726,
        0.5518937956106095,
        0.46695985385839667,
        0.4332545141990642,
        0.4510423509992633,
        0.509810482150768,
        0.5931974624313614,
        0.6837460861020475,
        0.7664760030743424,
        0.8309047529093844,
        0.8716128704711563,
        0.8877208209364034,
        0.8817420191276717,
        0.8582420224362555,
        0.8226223602239775,
        0.7802078014081792,
        0.7356865465519706,
        0.6928579494225282,
        0.6545916891737573,
        0.6228935124382482,
        0.5989950189833441,
        0.583423539208045,
        0.5760478080671962,
        0.5761238357937817,
        0.5823761897057083,
        0.5931418892311832,
        0.6065817102172574,
        0.6209351765744722,
        0.6347705904820475,
        0.6471690489281653,
        0.6577868397446087,
        0.6667649443545776,
        0.6744929289533546,
        0.6812785630089866,
        0.6870119541193459,
        0.6909328468782604,
        0.6916021050472426,
        0.6871408850997519,
        0.6757373797952957,
        0.6563425616619533,
        0.629401440150999,
        0.5974155165221248,
        0.5651243648181843,
        0.5391416285590224,
        0.5269843607849228,
        0.5355800479353576,
        0.5694957803588968,
        0.6292691600284422,
        0.7102886278280222,
        0.8026408504090132,
        0.8921876769328736,
        0.9628813485963543,
        1.0,
        0.9936707261595545,
        0.9418320734375327,
        0.8517519458552559,
        0.7394285654794996,
        0.6266544275203201,
        0.5361502922167686,
        0.48582509455802414,
        0.48369652334297764,
        0.525101331136733,
        0.5934228704926469,
        0.6646120730696938,
        0.7145382557103955,
        0.72697907415766,
        0.6993655968348985,
        0.6437261339359662,
        0.581700118443456,
        0.5349555105215269,
        0.5148486669406331,
        0.5165548943701846,
        0.5220712787587447,
        0.5125520127551283,
        0.48475668110724907,
        0.4610838004415795,
        0.482331341288194,
        0.5797198560502927,
        0.7381853854808597,
        0.8787603969231375,
        0.890114267818706,
        0.7131530526380332,
        0.427147138550939,
        0.23630605905186033,
        0.28843688744543805,
        0.4393130358565457,
        0.3272562337962203,
        0.0,
        0.177337447340332,
        0.06790026055119765,
        0.03973998765798318
    ],
    "stats": {
        "articulation_rate": 5.0,
        "balance": 0.8,
        "number_of_pauses": 11.0,
        "number_of_syllables": 152.0,
        "original_duration": 41.1,
        "rate_of_speech": 4.0,
        "speaking_duration": 32.7,
        "words_per_min": 137
    },
    "transcription": "hello my name is Andrea said sir I am studying marketing at the University of Texas at Dallas I am a member of the American Marketing Association and Alpha Kappa PSI both of which are dedicated to shaping future Business Leaders I hope to incorporate my business knowledge into consumer Trend analysis and strengthening relationships among consumers as well as other companies I am Savvy social and principles and have Exquisite interpersonal communication skills I know that I can be an asset in any company and or situation and I hope that you will consider me for an internship or job opportunity thank you so much"
};

function Dashboard() {
    const classes = useStyles();

	return (
        <div>
            <Grid container spacing={1} style={{ height: '100%' }}>
				<Grid item xs={3} style={{marginLeft:"50px"}}>
                    <Box style={{height: "370px", width: "370px", borderRadius: "50%", backgroundColor: "#1B372D", marginTop:"-25px"}}/>
                    <Box style={{height: "285px", width: "285px", borderRadius: "50%", backgroundColor: "#3C7C64", marginTop: "-326px", marginLeft: "44px"}}/>
                    <Box style={{height: "230px", width: "230px", borderRadius: "50%", backgroundColor: "#52AA8A", marginTop: "-259px", marginLeft:"71px"}}/>
                    <Typography variant="h3" style={{color: "white", fontSize: "70px", fontFamily: "Montserrat", marginTop: "-170px", marginLeft: "114px"}}><strong>87%</strong></Typography>
				</Grid>
                <Grid item xs={3}>
                    <Typography variant="h3" style={{color: "white", fontSize: "20px", fontFamily: "Montserrat", marginTop: "85px", marginLeft: "57px"}}>
                        Excellent speaking! From our analysis, the tone of your speech was 87% positive, which matches your initial selection.
                    </Typography>
				</Grid>
                <Grid item xs={2}>
                    <CircularProgress maxVal={37} color="#F4A261" title="Words per Minute" />
                    {/* <Box style={{border: "9px solid #F4A261", height: "145px", width: "145px", borderRadius: "50%", marginTop: "120px", marginLeft: "5px"}}/>
                    <Typography variant="h6" style={{color: "white", marginTop: "10px", marginLeft: "36px"}}><strong>Words per Minute</strong></Typography>
                    <Typography variant="h3" style={{color: "white", marginTop: "-182px", marginLeft: "48px"}}><strong>100</strong></Typography> */}
				</Grid>
                {/* <Grid item xs={2}>
                    <CircularProgress variant="determinate" value={79} style={{height: "175px", width: "175px", color: "#F2C407", marginTop:"-10px", marginLeft:"-5px"}}/>
                    <Typography variant="h3" style={{color: "white", fontSize: "45px", fontFamily: "Montserrat", marginTop: "-118px", marginLeft: "38px"}}><strong>79%</strong></Typography>
                    <Typography variant="h3" style={{color: "white", fontSize: "20px", fontFamily: "Montserrat", marginLeft: "24px", marginTop: "52px"}}><strong>Enunciation</strong></Typography>
				</Grid>
                <Grid item xs={1}>
                    <Box style={{border: "9px solid #E76F51", height: "145px", width: "145px", borderRadius: "50%", marginTop:"120px", marginLeft: "-15px"}}/>
                    <Typography variant="h3" style={{color: "white", fontSize: "20px", fontFamily: "Montserrat", marginTop: "-172px", marginLeft: "41px", marginTop: "10px"}}><strong>Filler Words</strong></Typography>
                    <Typography variant="h3" style={{color: "white", fontSize: "45px", fontFamily: "Montserrat", marginTop: "-181px", marginLeft: "44px"}}><strong>12</strong></Typography>
				</Grid> */}
			</Grid>

            {/* Energy over Time Line Chart */}
            <div style={{backgroundColor: "#324F5D", marginLeft: "8%", marginRight: "8%", height: "300px", marginTop: "140px", borderRadius: "25px", padding: '2rem'}}>
                <LineChart />
            </div> 

            {/* Tips and Tricks Section */}
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    
                </Grid>
                <Grid item container xs={6} direction="row" alignItems="center">
                    <img src={lightbulb} alt="lightbulb" style={{ width: "300px", height: "300px", margin: '-50 -50 -50 -50' }}/>
                   
                    <Typography variant="h3" style={{color: "white", fontSize: "20px", fontFamily: "Montserrat"}}><strong>Tips and Tricks</strong></Typography>
                </Grid>
            </Grid>

            {/* Button Group */}
            <Grid container spacing={6} direction="row" justify="space-evenly">
                <Grid item>
                    <Button className={classes.button}>
						<Typography variant="h5"><b>Transcript</b></Typography>
					</Button>
                </Grid>
                <Grid item>
                    <Button className={classes.button}>
						<Typography variant="h5"><b>One More Time!</b></Typography>
					</Button>
                </Grid>
            </Grid>

        </div>
	);
}



export default Dashboard;