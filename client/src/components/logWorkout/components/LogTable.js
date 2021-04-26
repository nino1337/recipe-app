import React from 'react';
import propTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const LogTable = ({ sets }) => {
  const setArray = Array.from(Array(sets).keys());

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Satz</TableCell>
          <TableCell>Gewicht</TableCell>
          <TableCell>Wdh.</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {setArray.map((set) => (
          <TableRow key={`set-info-${set}`}>
            <TableCell>{set + 1}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

LogTable.propTypes = {
  sets: propTypes.number,
};

export default LogTable;
