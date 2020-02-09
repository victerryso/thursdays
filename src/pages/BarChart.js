import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Section from '../components/Section'
import BarData from '../components/BarData'
import colors from '../lib/colors'
import _ from 'underscore';
import moment from 'moment';

const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
  },

  label: {
    marginRight: '2rem',
  },

  paperContainer: {
    width: '100%',
  },

  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlign: 'right',
    margin: '0.25rem 0',
    padding: '0.5rem',
    width: '100%',
    transition: 'width 3s ease-in-out',
    overflowX: 'hidden',
  },

  value: {
    marginRight: '1rem',
    color: '#fff'
  }
}

class BarChart extends Component {
  state = {
    rendered: false
  }

  componentDidMount() {
    this.setState({
      rendered: true
    })
  }

  getColor(index) {
    let values = Object.values(colors)

    return values[index % values.length]
  }

  render() {
    const { items } = this.props
    const { rendered } = this.state

    const count = _.chain(items)
      .pluck('date')
      .map(date => moment(date, 'DD/MM/YY').year())
      .sortBy()
      .countBy()
      .value()

    const years = _.chain(count)
      .keys()
      .uniq()
      .sortBy()
      .map((year, index) => ({
        year,
        value: count[year],
        width: rendered ? `${count[year] / 50 * 100}%` : 0,
      }))
      .value()

    return (
      <Section>

        {years.map(({ year, value, width }, index) => (
          <div key={index} style={styles.row}>

            <div style={styles.label}>
              <Typography variant='h5'>{year}</Typography>
            </div>

            <BarData
              color={this.getColor(index)}
              value={value}
              width={width}
            />

          </div>
        ))}

      </Section>
    )
  }
}

export default BarChart;





