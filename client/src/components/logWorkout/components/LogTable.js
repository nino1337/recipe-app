import React from 'react';
import propTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  IconButton,
  Box,
  Grid,
} from '@material-ui/core';
import { Add, Delete } from '@material-ui/icons';

import styles from './styles';

const LogTable = ({ sets, onInputChange, onDeleteSet, onAddSet }) => {
  const classes = styles();

  return (
    <Box mb={3}>
      <Table size="small" className={classes.logTable}>
        <TableHead>
          <TableRow>
            <TableCell>Satz</TableCell>
            <TableCell>Gewicht in Kg</TableCell>
            <TableCell>Wdh.</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sets.map((set, index) => (
            <TableRow key={`set-info-${index}`}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <TextField
                  className={classes.textField}
                  variant="filled"
                  onChange={(event) =>
                    onInputChange(event.target.value, index, 'weight')
                  }
                  type="number"
                  value={set.weight}
                />
              </TableCell>
              <TableCell>
                <TextField
                  className={classes.textField}
                  variant="filled"
                  onChange={(event) =>
                    onInputChange(event.target.value, index, 'reps')
                  }
                  type="number"
                  value={set.reps}
                />
              </TableCell>
              <TableCell>
                <Tooltip title="Satz löschen">
                  <IconButton
                    className={classes.delete}
                    size="small"
                    onClick={() => onDeleteSet(index)}
                  >
                    <Delete fontSize="small" color="secondary" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Grid item container justify="center">
        <Tooltip title="Satz hinzufügen">
          <IconButton size="small" onClick={onAddSet}>
            <Add color="secondary" />
          </IconButton>
        </Tooltip>
      </Grid>
    </Box>
  );
};

LogTable.propTypes = {
  sets: propTypes.array,
  onInputChange: propTypes.func,
  onDeleteSet: propTypes.func,
  onAddSet: propTypes.func,
};

export default LogTable;
