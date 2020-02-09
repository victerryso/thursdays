import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: `linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)`,
    transition: `opacity 1000ms ease-in-out`,
  },

  complete: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: `linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)`,
    transition: `opacity 1000ms ease-in-out`,
    opacity: 0,
    zIndex: -1
  },
}

class Loading extends Component {
  render() {
    let style = this.props.complete ? styles.complete : styles.loading

    return (
      <div style={style}>
        <CircularProgress
          size={160}
          style={{color: 'white'}}
        />
      </div>
    );
  }
}

export default Loading;

// background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);