import React, { useState } from 'react';
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
import { Add } from '@material-ui/icons';

import styles from './styles';

const LogTable = ({ sets, onInputChange }) => {
  const [setArray, setSetArray] = useState(Array.from(Array(sets).keys()));
  const classes = styles();

  const handleAddSet = () => {
    setSetArray((prevSetArray) => [...prevSetArray, prevSetArray.length]);
  };

  return (
    <Box mb={3}>
      <Table size="small" className={classes.logTable}>
        <TableHead>
          <TableRow>
            <TableCell>Satz</TableCell>
            <TableCell>Gewicht in Kg</TableCell>
            <TableCell>Wdh.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {setArray.map((set) => (
            <TableRow key={`set-info-${set}`}>
              <TableCell>{set + 1}</TableCell>
              <TableCell>
                <TextField
                  className={classes.textField}
                  variant="filled"
                  onChange={(event) =>
                    onInputChange(event.target.value, 'weight')
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  className={classes.textField}
                  variant="filled"
                  onChange={(event) =>
                    onInputChange(event.target.value, 'reps')
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Grid item container justify="center">
        <Tooltip title="Satz hinzufügen">
          <IconButton color="secondary" size="small" onClick={handleAddSet}>
            <Add />
          </IconButton>
        </Tooltip>
      </Grid>
    </Box>
  );
};

LogTable.propTypes = {
  sets: propTypes.number,
  onInputChange: propTypes.func,
};

export default LogTable;
