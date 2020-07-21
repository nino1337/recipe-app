import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    backgroundColor: '#ffffff',
    borderRadius: '9px',
    boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.44)',
    padding: '16px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '300px',
  },
  formControlGrid: {
    marginBottom: '32px',
  },
  buttonGrid: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputs: {
    width: '100%',
  },
});
