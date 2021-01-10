import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import { ReactComponent as TalkoLogo } from '../assets/talko-logo.svg';

function LogoButton() {
    const useStyles = makeStyles({
        root: {
        }
    });

    const classes = useStyles();

    return (
        <TalkoLogo className={classes.root} />
    );
}

export default LogoButton;