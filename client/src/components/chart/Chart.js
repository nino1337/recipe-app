import React from 'react';
import propTypes from 'prop-types';
import {
  VictoryChart,
  VictoryLine,
  VictoryLegend,
  VictoryAxis,
  VictoryVoronoiContainer,
} from 'victory';
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
import styles, { axisStyles } from './styles';

const Chart = ({ plot, theme }) => {
  const classes = styles();
  // get the lowest yAxis value minus 5
  const getMinDomain = (data) => {
    if (!data) return 0;

    return (
      data.reduce((lowestValue, currentValue) => {
        return currentValue.oneRepMax <= lowestValue.oneRepMax
          ? currentValue
          : lowestValue;
      }).oneRepMax - 5
    );
  };

  // get highest yAxis value plus 5
  const getMaxDomain = (data) => {
    if (!data) return 0;

    return (
      data.reduce((lowestValue, currentValue) => {
        return currentValue.oneRepMax >= lowestValue.oneRepMax
          ? currentValue
          : lowestValue;
      }).oneRepMax + 5
    );
  };

  const getDateFromEpochTimestamp = (epoch) => {
    return moment(epoch).format('DD. MM');
  };

  return (
    <Widget dimensions={{ xs: 12, sm: 6, lg: 4 }}>
      <Typography gutterBottom className={classes.plotTitle}>
        {plot.title}
      </Typography>
      <ResponsiveContainer height={250}>
        <LineChart data={plot.data} margin={{ left: -15, top: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="epoch"
            tickFormatter={(epoch) => getDateFromEpochTimestamp(epoch)}
          />
          <YAxis unit="kg" domain={['dataMin - 5', 'auto']} />
          <Tooltip />
          <Legend />
          <Line
            strokeWidth={2}
            type="monotone"
            dataKey="oneRepMax"
            stroke={theme.palette.secondary.main}
          />
        </LineChart>
      </ResponsiveContainer>
      {/* <VictoryChart
        animate={{ duration: 2000 }}
        minDomain={{ y: getMinDomain(plot.data) }}
        maxDomain={{ y: getMaxDomain(plot.data) }}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => `one-rep-max: ${datum.oneRepMax} Kg`}
          />
        }
      >
        <VictoryAxis style={axisStyles} />
        <VictoryAxis style={axisStyles} dependentAxis />
        <VictoryLine
          style={{
            data: { stroke: theme.palette.secondary.main },
          }}
          data={plot.data}
          y="oneRepMax"
          x={(data) => getDateFromEpochTimestamp(data.epoch)}
        />
        <VictoryLegend
          gutter={20}
          data={[
            {
              name: 'One-Rep-Max',
              symbol: { fill: theme.palette.secondary.main, type: 'minus' },
            },
          ]}
        />
      </VictoryChart>
      */}
    </Widget>
  );
};

Chart.propTypes = {
  plot: propTypes.object,
  theme: propTypes.object,
};

export default withTheme(Chart);
