import React from 'react';
import { Link } from 'react-router-dom';
import makeStyles from '@material-ui/styles/makeStyles';
import { ReactComponent as TalkoLogo } from '../assets/talko-logo.svg';

function LogoButton() {
    const useStyles = makeStyles({
        root: {
            width: '70%',
            paddingLeft: '16%',
            paddingRight: '16%',
            paddingTop: '24px'
        }
    });

    const classes = useStyles();

    return (
        // <Link to="/">
            <TalkoLogo className={classes.root} />
        // </Link>
    );
}

export default LogoButton;