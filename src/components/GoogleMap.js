import React, { Component } from 'react'
import _ from 'underscore'
import styles from './SnazzyMap.json'

const google = window.google

const style = {
  width: '100%',
  height: '100vh',
}

class GoogleMap extends Component {
  popups = [];

  startDropping() {
    let items = this.props.items.filter(item => {
      return item.latitude && item.longitude
    })

    let index = 0
    let popups = []

    this.interval = setInterval(() => {
      let item = items[index]

      if (!item) {
        return this.stopDropping()
      }

      const marker = new google.maps.Marker({
        map: this.map,
        title: item.name,
        animation: google.maps.Animation.DROP,
        position: {
          lat: +item.latitude,
          lng: +item.longitude,
        }
      });

      const popup = new google.maps.InfoWindow({
        content: `
          <strong>${item.name}</strong><br/>
          ${item.address}, ${item.suburb}<br/>
          ${_.times(item.rating, () => '★').join('')}
        `
      });

      google.maps.event.addListener(marker, 'click', function() {
        popups.forEach(popup => popup.close())
        popup.open(this.map, marker);
      });

      popups.push(popup)

      index++
    }, 10000 / items.length)
  }

  stopDropping() {
    clearInterval(this.interval)
  }

  componentDidMount(a,b) {
    const center = {
      lat: -33.8688,
      lng: 151.2093,
    };

    const map = document.getElementById('map')

    this.map = new google.maps.Map(map, {
      center,
      styles,
      zoom: 13,
    });


    window.onscroll = () => {
      if (window.scrollY > map.getBoundingClientRect().top) {
        this.startDropping()

        window.onscroll = undefined
      }
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div id="map" style={style} />
    )
  }
}

export default GoogleMap