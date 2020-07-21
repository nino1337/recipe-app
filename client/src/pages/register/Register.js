import React, { useState } from 'react';
import {
  Grid,
  Button,
  FormControl,
  TextField,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { cloneDeep as _cloneDeep } from 'lodash';
import * as yup from 'yup';

import userService from '../../service/userService';
import styles from './styles';

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(30).required(),
});

const Register = () => {
  const classes = styles();
  const [formState, setFormState] = useState({
    submitted: false,
    error: false,
    message: '',
  });
  const [inputs, setInputs] = useState([
    {
      label: 'Username',
      name: 'username',
      type: 'text',
      value: '',
      error: false,
    },
    {
      label: 'E-Mail-Adresse',
      name: 'email',
      type: 'email',
      value: '',
      error: false,
    },
    {
      label: 'Passwort',
      name: 'password',
      type: 'password',
      value: '',
      error: false,
      helperText: 'Passwort muss mindestens 8 Zeichen lang sein.',
    },
  ]);

  const resetFormErrors = () => {
    const inputsCopy = _cloneDeep(inputs);
    const mappedInputs = inputsCopy.map((input) => ({
      ...input,
      error: false,
    }));
    setInputs(mappedInputs);
  };

  const handleInputChange = (event, inputName) => {
    const inputsCopy = _cloneDeep(inputs);
    const currentInput = inputsCopy.find((input) => input.name === inputName);
    currentInput.value = event.target.value;
    setInputs(inputsCopy);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = getFormData();

    schema
      .validate(formData)
      .then(async () => {
        // set errors of inputs to false
        resetFormErrors();

        const { errorMessage } = await userService.register(formData);

        if (errorMessage) {
          setFormState({
            submitted: true,
            error: true,
            message: errorMessage,
          });
        } else {
          setFormState({
            error: false,
            submitted: true,
            message:
              'Registrierung erfolgreich. Du kannst dich jetzt mit deinen Daten anmelden.',
          });
        }
      })
      .catch((err) => {
        const inputsCopy = _cloneDeep(inputs);
        const currentInput = inputsCopy.find(
          (input) => input.name === err.path,
        );
        currentInput.error = true;
        setInputs(inputsCopy);
      });
  };

  const getFormData = () => {
    return inputs.reduce(
      (data, currentInput) => ({
        ...data,
        [currentInput.name]: currentInput.value,
      }),
      {},
    );
  };

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <Typography gutterBottom variant="h4" align="center">
        Registrierung
      </Typography>
      {formState.submitted && (
        <Alert severity={formState.error ? 'error' : 'success'}>
          {formState.message}
        </Alert>
      )}
      <Grid container>
        <Grid className={classes.formControlGrid} item xs={12}>
          {inputs.map((input) => (
            <FormControl
              margin="dense"
              key={input.name}
              className={classes.inputs}
            >
              <TextField
                label={input.label}
                onChange={(event) => handleInputChange(event, input.name)}
                id={input.name}
                error={input.error}
                helperText={input.error && input.helperText}
                type={input.type}
                className={classes.inputs}
                value={input.value}
              />
            </FormControl>
          ))}
        </Grid>
        <Grid className={classes.buttonGrid} item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Absenden
          </Button>
          <Link to="/login">
            <Button variant="outlined" color="primary">
              Anmelden
            </Button>
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default Register;
