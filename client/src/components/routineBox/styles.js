import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    position: 'relative',
  },
  exercise: {
    fontStyle: 'italic',
    lineHeight: '2',
  },
  edit: {
    cursor: 'pointer',
    position: 'absolute',
    right: 24,
    top: 28,
    width: 30,
    height: 30,
  },
});
