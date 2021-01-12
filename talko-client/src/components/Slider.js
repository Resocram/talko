// Style components import
import { withStyles } from '@material-ui/styles';
import Slider from '@material-ui/core/Slider';


const CustomSlider = withStyles(theme => ({
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
        marginLeft: '-15px',
        backgroundColor: theme.palette.secondary.main,
        color: 'rgba(242, 196, 7, 0.20)',
        marginRight: '100px',
        borderLeft: `solid 10px ${theme.palette.secondary.main}`,
        borderRight: `solid 10px ${theme.palette.secondary.main}`
    }
}))(Slider);

export default CustomSlider;