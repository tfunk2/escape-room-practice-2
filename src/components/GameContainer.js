import React, { Component } from 'react'
import MakeBoxes from './MakeBoxes'
import Timer from './Timer'

export default class GameContainer extends Component {

    state = {
        gameStartedStatus: false,
        gameCompletedStatus: false
    }

    handleClick = () => {
        this.setState({ gameCompletedStatus: false })
        this.setState({ gameStartedStatus: true })
    }

    handleGameCompletion = () => {
        this.setState({ gameCompletedStatus: true })
        this.setState({ gameStartedStatus: false })
        this.props.resetBackpackItems()
    }

    render() {
        return (
            <div className="game-container">
                <h2>Find the treasure!</h2>
                <button onClick={this.handleClick}>Start Game!</button>
                {
                    this.state.gameStartedStatus === true && 
                    this.state.gameCompletedStatus !== true ? 
                    <Timer gameStartedStatus={this.state.gameStartedStatus}/> : <></>
                }
                {this.state.gameStartedStatus === true ? <MakeBoxes 
                    boxes={this.props.boxes} 
                    addToBackpack={this.props.addToBackpack}
                    checkBackpackForItem={this.props.checkBackpackForItem}
                    backpackItems={this.props.backpackItems}
                    handleGameCompletion={this.handleGameCompletion}
                    gameCompletedStatus={this.state.gameCompletedStatus}
                /> : <></>}
            </div>
        )
    }
}