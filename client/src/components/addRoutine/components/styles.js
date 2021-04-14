import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {},
  popover: {
    width: 300,
  },
  exerciseImage: {
    width: 50,
  },
  exerciseList: {
    width: 300,
    maxHeight: 300,
    overflow: 'auto',
    margin: '0 auto 0.6rem',
  },
  exerciseListItem: {
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  exerciseListItemActive: {
    color: theme.palette.secondary.main,
  },
  exerciseCheck: {
    transform: 'scale(0)',
    transition: 'transform 0.2s',
  },
  exerciseCheckActive: {
    transform: 'scale(1)',
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.2rem',
  },
}));
