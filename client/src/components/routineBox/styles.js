import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    position: 'relative',
  },
  exercise: {
    fontStyle: 'italic',
    lineHeight: '2',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
    '& img': {
      maxWidth: 50,
      marginRight: 8,
    },
  },
  delete: {
    cursor: 'pointer',
    position: 'absolute',
    right: 24,
    top: 28,
    width: 30,
    height: 30,
  },
});
