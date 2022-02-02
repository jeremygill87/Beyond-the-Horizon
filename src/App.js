import React, { Component } from 'react';
import Background from './components/BattleBoxes/Background'
import TDMap from './components/TopDownVIew/TDMove';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TDMap></TDMap>
      </div>
    )
  }
}

export default App;