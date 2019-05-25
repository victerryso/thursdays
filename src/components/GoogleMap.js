import React, { Component } from 'react'
import _ from 'underscore'

const google = window.google

const style = {
  width: '100%',
  height: '100%',
}

class GoogleMap extends Component {
  popups = [];

  componentDidMount(a,b) {
    const center = {
      lat: -33.8688,
      lng: 151.2093,
    };

    const map = new google.maps.Map(document.getElementById('map'), {
      center,
      zoom: 13
    });

    let restaurants = this.props.restaurants.filter(restaurant => {
      return restaurant.latitude && restaurant.longitude
    })

    let index = 0
    let popups = []

    this.interval = setInterval(() => {
      let restaurant = restaurants[index]

      if (!restaurant) {
        return clearInterval(this.interval)
      }

      const marker = new google.maps.Marker({
        map,
        title: restaurant.name,
        animation: google.maps.Animation.DROP,
        position: {
          lat: +restaurant.latitude,
          lng: +restaurant.longitude,
        }
      });

      const popup = new google.maps.InfoWindow({
        content: `
          <strong>${restaurant.name}</strong><br/>
          ${restaurant.address}, ${restaurant.suburb}<br/>
          ${_.times(restaurant.rating, () => '★').join('')}
        `
      });

      google.maps.event.addListener(marker, 'click', function() {
        popups.forEach(popup => popup.close())
        popup.open(map, marker);
      });

      popups.push(popup)

      index++
    }, 10000 / restaurants.length)

  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div id="map" style={style}/>
    )
  }
}

export default GoogleMap