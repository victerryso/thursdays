import React, { Component } from 'react';
import _ from 'underscore';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Section from '../components/Section'
import DonutChart from '../components/DonutChart'

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    textAlign: 'center'
  }
}

class DonutCharts extends Component {
  render() {
    const charts = _.chain(this.props.items)
      .countBy('cuisine')
      .map((count, label) => ({
        count,
        label,
        value: ~~(count / this.props.items.length * 100)
      }))
      .sortBy('count')
      .last(4)
      .reverse()
      .value()



    return (
      <Section>
        <Grid container spacing={3}>
          {charts.map(({ label, value }, index) => (
            <Grid item xs key={index} style={styles.item}>
              <div>
                <DonutChart size={192} value={value}/>
                <Typography variant='h5' style={styles.label}>
                  {label}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Section>
    );
  }
}

export default DonutCharts;
