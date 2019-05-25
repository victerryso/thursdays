import React, { Component } from 'react';

import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Table from './components/Table'
import GoogleMap from './components/GoogleMap'
import Navigation from './components/Navigation'

import getRestaurants from './methods/get-restaurants-json'

class App extends Component {
  state = {
    page: 'dashboard',
    restaurants: []
  }

  componentWillMount() {
    getRestaurants.then(restaurants => {
      this.setState({
        restaurants
      })
    })
  }

  handleChange(page) {
    this.setState({
      page
    })
  }

  render() {
    const { page, restaurants } = this.state

    return (
      <main>
        <Header />

        {page === 'dashboard' && restaurants.length && <Dashboard restaurants={restaurants} />}
        {page === 'table'     && restaurants.length && <Table     restaurants={restaurants} />}
        {page === 'map'       && restaurants.length && <GoogleMap restaurants={restaurants} />}

        <Navigation onChange={this.handleChange.bind(this)} />
      </main>
    )
  }
}

export default App;
