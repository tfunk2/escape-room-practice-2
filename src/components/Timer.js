import React, { Component } from 'react'

export default class Timer extends Component {

    state = {
        count: 0
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
              count: prevState.count + 1
            }))
        }, 1000)

        this.scrollToBottom()
    }

    scrollToBottom = () => {
        this.props.dummyDiv.scrollIntoView({ behavior: "smooth" });
      }

    componentWillUnmount() {
        fetch('http://localhost:3000/games', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({ 
                user_id: this.props.userId,
                seconds_to_complete: this.state.count,
                total_misses: this.props.totalMisses
            })
        })
        this.props.setMostRecentScore(this.state.count)
        this.props.resetTotalMisses()
        this.props.changeGameStartStatus()
        clearInterval(this.myInterval)
    }

    render() {
        return (
            <div className="timer">
                <h1>{this.props.gameStartedStatus === true && this.props.gameCompletedStatus !== true ? <div id="timer-word">Timer: <span className="game-number">{this.state.count}</span></div> : <></>}</h1>
            </div>
        )
    }

}