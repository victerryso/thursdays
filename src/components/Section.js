import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

class Section extends Component {
  render() {
    const style = {
      ...this.props.style,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 0',
    }

    return (
      <div style={style}>
        <Container maxWidth={this.props.size}>
          {this.props.children}
        </Container>
      </div>
    )
  }
}

export default Section;
