import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: 600,
    maxHeight: '80vh',
    padding: '1.6rem',
    overflow: 'auto',
  },
});
