import React, { Component } from 'react';
import Statistic from './Statistic'

class DashboardStatistics extends Component {
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
          statistics.map(({ id, label, value }, index) => (
            <div key={ index } style={ styles.column }>
              <Statistic
                id={id}
                label={label}
                value={value}
              />
            </div>
          ))
        }
      </div>
    );
  }

}

export default DashboardStatistics;
