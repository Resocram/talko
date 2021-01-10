import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import lightbulb from '../assets/lightbulb.svg';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
// import CircularProgress from '../components/CircularProgress';
import LineChart from '../components/LineChart';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';

const useStyles = makeStyles({
    button: {
		color: 'white',
        textTransform: 'None',
        padding: '0.5rem 2rem',
        border: '3px solid #F2C407',
        borderRadius: '5rem'
    }
});

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
  });
  
  const DialogContent = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
        },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

	return (
        <div>
            <Typography variant="h1" paragraph style={{color: "#F2C407", fontFamily: "Righteous", margin: '-1rem 3rem'}}>Dashboard</Typography>
            <hr style={{backgroundColor: "#F2C407", height: "5px", width: "500px", float: "left", borderColor: "#F2C407", margin: '1rem 3rem'}} />
            <Grid container spacing={1} style={{ height: '100%' }}>
				<Grid item xs={3} style={{marginLeft:"50px", marginTop: "60px"}}>
                    <Box style={{height: "370px", width: "370px", borderRadius: "50%", backgroundColor: "#1B372D", marginTop:"-25px"}}/>
                    <Box style={{height: "285px", width: "285px", borderRadius: "50%", backgroundColor: "#3C7C64", marginTop: "-326px", marginLeft: "44px"}}/>
                    <Box style={{height: "230px", width: "230px", borderRadius: "50%", backgroundColor: "#52AA8A", marginTop: "-259px", marginLeft:"71px"}}/>
                    <Typography variant="h3" style={{color: "white", fontSize: "70px", fontFamily: "Montserrat", marginTop: "-170px", marginLeft: "114px"}}><strong>87%</strong></Typography>
				</Grid>
                <Grid item xs={3}>
                    <Typography varaint="h3" style={{color: "white", fontSize: "20px", fontFamily: "Montserrat", marginTop: "140px", marginLeft: "57px"}}>
                        Excellent speaking! From our analysis, the tone of your speech was 87% positive, which matches your initial selection.
                    </Typography>
				</Grid>
                <Grid item xs={2}>
                    <Box style={{border: "9px solid #F4A261", height: "145px", width: "145px", borderRadius: "50%", marginTop: "120px", marginLeft: "5px"}}/>
                    <Typography variant="h6" style={{color: "white", marginTop: "10px", marginLeft: "36px"}}><strong>Words per Minute</strong></Typography>
                    <Typography variant="h3" style={{color: "white", marginTop: "-182px", marginLeft: "48px"}}><strong>100</strong></Typography>
				</Grid>
                <Grid item xs={2}>
                    <CircularProgress variant="determinate" value={79} style={{height: "175px", width: "175px", color: "#F2C407", marginTop:"-10px", marginLeft:"-5px"}}/>
                    <Typography variant="h3" style={{color: "white", fontSize: "45px", fontFamily: "Montserrat", marginTop: "-118px", marginLeft: "38px"}}><strong>79%</strong></Typography>
                    <Typography variant="h3" style={{color: "white", fontSize: "20px", fontFamily: "Montserrat", marginLeft: "24px", marginTop: "52px"}}><strong>Enunciation</strong></Typography>
				</Grid>
                <Grid item xs={1}>
                    <Box style={{border: "9px solid #E76F51", height: "145px", width: "145px", borderRadius: "50%", marginTop:"120px", marginLeft: "-15px"}}/>
                    <Typography variant="h3" style={{color: "white", fontSize: "20px", fontFamily: "Montserrat", marginTop: "-172px", marginLeft: "41px", marginTop: "10px"}}><strong>Filler Words</strong></Typography>
                    <Typography variant="h3" style={{color: "white", fontSize: "45px", fontFamily: "Montserrat", marginTop: "-181px", marginLeft: "44px"}}><strong>12</strong></Typography>
				</Grid>
			</Grid>

            {/* Energy over Time Line Chart */}
            <div style={{backgroundColor: "#324F5D", marginLeft: "8%", marginRight: "8%", height: "300px", marginTop: "140px", borderRadius: "25px", padding: '2rem'}}>
                <LineChart />
            </div> 


            {/* Bar Graph & Tips and Tricks Section */}
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
                    <Button onClick={handleClickOpen} className={classes.button}>
						<Typography variant="h5"><b>Transcript</b></Typography>
					</Button>
                </Grid>
                <Grid item>
                    <Button href="/tone" className={classes.button}>
						<Typography variant="h5"><b>One More Time!</b></Typography>
					</Button>
                </Grid>
            </Grid>

            {/* Transcript Popup */}
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Transcript
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor.
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                        auctor fringilla.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
	);
}



export default Dashboard;