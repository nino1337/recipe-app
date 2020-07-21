import React from 'react';
import propTypes from 'prop-types';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import {
  FitnessCenter,
  Person,
  MenuSharp,
  MenuOpenSharp,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

import styles from './styles';

const Header = ({ user, onBurgerClick, isDrawerOpen }) => {
  const classes = styles();

  const getMenuItem = () => {
    if (isDrawerOpen) {
      return (
        <MenuOpenSharp
          className={classes.menuBurger}
          onClick={onBurgerClick}
          fontSize="large"
        />
      );
    }
    return (
      <MenuSharp
        className={classes.menuBurger}
        onClick={onBurgerClick}
        fontSize="large"
      />
    );
  };

  return (
    <AppBar className={classes.root} position="relative">
      <Toolbar>
        {user && (
          <>
            {getMenuItem()}
            <FitnessCenter fontSize="large" className={classes.icon} />
          </>
        )}
        {!user && (
          <>
            <Button color="inherit">
              <Link to="/login">Login</Link>
            </Button>
            <Button color="inherit">
              <Link to="/register">Register</Link>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  user: propTypes.string,
  onBurgerClick: propTypes.func,
  isDrawerOpen: propTypes.bool,
};

export default Header;
