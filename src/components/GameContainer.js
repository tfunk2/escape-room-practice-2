import React, { Component } from 'react'
import MakeBoxes from './MakeBoxes'
import Timer from './Timer'
import TotalMisses from './TotalMisses'

export default class GameContainer extends Component {

    state = {
        gameStartedStatus: false,
        gameCompletedStatus: false,
        userId: null,
        totalMisses: 0
    }

    componentDidMount() {
        fetch('http://localhost:3000/users', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            }
        }).then(response => response.json())
            .then(users => this.findUserInfo(users))
    }
    
    findUserInfo = (users) => {
        this.setUserId(users.find(user => user.username === this.props.usernameState))
    }

    incrementTotalMisses = () => {
        this.setState({ totalMisses: this.state.totalMisses + 1 })
    }

    resetTotalMisses = () => {
        this.setState({ totalMisses: 0})
    }

    setUserId = (user) => {
        this.setState({ userId: user.id })
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
                    <Timer 
                        totalMisses={this.state.totalMisses} 
                        userId={this.state.userId} 
                        gameStartedStatus={this.state.gameStartedStatus}
                        resetTotalMisses={this.resetTotalMisses}
                    /> : <></>
                }
                {
                    this.state.gameStartedStatus === true && 
                    this.state.gameCompletedStatus !== true ? 
                    <TotalMisses 
                        totalMisses={this.state.totalMisses} 
                    /> : <></>
                }
                {this.state.gameStartedStatus === true ? <MakeBoxes 
                    boxes={this.props.boxes} 
                    addToBackpack={this.props.addToBackpack}
                    checkBackpackForItem={this.props.checkBackpackForItem}
                    backpackItems={this.props.backpackItems}
                    handleGameCompletion={this.handleGameCompletion}
                    gameCompletedStatus={this.state.gameCompletedStatus}
                    incrementTotalMisses={this.incrementTotalMisses}
                    totalMisses={this.state.totalMisses}
                /> : <></>}
            </div>
        )
    }
}