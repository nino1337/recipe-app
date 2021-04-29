import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#f7ac53',
    },
    lightGrey: '#ededed',
  },
  typography: {
    h1: {
      fontWeight: 'bold',
      fontSize: '3.4rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.2rem',
    },
    h5: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
    },
  },
  overrides: {},
});
