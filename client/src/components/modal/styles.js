import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    transform: 'translateY(32px)',
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: 400,
    maxHeight: '70vh',
    padding: '1.6rem',
    overflow: 'auto',
  },
});
