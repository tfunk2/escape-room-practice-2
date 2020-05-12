import React, { Component } from 'react'
import Leaders from './Leaders'

export default class LeaderBoard extends Component {
    state = {
        topTen: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/games', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            }
        }).then(response => response.json())
            .then(games => {
                this.setState({ topTen: this.props.sortByMissesThenSeconds(games).slice(0, 10) })
            })   
    } 

    render() {
        return(
            <div className="leader-board-div">
                <Leaders 
                    leaderBoardClicked={this.props.leaderBoardClicked} 
                    topTen={this.state.topTen} 
                    users={this.props.users}
                />
            </div>
        )
    }
}