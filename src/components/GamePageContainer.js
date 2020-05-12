import React, { Component } from 'react';
import GameContainer from './GameContainer'
import Backpack from './Backpack'
import subLogo from '../images/green-blue-gradient.png'


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
    tool: "You found the treasure!"
  }
]

class GamePageContainer extends Component {

  state = {
    boxes: [],
    backpackItems: [
      {
        unlockable: null, 
        toolUsedToUnlock: null,
        tool: "pocket knife"
      }
    ],
    gameStartStatus: false
  }
  
  shuffle = (array) => {
    return (array.sort(() => Math.random() - 0.5))
  }

  componentDidMount() {
    this.setState({ boxes: this.shuffle(allBoxes) })
  }

  resetShuffle = () => {
    this.setState({ boxes: this.shuffle(this.state.boxes) })
  }

  addToBackpack = (boxItem) => {
    if (!this.state.backpackItems.find(backpackItem => backpackItem === boxItem)) {
      this.setState({ backpackItems: [...this.state.backpackItems, boxItem] })
    }
  }

  changeGameStartStatus = () => {
    if (this.state.gameStartStatus === false) {
      this.setState({ gameStartStatus: true })
    } else {
      this.setState({ gameStartStatus: false })
    }
  }

  checkBackpackForItem = (necessaryBackpackItem) => {
    if (this.state.backpackItems.find(
      backpackItem => backpackItem.tool === necessaryBackpackItem.toolUsedToUnlock)
    ) {
      return true
    }
  }

  resetBackpackItems = () => {
    this.setState({ backpackItems: [
      {
        unlockable: null, 
        toolUsedToUnlock: null,
        tool: "pocket knife"
      }
    ]})
  }

  render() {
    return (
      <div className="game-page-container">
        <header className="game-page-header">
          <h1 id="loot-sub-title" className="sub-title animated bounceInDown">Loot</h1>
          <div className="sub-logo-container">
            <img alt="sub logo" className="sub-logo animated flipInX fast delay-1s" src={subLogo}></img>
          </div>
          <h1 id="puzzle-sub-title" className="sub-title animated bounceInUp">Puzzle</h1>
        </header>
        {this.state.gameStartStatus === true ?
          <Backpack 
            backpackItems={this.state.backpackItems}
          /> : <></>
        }
        <GameContainer 
          usernameState={this.props.usernameState}
          boxes={this.state.boxes} 
          addToBackpack={this.addToBackpack}
          checkBackpackForItem={this.checkBackpackForItem}
          backpackItems={this.state.backpackItems}
          resetBackpackItems={this.resetBackpackItems}
          changeGameStartStatus={this.changeGameStartStatus}
          dummyDiv={this.props.dummyDiv}
          resetShuffle={this.resetShuffle}
        />
      </div>
    );
  }
}

export default GamePageContainer;
