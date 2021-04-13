import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Edit, Delete, MoreVert } from '@material-ui/icons';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip,
} from '@material-ui/core';
import Popover from '../../popover/Popover';

const EditRoutine = ({ classes }) => {
  const [anchorEL, setAnchorEl] = useState(false);
  const handleEditClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isOpen = Boolean(anchorEL);

  return (
    <>
      <Tooltip title="Routine bearbeiten">
        <MoreVert
          className={classes.edit}
          onClick={handleEditClick}
          color="secondary"
        />
      </Tooltip>
      <Popover anchorEl={anchorEL} isOpen={isOpen} onClose={handleClose}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Edit />
            </ListItemIcon>
            <ListItemText secondary="Bearbeiten" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            <ListItemText secondary="Löschen" />
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

EditRoutine.propTypes = {
  classes: propTypes.object,
};

export default EditRoutine;
