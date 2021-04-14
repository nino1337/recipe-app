import React from 'react';
import { FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';
import propTypes from 'prop-types';

const ExerciseSetsSelect = ({ onSetsSelect, sets }) => {
  return (
    <FormControl>
      <InputLabel id="exercise-sets-select-label-id">Sätze</InputLabel>
      <Select
        labelId="exercise-sets-select-label-id"
        id="exercise-sets-select"
        value={sets}
        onChange={onSetsSelect}
        defaultValue={3}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={11}>11</MenuItem>
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={13}>13</MenuItem>
        <MenuItem value={14}>14</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={16}>16</MenuItem>
        <MenuItem value={17}>17</MenuItem>
        <MenuItem value={18}>18</MenuItem>
        <MenuItem value={19}>19</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
    </FormControl>
  );
};

ExerciseSetsSelect.propTypes = {
  onSetsSelect: propTypes.func,
  sets: propTypes.number,
};

export default ExerciseSetsSelect;
