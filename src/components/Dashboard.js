import React, { Component } from 'react';
import _ from 'underscore';
import moment from 'moment';

import DashboardStatistic from './DashboardStatistic';
import DashboardChart from './DashboardChart';
import Container from '@material-ui/core/Container';

const getCuisineStatistics = function (restaurants) {
  return _.chain(restaurants)
    .pluck('cuisine')
    .countBy()
    .map((value, label) => ({ value, label }))
    .sortBy('value')
    .reverse()
    .first(3)
    .value()
}

const getGeneralStatistics = function (restaurants) {
  const dates = _.map(restaurants, restaurant => {
    return +moment(restaurant.date, 'DD/MM/YY')
  })

  const first = _.min(dates)
  const last  = _.max(dates)

  const formatDate = date => _.isFinite(date) ? moment(date).format(`MMM 'YY`) : '-'

  return [{
    label: 'Since',
    value: formatDate(first)
  }, {
    label: 'Nights',
    value: restaurants.length || '-'
  }, {
    label: 'Till',
    value: formatDate(last)
  }]
}

class Dashboard extends Component {
  render() {
    const addRandomId = function (array) {
      return array.map(element => ({
        ...element,
        id: Math.random().toString(36).substr(2, 10)
      }))
    }

    const generalStatistics = getGeneralStatistics(this.props.restaurants)
    const cuisineStatistics = getCuisineStatistics(this.props.restaurants)

    return (
      <Container>
        <DashboardStatistic statistics={ addRandomId(generalStatistics) } />
        <DashboardChart { ...this.props } name='Yearly' />

        <DashboardStatistic statistics={ addRandomId(cuisineStatistics) } />
        <DashboardChart { ...this.props } name='Cuisine'/>
      </Container>
    )
  }
}

export default Dashboard;
