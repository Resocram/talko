import React from 'react';
import { Link } from 'react-router-dom';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as TalkoLogo } from '../assets/talko-logo.svg';

// Constants import
import { LANDING } from '../constants/routes';


const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: '4rem',
        height: '4rem',
        
    },
    logoText: {
        fontFamily: "Righteous"
    }
}));

function LogoButton() {
    const classes = useStyles();

    return (
        <Link to={LANDING} className={classes.root}>
            {/* Logo Image */}
            <TalkoLogo className={classes.logo} />

            {/* Spacing */}
            &nbsp;&nbsp;

            {/* Logo Text */}
            <Typography variant="h4" className={classes.logoText}>Talko.</Typography>
        </Link>
    );
}

export default LogoButton;