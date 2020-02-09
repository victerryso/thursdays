import React, { Component } from 'react';
import { CountUp } from 'countup.js';
import Typography from '@material-ui/core/Typography';

class CountUpNumber extends Component {
  id = Math.random().toString(36).substr(2, 10)

  componentDidMount() {
    let { value } = this.props

    new CountUp(this.id, value, {
      duration: 5
    }).start()
  }

  render() {
    const { value, style, variant } = this.props

    return (
      <Typography
        id={this.id}
        variant={variant}
        style={style}
      >
        {value}
      </Typography>
    );
  }
}

export default CountUpNumber;
