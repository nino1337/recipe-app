import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/de';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from './styles/theme';
// normalize browser styles
import './styles/normalize.css';

moment.locale('de');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
