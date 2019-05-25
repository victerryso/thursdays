import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import _ from 'lodash';
import moment from 'moment';

class DashboardChart extends Component {
  render() {
    const format = 'DD/MM/YY';
    const { restaurants } = this.props

    const charts = [{
      name: 'Yearly',
      config() {
        const years = _.map(restaurants, restaurant => {
          return moment(restaurant.date, format).year()
        })

        const count = _.countBy(years)
        const min = _.min(years)
        const max = _.max(years)
        const categories = _.range(min, max + 1)

        const data = _.map(categories, year => count[year] || 0)

        return {
          chart: { type: 'column' },
          title: { text: null },
          xAxis: { categories: categories },
          yAxis: { title: { text: 'No. Nights' } },
          series: [{ name: 'Year', data: data, colorByPoint: true }]
        }
      }
    }, {
      name: 'Cuisine',
      config() {
        const count = _.chain(restaurants)
          .countBy('cuisine')
          .map((count, cuisine) => ({ name: cuisine, count }))
          .sortBy('count')
          .reverse()

        const limit = 9

        const others = count.drop(limit)
          .reduce((memo, cuisine) => memo + cuisine.count, 0)
          .value()

        const data = count.take(limit)
          .map(cuisine => ({ name: cuisine.name, y: cuisine.count }))
          .concat({ name: 'Other', y: others })
          .value()

        return {
          chart: { type: 'pie' },
          title: { text: null },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              showInLegend: true,
              dataLabels: { enabled: false }
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },
          series: [{ name: 'Cuisines', data: data }]
        }
      }
    }]

    const chart = _.find(charts, {name: this.props.name})

    return <ReactHighcharts config={chart.config()}></ReactHighcharts>
  }
}

export default DashboardChart;
