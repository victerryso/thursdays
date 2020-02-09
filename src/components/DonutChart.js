import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class DonutChart extends Component {
  render() {
    const { size, value } = this.props

    const styles = {
      container: {
        position: 'relative',
        width: size,
        height: size,
      },

      value: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        fontSize: size * 0.25,
        textAlign: 'center',
        lineHeight: `${size}px`,
        fontWeight: 'bold'
      }
    }

    return (
      <div style={styles.container}>
        <CircularProgress
          variant="static"
          size={size}
          value={value}
        />
        <div style={styles.value}>{value}%</div>
      </div>
    );
  }
}

export default DonutChart;
