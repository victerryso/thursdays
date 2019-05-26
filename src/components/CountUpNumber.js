import React, { Component } from 'react';
import { CountUp } from 'countup.js';

class CountUpNumber extends Component {
  id = Math.random().toString(36).substr(2, 10)

  componentDidMount() {
    let { value } = this.props

    new CountUp(this.id, value, {
      duration: 5
    }).start()
  }

  render() {
    const { value, size } = this.props

    const style = {
      fontSize: size,
    }

    return (
      <div id={this.id} style={style}>{value}</div>
    );
  }
}

export default CountUpNumber;
