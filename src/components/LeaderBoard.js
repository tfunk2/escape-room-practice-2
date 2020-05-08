import React, { Component } from 'react'
import Leaders from './Leaders'

export default class LeaderBoard extends Component {
    state = {
        users: [],
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
            

        fetch('http://localhost:3000/users', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            }
        }).then(response => response.json())
            .then(users => {
                this.setState({ users: users })
                console.log(users)
            })
    } 

    render() {
        return(
            <div className="leader-board-div">
                <Leaders 
                    leaderBoardClicked={this.props.leaderBoardClicked} 
                    topTen={this.state.topTen} 
                    users={this.state.users}
                />
            </div>
        )
    }
}