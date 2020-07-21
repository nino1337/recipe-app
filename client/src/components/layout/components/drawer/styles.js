import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  drawer: {
    paddingTop: '80px',
    position: 'relative',
    width: '260px',
  },
  listItem: {
    fontSize: '16px',
  },
  listIconWrapper: {
    color: theme.palette.text.primary,
    opacity: 0.6,
    minWidth: '40px',
  },
  icon: {
    fontSize: '1.8rem',
  },
  activeItem: {
    color: theme.palette.secondary.main,
    '& div': {
      color: theme.palette.secondary.main,
    },
  },
}));
