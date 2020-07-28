import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.tooltip + 1,
  },
  icon: {
    marginLeft: 'auto',
  },
  iconLeft: {
    marginRight: 'auto',
  },
  userWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: '14px',
  },
  menuBurger: {
    cursor: 'pointer',
    marginRight: '16px',
  },
}));
