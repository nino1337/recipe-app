import React from 'react';
import propTypes from 'prop-types';
import {
  Drawer,
  MenuList,
  Typography,
  MenuItem,
  ListItemIcon,
} from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';

import styles from './styles';
import { userRoutes } from '../../../../routes';

const DrawerComponent = ({ isOpen, onLinkClick }) => {
  const classes = styles();
  const history = useHistory();
  const currentPath = history.location.pathname;

  return (
    <Drawer open={isOpen}>
      <div className={classes.drawer}>
        <MenuList>
          {userRoutes.map((route) => (
            <Link key={route.title} to={route.href} onClick={onLinkClick}>
              <MenuItem
                className={{ [classes.activeItem]: currentPath === route.href }}
              >
                <ListItemIcon className={classes.listIconWrapper}>
                  <route.icon className={classes.icon} />
                </ListItemIcon>
                <Typography className={classes.listItem}>
                  {route.title}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </div>
    </Drawer>
  );
};

DrawerComponent.propTypes = {
  user: propTypes.string,
  isOpen: propTypes.bool,
  onLinkClick: propTypes.func,
};

export default DrawerComponent;
