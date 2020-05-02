import React, { Component } from 'react'
import Tool from './Tool'


export default class Box extends Component {
    // const { box, elementId, addToBackpack, checkBackpackForItem } = props

    state = {
        1 : false,
        2 : false,
        3 : false,
        4 : false,
        5 : false,
        6 : false,
        7 : false,
        8 : false,
        9 : false,
        10 : false,
        11 : false,
        12 : false,
        13 : false,
        14 : false,
        15 : false,
        16 : false,
    }

    handleClick = () => {
        if (this.props.checkBackpackForItem(this.props.box) || this.props.box.unlockable === 'welcome-box') {
            this.setState({ [this.props.box.id]: true })
        }
    }

    render() {
        return (
            <li 
                className={this.state[this.props.box.id] ? 'open-box' : 'box'} 
                id={this.props.box.unlockable} 
                onClick={this.handleClick}
            >
                <div id={`tool-text-${this.props.elementId}`}>
                    {
                        this.state[this.props.box.idNumber] === true &&
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