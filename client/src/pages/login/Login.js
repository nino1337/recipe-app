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

import styles from './styles';
import userService from '../../service/userService';

const Login = () => {
  const classes = styles();
  const [formState, setFormState] = useState({
    error: false,
    message: '',
  });
  const [inputs, setInputs] = useState([
    {
      label: 'E-Mail-Adresse',
      name: 'email',
      type: 'email',
      value: '',
    },
    {
      label: 'Passwort',
      name: 'password',
      type: 'password',
      value: '',
    },
  ]);

  const handleInputChange = (event, inputName) => {
    const inputsCopy = _cloneDeep(inputs);
    const currentInput = inputsCopy.find((input) => input.name === inputName);
    currentInput.value = event.target.value;
    setInputs(inputsCopy);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = getFormData();

    const { errorMessage, response } = await userService.login(formData);
    if (errorMessage) {
      setFormState({
        submitted: true,
        error: true,
        message: errorMessage,
      });
    } else if (response.status === 200) {
      window.localStorage.removeItem('access_token');
      window.localStorage.setItem('access_token', response.data);
      // create and dispatch the login event
      const customEvent = new CustomEvent('userloggedin');
      window.dispatchEvent(customEvent);
    }
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
        Login
      </Typography>
      {formState.error && <Alert severity="error">{formState.message}</Alert>}
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
                type={input.type}
                className={classes.inputs}
                value={input.value}
              />
            </FormControl>
          ))}
        </Grid>
        <Grid className={classes.buttonGrid} item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Anmelden
          </Button>
          <Link to="/register">
            <Button variant="outlined" color="primary">
              Registrieren
            </Button>
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
