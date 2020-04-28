import React from 'react'
import Box from './Box'

export default function GameContainer(props) {
    let i = 0
    const makeBoxes = props.boxes.map(box => {
        i += 1
        const newId = `box-${i}`
        return <Box box={box} elementId={newId} addToBackpack={props.addToBackpack}/>
    })

    return (
        <div className="game-container">
            <h2>Escape Using Tools in Boxes!</h2>
            <ul id="box-container-ul">
                {makeBoxes}
            </ul>
        </div>
    )
}