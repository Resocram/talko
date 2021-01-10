import React from 'react';
import { Link } from 'react-router-dom';
import makeStyles from '@material-ui/styles/makeStyles';
import { ReactComponent as TalkoLogo } from '../assets/talko-logo.svg';

function LogoButton(props) {
    const useMainStyles = makeStyles(() => ({
        root: {
            width: '70%',
            paddingLeft: '16%',
            paddingRight: '16%',
            paddingTop: '24px'
        }
    }));

    const classes = useMainStyles();

    return (
        <Link to="/">
            <TalkoLogo className={classes.root} />
            paddingTop: '24px'
        }
    }));

    const useBetaStyles = makeStyles(() => ({
        root: {
            width: '70%',
            paddingLeft: '20%'
        }
    }));

    const classesMain = useMainStyles();
    const classesBeta = useBetaStyles();

    return (
        <Link to={LANDING}>
            {
                props.useMain ? 
                <FlokaLogo className={classesMain.root} /> :
                <FlokaBetaLogo className={classesBeta.root} />
            }
        </Link>
    );
}

export default LogoButton;