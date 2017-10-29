import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Recipes from './components/Recipes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipes App</h1>
        </header>
        <Recipes />
      </div>
    );
  }
}

export default App;
