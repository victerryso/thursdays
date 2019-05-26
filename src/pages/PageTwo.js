import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Section from '../components/Section'
import colors from './colors'
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

class PageTwo extends Component {
  state = {
    rendered: false
  }

  createGradient(index) {
    let color = _.values(colors)[index]

    return `linear-gradient(-225deg,
      ${color[50]} 0%,
      ${color[100]} 20%,
      ${color[200]} 40%,
      ${color[300]} 60%,
      ${color[400]} 80%,
      ${color[500]} 100%
    )`
  }

  componentDidMount() {
    this.setState({
      rendered: true
    })
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
        background: this.createGradient(index),
      }))
      .value()

    return (
      <Section>

        {years.map(({ year, value, width, background }, index) => (
        <div key={index} style={styles.row}>

          <div style={styles.label}>
            <Typography variant='h5'>{year}</Typography>
          </div>

          <div style={styles.paperContainer}>
            <div style={{...styles.paper, background, width: width}}>
              <Typography variant='h6' style={styles.value}>{value}</Typography>
            </div>
          </div>

        </div>
        ))}

      </Section>
    )
  }
}

export default PageTwo;





