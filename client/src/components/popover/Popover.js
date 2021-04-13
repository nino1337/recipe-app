import React from 'react';
import { Popover } from '@material-ui/core';
import propTypes from 'prop-types';

const PopoverComponent = ({ children, anchorEl, isOpen, onClose }) => {
  return (
    <Popover
      anchorEl={anchorEl}
      open={isOpen}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      onClose={onClose}
    >
      {children}
    </Popover>
  );
};

PopoverComponent.propTypes = {
  children: propTypes.any,
  anchorEl: propTypes.any,
  isOpen: propTypes.bool,
  onClose: propTypes.func,
};

export default PopoverComponent;
