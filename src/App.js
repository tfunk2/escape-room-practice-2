import React, { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer'
import Backpack from './components/Backpack'

const allBoxes = [
  {
    unlockable: "welcome box", 
    tool: "screwdriver"
  },
  {
    unlockable: "4 screws", 
    tool: "lighter"
  },
  {
    unlockable: "fireworks wick", 
    tool: "stethoscope"
  }, 
  {
    unlockable: "safe", 
    tool: "straw"
  },
  {
    unlockable: "button behind grate", 
    tool: "flashlight"
  },
  {
    unlockable: "dark box", 
    tool: "chain saw"
  },
  {
    unlockable: "logs", 
    tool: "batteries"
  },
  {
    unlockable: "empty battery slots", 
    tool: "hammer"
  },
  {
    unlockable: "4 nails", 
    tool: "scissors"
  },
  {
    unlockable: "ribbon", 
    tool: "crowbar"
  }, 
  {
    unlockable: "wooden box", 
    tool: "credit card"
  },
  {
    unlockable: "keypad with swipe", 
    tool: "lockpick"
  },
  {
    unlockable: "new keyhole", 
    tool: "C4"
  },
  {
    unlockable: "metal box", 
    tool: "paper clip"
  },
  {
    unlockable: "old keyhole",
    tool: "master key"
  },
  {
    unlockable: "master lock", 
    tool: "You escaped!"
  }
]

class App extends Component {

  state = {
    boxes: [],
    backpackItems: []
  }
  
  shuffle = (array) => {
    return (array.sort(() => Math.random() - 0.5))
  }

  componentDidMount() {
    this.setState({ boxes: this.shuffle(allBoxes) })
  }

  addToBackpack = (boxItem) => {
    if (!this.state.backpackItems.find(backpackItem => backpackItem == boxItem)) {
      this.setState({backpackItems: [...this.state.backpackItems, boxItem]})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Escape Room Game Practice</h1>
        </header>
        <GameContainer boxes={this.state.boxes} addToBackpack={this.addToBackpack}/>
        <Backpack backpackItems={this.state.backpackItems}/>
      </div>
    );
  }
}

export default App;
