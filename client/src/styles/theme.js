import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#f7ac53',
    },
  },
  typography: {
    h1: {
      fontWeight: 'bold',
      fontSize: '3.2rem',
    },
    h3: {
      fontSize: '2.4rem',
    },
    h4: {
      fontSize: '1.6rem',
    },
    h5: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
    },
  },
  overrides: {},
});
