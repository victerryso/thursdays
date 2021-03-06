import React, { Component } from 'react';
import _ from 'underscore';
import moment from 'moment';
import Section from '../components/Section'
import CountUpNumber from '../components/CountUpNumber'
import Typography from '@material-ui/core/Typography';

const style = {
  section: {
    textAlign: 'center'
  },

  label: {
    textTransform: 'uppercase'
  }
}

class NightsCount extends Component {
  render() {
    const { items } = this.props

    const date = _.chain(items)
      .pluck('date')
      .map(date => moment(date, 'DD/MM/YY'))
      .sortBy(date => +date)
      .first()
      .value()

    const displayDate = moment(date).format('MMMM YYYY')

    return (
      <Section style={style.section}>
        <CountUpNumber
          value={items.length}
          variant='h3'
          style={{fontSize: '10rem'}}
        />

        <Typography variant='h4' style={style.label}>
          Nights since <strong>{displayDate}</strong>
        </Typography>
      </Section>
    )
  }
}

export default NightsCount;

