import React, { Component } from 'react';
import './App.css';
import GamePageContainer from './components/GamePageContainer';


class App extends Component {

  state = {
  }
  
  
  render() {
    return (
      <div className="App">
        <GamePageContainer />
      </div>
    );
  }
}

export default App;
