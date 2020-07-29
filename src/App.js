import React, { Component } from 'react';
import './App.css';
import Chord from './Chord';
import Audio from './Audio';
import Home from './Home';
class App extends Component {

  render() {

    return (
      <div className="App">
        <h1>App.js</h1>
        <Home />
        <Chord />
        <Audio />
      </div>
    );
  }
}

export default App;
