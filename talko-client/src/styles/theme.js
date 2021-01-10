import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#F2C407',
            main: '#1A2930',
            dark: '#F2C407',
            contrastText: '#F2C407'
        },
        secondary: {
            light: '#F2C407',
            main: '#F2C407'
        }
    },
    typography: {
        fontFamily: 'Montserrat'
    },
    overrides: {
        MuiSlider: {
            rail: {
                height: '1rem',
                borderRadius: '10px'
            },
            track: {
                height: '1rem',
                borderRadius: '10px'
            },
            thumb: {
                width: '2rem',
                height: '2rem',
                marginTop: '-10px',
                marginLeft: '-15px'
            }
        },
        MuiInputBase: {
            input: {
                color:'#F2C407',
            }
        }
    }
});

export default responsiveFontSizes(theme);
 