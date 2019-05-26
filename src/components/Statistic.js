import React, { Component } from 'react';
import CountUpNumber from './CountUpNumber';

class Statistic extends Component {
  render() {
    const { label, value, size } = this.props

    const styles = {
      container: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
      },

      label: {
        fontSize: size / 3,
        textTransform: 'uppercase',
      },
    }

    return (
      <div style={styles.container}>
        <CountUpNumber value={value} size={size} />
        <div style={styles.label}>{label}</div>
      </div>
    );
  }
}

export default Statistic;
