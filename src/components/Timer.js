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
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        return (
            <div className="timer">
                <h1>{this.props.gameStartedStatus === true && this.props.gameCompletedStatus !== true ? `Timer: ${this.state.count}` : <></>}</h1>
            </div>
        )
    }

}