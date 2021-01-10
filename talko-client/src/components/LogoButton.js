import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import { ReactComponent as TalkoLogo } from '../assets/talko-logo.svg';

const useStyles = makeStyles({
    root: {
        width: '8rem',
        height: '8rem',
        marginTop: -30
    }
});

function LogoButton() {
    const classes = useStyles();

    return (
        <TalkoLogo className={classes.root} />
    );
}

export default LogoButton;