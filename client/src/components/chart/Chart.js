import React from 'react';
import propTypes from 'prop-types';
import {
  Line,
  LineChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Typography } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import moment from 'moment';

import Widget from '../widget/Widget';
import styles from './styles';

const Chart = ({ plot, theme }) => {
  const classes = styles();
  const getDateFromEpochTimestamp = (epoch) => {
    return moment(epoch).format('DD.MM');
  };

  return (
    <Widget dimensions={{ xs: 12, sm: 6, lg: 4 }}>
      <Typography gutterBottom className={classes.plotTitle}>
        {plot.title}
      </Typography>
      <ResponsiveContainer height={250} className={classes.chartContainer}>
        <LineChart data={plot.data} margin={{ left: -25, top: 10, right: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="epoch"
            tickFormatter={(epoch) => getDateFromEpochTimestamp(epoch)}
          />
          <YAxis unit="kg" domain={['dataMin - 5', 'auto']} />
          <Tooltip
            labelFormatter={(value) => getDateFromEpochTimestamp(value)}
          />
          <Legend />
          <Line
            unit="kg"
            strokeWidth={2}
            type="monotone"
            dataKey="oneRepMax"
            name="One-Rep-Max"
            stroke={theme.palette.secondary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </Widget>
  );
};

Chart.propTypes = {
  plot: propTypes.object,
  theme: propTypes.object,
};

export default withTheme(Chart);
