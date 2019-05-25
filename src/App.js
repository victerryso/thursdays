// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Table from './components/Table'
import GoogleMap from './components/GoogleMap'
import Navigation from './components/Navigation'
// import NavigationBar from './NavigationBar'
// import Home from './Home'
// import TableList from './TableList'
// import MapList from './MapList'

// import restaurants from '../data/restaurants.json'
import getRestaurants from './methods/get-restaurants-json'

class App extends Component {
  state = {
    page: 'home',
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

    // const render = {
    //   home:  <Home restaurants={restaurants} />,
    //   table: <TableList restaurants={restaurants} />,
    //   map:   <MapList restaurants={restaurants} />,
    // }

    return (
      <main>
        <Header />

        {page === 'dashboard' && <Dashboard restaurants={restaurants} />}
        {page === 'table'     && <Table restaurants={restaurants} />}
        {page === 'map'       && <GoogleMap restaurants={restaurants} />}

        <Navigation onChange={this.handleChange.bind(this)} />
      </main>
    )
  }
}

export default App;
