import React, { Component } from 'react'
import Tool from './Tool'


export default class Box extends Component {
    // const { box, elementId, addToBackpack, checkBackpackForItem } = props

    state = {
        "welcome-box" : false,
        "four-screws" : false,
        "unlit-wood" : false,
        "safe" : false,
        "button-under-water" : false,
        "dark-box" : false,
        "logs" : false,
        "empty-battery-slots" : false,
        "four-nails" : false,
        "pallet-with-rope" : false,
        "wooden-box" : false,
        "keypad-with-swipe" : false,
        "new-keyhole" : false,
        "boulder" : false,
        "old-keyhole" : false,
        "master-lock" : false
    }

    handleClick = () => {
        
        if (this.props.checkBackpackForItem(this.props.box) || this.props.box.unlockable === 'welcome-box') {
            this.setState({ [this.props.box.unlockable]: true })
        } else {
            this.props.incrementTotalMisses()
        }

        if (this.state["master-lock"] === true) {
            this.props.handleGameCompletion()
        }

    }

    render() {
        return (
            <li 
                className={this.state[this.props.box.unlockable] ? 'open-box' : 'box'} 
                id={this.props.box.unlockable} 
                onClick={this.handleClick}
            >
                <div id={`tool-text-${this.props.elementId}`}>
                    {
                        this.state[this.props.box.unlockable] === true &&
                        !this.props.backpackItems.find(bpItem => bpItem === this.props.box) ? 
                        <Tool 
                            box={this.props.box} 
                            elementId={this.props.elementId} 
                            addToBackpack={this.props.addToBackpack}
                            idNumber={this.props.idNumber}
                        /> : <div></div>
                    }
                </div>
            </li>
        )
    } 
}