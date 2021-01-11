import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Import app color scheme
import * as COLORS from '../constants/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: COLORS.MAIN_BLUE,
            contrastText: COLORS.MAIN_YELLOW,
        },
        secondary: {
            main: COLORS.MAIN_YELLOW
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
                color: COLORS.MAIN_YELLOW
            }
        }
    }
});

export default responsiveFontSizes(theme);
 