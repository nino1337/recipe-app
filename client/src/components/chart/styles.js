import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  plotTitle: {
    fontWeight: 'bold',
  },
});

export const axisStyles = {
  grid: {
    stroke: '#eaeaea',
    strokeWidth: 0.5,
    strokeDasharray: '10, 5',
  },
  axis: {
    fill: '#333333',
    stroke: '#333333',
    strokeWidth: 2,
  },
};
