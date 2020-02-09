import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
  barContainer: {
    width: '100%',
  },

  bar: {
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

class BarData extends Component {
  createGradient(color) {
    return `linear-gradient(-225deg,
      ${color[50]} 0%,
      ${color[100]} 20%,
      ${color[200]} 40%,
      ${color[300]} 60%,
      ${color[400]} 80%,
      ${color[500]} 100%
    )`
  }

  render() {
    const { value, width, color } = this.props
    const background = this.createGradient(color)

    return (
      <div style={styles.barContainer}>
        <div style={{...styles.bar, background, width}}>
          <Typography variant='h6' style={styles.value}>{value}</Typography>
        </div>
      </div>
    )
  }
}

export default BarData;