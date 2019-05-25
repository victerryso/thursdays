import React, { Component } from 'react';
import _ from 'underscore';
import { CountUp } from 'countup.js';

class DashboardStatistics extends Component {
  componentDidUpdate() {
    this.props.statistics.filter(statistic => _.isNumber(statistic.value))
      .map(statistic => new CountUp(statistic.id, 0, statistic.value, 0, 5).start())
  }

  render() {
    const { statistics } = this.props
    const width = ~~(100 / statistics.length) + '%'

    const styles = {
      row: {
        display: 'flex',
        padding: '2em 0'
      },

      column: {
        width,
        textAlign: 'center'
      },

      label: {
        textTransform: 'uppercase'
      },

      value: {
        fontSize: '3em',
        textTransform: 'uppercase'
      }
    }

    return (
      <div style={ styles.row }>
        {
          statistics.map((statistic, index) => {
            const { id, label, value } = statistic

            return (
              <div key={ index } style={ styles.column }>
                <span id={ id } style={ styles.value }>{ value }</span>
                <br/>
                <span style={ styles.label }>{ label }</span>
              </div>
            )
          })
        }
      </div>
    );
  }

}

export default DashboardStatistics;
