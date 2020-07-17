import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Content from './components/content/Content';
import { themeLight, themeDark } from '../../styles/themes';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(themeDark);

  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Content>{children}</Content>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: propTypes.object,
};

export default Layout;
