import React, { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Escape Room Game Practice</h1>
        </header>
        <GameContainer />
      </div>
    );
  }
}

export default App;
