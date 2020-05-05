import React, { Component } from 'react'
import MakeBoxes from './MakeBoxes'

export default class GameContainer extends Component {

    state = {
        gameStartedStatus: false
    }

    handleClick = () => {
        this.setState({ gameStartedStatus: true })
        console.log(this.state.gameStartedStatus)
    }

    render() {
        return (
            <div className="game-container">
                <h2>Find the treasure!</h2>
                <button onClick={this.handleClick}>Start Game!</button>
                {this.state.gameStartedStatus === true ? <MakeBoxes 
                    boxes={this.props.boxes} 
                    addToBackpack={this.props.addToBackpack}
                    checkBackpackForItem={this.props.checkBackpackForItem}
                    backpackItems={this.props.backpackItems}
                /> : <></>}
            </div>
        )
    }
}