import React, { Component } from 'react';
import Section from '../components/Section'
import Zoom from '@material-ui/core/Zoom';

class ImageGrid extends Component {
  state = {
    checked: 0,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        checked: this.state.checked + 1
      })
    }, 5)
  }

  render() {
    let items = this.props.items.filter(item => item.zomatothumbnail)
      .filter((item, index, items) => index < ~~(items.length / 24) * 24)

    const styles = {
      grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(48px, 1fr))',
        gridColumnGap: 1,
        gridRowGap: 1,
      },

      item: {
        paddingTop: '100%',
        position: 'relative',
        height: 0,
      },

      image: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
      }
    }

    return (
      <Section>

        <div style={styles.grid}>
          {items.map((item, index) => (
            <Zoom in={this.state.checked > index} key={index}>
              <div style={styles.item}>
                <img
                  src={item.zomatoimage}
                  alt={item.name}
                  style={styles.image}
                />
              </div>
            </Zoom>
          ))}
        </div>

      </Section>
    );
  }
}

export default ImageGrid;
