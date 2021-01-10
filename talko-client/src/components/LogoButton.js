import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import { ReactComponent as TalkoLogo } from '../assets/talko-logo.svg';

function LogoButton() {
    const useStyles = makeStyles({
        root: {
            width: 100,
            height: 100,
            marginTop: -10,
            marginBottom: -30
        }
    });

    const classes = useStyles();

    return (
        <TalkoLogo className={classes.root} />
    );
}

export default LogoButton;