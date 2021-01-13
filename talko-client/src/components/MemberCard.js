import React from 'react';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles(theme => ({
    flipCard: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        marginBottom: theme.spacing(5),
    },
	avatar: {
		width: theme.spacing(25),
    	height: theme.spacing(25)
    },
    textBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    name: {
        color: 'white'
    }
}));

function MemberCard(props) {
    const classes = useStyles();

    return (
        <Box>
            <Box className={"flip-card " + classes.flipCard}>
                <Box className="flip-card-inner">
                    <Box className="flip-card-front">
                        <Avatar {...props} className={classes.avatar} />
                    </Box>
                    <Box className={"flip-card-back " + classes.textBox}>
                        <IconButton href={props.github} target="_blank">
                            <GitHubIcon fontSize="large" />
                        </IconButton>
                        <IconButton href={props.linkedin} target="_blank">
                            <LinkedInIcon fontSize="large" />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Typography variant="h5" align="center" className={classes.name}>
                <b>{props.alt}</b>
            </Typography>
        </Box>
    );
}

export default MemberCard;