import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 'calc(50% - 50px)',
    left: 'calc(50% - 50px)',
    animation: `$rotate 3s infinite ${theme.transitions.easing.easeInOut}`,
    width: '100px',
    height: '100px',
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));
