import React, { Component } from 'react'
import Leaders from './Leaders'

export default class LeaderBoard extends Component {
    state = {
        topTen: [],
        users: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/games', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            }
        }).then(response => response.json())
            .then(games => this.setTopTen(games))

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

    setTopTen = (games) => {
        this.setState({ topTen: games.sort(function(a, b) {
            return parseInt(a.total_misses) - parseInt(b.total_misses);
        }).sort(function(c, d) {
            return parseInt(c.seconds_to_complete) - parseInt(d.seconds_to_complete);
        }).slice(0, 10)})
    }
    


    render() {
        return(
            <div className="leader-board-div">
                <Leaders leaderBoardClicked={this.props.leaderBoardClicked} topTen={this.state.topTen} users={this.state.users}/>
            </div>
        )
    }
}