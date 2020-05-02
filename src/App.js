import React, { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer'
import Backpack from './components/Backpack'

const allBoxes = [
  {
    unlockable: "welcome-box", 
    toolUsedToUnlock: null,
    tool: "screwdriver"
  },
  {
    unlockable: "four-screws", 
    toolUsedToUnlock: "screwdriver",
    tool: "lighter"
  },
  {
    unlockable: "unlit-wood", 
    toolUsedToUnlock: "lighter",
    tool: "stethoscope"
  }, 
  {
    unlockable: "safe", 
    toolUsedToUnlock: "stethoscope",
    tool: "straw"
  },
  {
    unlockable: "button-under-water", 
    toolUsedToUnlock: "straw",
    tool: "flashlight"
  },
  {
    unlockable: "dark-box", 
    toolUsedToUnlock: "flashlight",
    tool: "chain saw"
  },
  {
    unlockable: "logs", 
    toolUsedToUnlock: "chain saw",
    tool: "batteries"
  },
  {
    unlockable: "empty-battery-slots", 
    toolUsedToUnlock: "batteries",
    tool: "hammer"
  },
  {
    unlockable: "four-nails", 
    toolUsedToUnlock: "hammer",
    tool: "scissors"
  },
  {
    unlockable: "pallet-with-rope", 
    toolUsedToUnlock: "scissors",
    tool: "crowbar"
  }, 
  {
    unlockable: "wooden-box", 
    toolUsedToUnlock: "crowbar",
    tool: "credit card"
  },
  {
    unlockable: "keypad-with-swipe", 
    toolUsedToUnlock: "credit card",
    tool: "lockpick"
  },
  {
    unlockable: "new-keyhole", 
    toolUsedToUnlock: "lockpick",
    tool: "dynamite"
  },
  {
    unlockable: "boulder", 
    toolUsedToUnlock: "dynamite",
    tool: "paper clip"
  },
  {
    unlockable: "old-keyhole",
    toolUsedToUnlock: "paper clip",
    tool: "master key"
  },
  {
    unlockable: "master-lock", 
    toolUsedToUnlock: "master key",
    tool: "treasure"
  }
]

class App extends Component {

  state = {
    boxes: [],
    backpackItems: [
      {
        unlockable: null, 
        toolUsedToUnlock: null,
        tool: "pocket knife"
      }
    ]
  }
  
  shuffle = (array) => {
    return (array.sort(() => Math.random() - 0.5))
  }

  componentDidMount() {
    this.setState({ boxes: this.shuffle(allBoxes) })
  }

  addToBackpack = (boxItem) => {
    if (!this.state.backpackItems.find(backpackItem => backpackItem === boxItem)) {
      this.setState({ backpackItems: [...this.state.backpackItems, boxItem] })
    }
  }

  checkBackpackForItem = (necessaryBackpackItem) => {
    if (this.state.backpackItems.find(
      backpackItem => backpackItem.tool === necessaryBackpackItem.toolUsedToUnlock)
    ) {
      return true
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Escape Room Game Practice</h1>
        </header>
        <Backpack 
          backpackItems={this.state.backpackItems}
        />
        <GameContainer 
          boxes={this.state.boxes} 
          addToBackpack={this.addToBackpack}
          checkBackpackForItem={this.checkBackpackForItem}
          backpackItems={this.state.backpackItems}
        />
      </div>
    );
  }
}

export default App;
