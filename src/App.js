import React, { Component } from 'react';

import Header from './components/Header'
import GoogleMap from './components/GoogleMap'
import Loading from './components/Loading'
import NightsCount from './pages/NightsCount'
import BarChart from './pages/BarChart'
import ImageGrid from './pages/ImageGrid'
import Table from './pages/Table'

import getRestaurants from './methods/get-restaurants-json'

class App extends Component {
  state = {
    page: 'home',
    items: []
  }

  switchToHome() {
    this.setState({ page: 'home' })
  }

  switchToTable() {
    this.setState({ page: 'table' })
  }

  componentWillMount() {
    getRestaurants.then(items => {
      this.setState({
        items
      })
    })
  }

  render() {
    const { items, page } = this.state

    const complete = !!items.length

    let main = page === 'table' ? (
      <Table items={items} />
    ) : (
      <div>
        <NightsCount items={items} />
        <BarChart items={items} />
        <ImageGrid items={items} />
        <GoogleMap items={items} />
      </div>
    )

    return (
      <div>
        <Header
          switchToHome={this.switchToHome.bind(this)}
          switchToTable={this.switchToTable.bind(this)}
        />

        {complete && main}

        <Loading complete={complete} />
      </div>
    )
  }
}

export default App;
