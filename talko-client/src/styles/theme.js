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
        fontFamily: 'Raleway'
    }
});

export default responsiveFontSizes(theme);