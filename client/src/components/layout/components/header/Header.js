import React from 'react';
import propTypes from 'prop-types';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { FitnessCenter, MenuSharp, MenuOpenSharp } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';

import styles from './styles';
import { userRoutes } from '../../../../routes';

const Header = ({ user, onBurgerClick, isDrawerOpen }) => {
  const classes = styles();
  const history = useHistory();
  const currentPath = history.location.pathname;
  const getCurrentRouteTitle = () => {
    return userRoutes.find((route) => currentPath === route.href).title;
  };

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
            <Typography>{getCurrentRouteTitle()}</Typography>
            <FitnessCenter fontSize="large" className={classes.icon} />
          </>
        )}
        {!user && (
          <>
            <FitnessCenter fontSize="large" className={classes.iconLeft} />
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
