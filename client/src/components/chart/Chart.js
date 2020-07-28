import React from 'react';
import propTypes from 'prop-types';
import {
  VictoryChart,
  VictoryLine,
  VictoryLegend,
  VictoryAxis,
  VictoryLabel,
} from 'victory';
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
      <Typography className={classes.plotTitle}>{plot.title}</Typography>
      <VictoryChart
        animate={{ duration: 2000 }}
        minDomain={{ y: getMinDomain(plot.data) }}
        maxDomain={{ y: getMaxDomain(plot.data) }}
        scale={{ x: 'time' }}
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
          labels={({ datum }) => `${Math.round(datum.oneRepMax)}`}
          labelComponent={<VictoryLabel renderInPortal dx={10} dy={-15} />}
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
    </Widget>
  );
};

Chart.propTypes = {
  plot: propTypes.object,
  theme: propTypes.object,
};

export default withTheme(Chart);
