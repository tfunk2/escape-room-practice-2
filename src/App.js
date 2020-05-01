import React, { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer'
import Backpack from './components/Backpack'

const allBoxes = [
  {
    unlockable: "welcome box", 
    unlockableImageURL: "https://toppng.com/uploads/preview/cardboard-box-png-clip-art-11532765008imwit9pfmv.png",
    toolUsedToUnlock: null,
    tool: "screwdriver",
    toolImageURL: "http://clipart-library.com/images_k/screwdriver-transparent/screwdriver-transparent-2.png"
  },
  {
    // NEED TO FILL IN UNLOCKABLEIMAGEURL FOR EACH OBJECT BELOW
    unlockable: "4 screws", 
    unlockableImageURL: "",
    toolUsedToUnlock: "screwdriver",
    tool: "lighter",
    toolImageURL: "http://clipart-library.com/img1/218736.png"
  },
  {
    unlockable: "fireworks wick", 
    unlockableImageURL: "",
    toolUsedToUnlock: "lighter",
    tool: "stethoscope",
    toolImageURL: 
      "http://clipart-library.com/newhp/Free-cardiology-stethoscope-health-high-resolution-clip-art-all.png"
  }, 
  {
    unlockable: "safe", 
    unlockableImageURL: "",
    toolUsedToUnlock: "stethoscope",
    tool: "straw",
    toolImageURL: "https://www.stickpng.com/assets/images/5a9aac1d9fc609199d0ff040.png"
  },
  {
    unlockable: "button under water", 
    unlockableImageURL: "",
    toolUsedToUnlock: "straw",
    tool: "flashlight",
    toolImageURL: "https://pngimg.com/uploads/flashlight/flashlight_PNG55977.png"
  },
  {
    unlockable: "dark box", 
    unlockableImageURL: "",
    toolUsedToUnlock: "flashlight",
    tool: "chain saw",
    toolImageURL: "https://pngimg.com/uploads/chainsaw/chain_saw_PNG18517.png"
  },
  {
    unlockable: "logs", 
    unlockableImageURL: "",
    toolUsedToUnlock: "chain saw",
    tool: "batteries",
    toolImageURL: "https://i.ya-webdesign.com/images/aa-battery-png-1.png"
  },
  {
    unlockable: "empty battery slots", 
    unlockableImageURL: "",
    toolUsedToUnlock: "batteries",
    tool: "hammer",
    toolImageURL: "http://clipart-library.com/image_gallery2/Hammer-PNG-Clipart.png"
  },
  {
    unlockable: "4 nails", 
    unlockableImageURL: "",
    toolUsedToUnlock: "hammer",
    tool: "scissors",
    toolImageURL: "http://clipart-library.com/images/pi58g6dAT.png"
  },
  {
    unlockable: "ribbon", 
    unlockableImageURL: "",
    toolUsedToUnlock: "scissors",
    tool: "crowbar",
    toolImageURL: "http://clipart-library.com/img1/385845.png"
  }, 
  {
    unlockable: "wooden box", 
    unlockableImageURL: "",
    toolUsedToUnlock: "crowbar",
    tool: "credit card",
    toolImageURL: "http://clipart-library.com/newhp/credit-card-clipart.png"
  },
  {
    unlockable: "keypad with swipe", 
    unlockableImageURL: "",
    toolUsedToUnlock: "credit card",
    tool: "lockpick",
    toolImageURL: "https://gamepedia.cursecdn.com/dayz_gamepedia/a/ac/Lockpick.png"
  },
  {
    unlockable: "new keyhole", 
    unlockableImageURL: "",
    toolUsedToUnlock: "lockpick",
    tool: "dynamite",
    toolImageURL: "https://pngimg.com/uploads/dynamite/dynamite_PNG28.png"
  },
  {
    unlockable: "metal box", 
    unlockableImageURL: "",
    toolUsedToUnlock: "dynamite",
    tool: "paper clip",
    toolImageURL: "http://clipart-library.com/newhp/Colorful_Paper_Clips_PNG_Clipart_Image.png"
  },
  {
    unlockable: "old keyhole",
    unlockableImageURL: "",
    toolUsedToUnlock: "paper clip",
    tool: "master key",
    toolImageURL: "http://clipart-library.com/image_gallery/456776.png"
  },
  {
    unlockable: "master lock", 
    unlockableImageURL: "",
    toolUsedToUnlock: "master key",
    tool: "treasure",
    toolImageURL: "http://clipart-library.com/images/pT7rLkkac.png"
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
        <GameContainer 
          boxes={this.state.boxes} 
          addToBackpack={this.addToBackpack}
          checkBackpackForItem={this.checkBackpackForItem}
          backpackItems={this.state.backpackItems}
        />
        <Backpack 
        backpackItems={this.state.backpackItems}
        />
      </div>
    );
  }
}

export default App;
