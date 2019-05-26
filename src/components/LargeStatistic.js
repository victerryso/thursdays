import React, { Component } from 'react';
import { CountUp } from 'countup.js';

class LargeStatistic extends Component {
  id = Math.random().toString(36).substr(2, 10)

  componentDidMount() {
    let { value } = this.props

    new CountUp(this.id, value, {
      duration: 5
    }).start()
  }

  render() {
    const { label, value, size } = this.props

    const styles = {
      label: {
        textTransform: 'uppercase'
      },

      value: {
        fontSize: size || '3rem',
        textTransform: 'uppercase'
      }
    }

    return (
      <div>
        <span id={this.id} style={styles.value}>{value}</span>
        <span style={styles.label}>{label}</span>
      </div>
    );
  }
}

export default LargeStatistic;
