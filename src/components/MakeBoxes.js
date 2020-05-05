import React from 'react'
import Box from './Box'

export default function MakeBoxes(props) {
    let i = 0
    const makeBoxes = props.boxes.map(box => {
        i += 1
        const newId = `box-${i}`
        return <Box 
            key={newId}
            box={box} 
            idNumber={i}
            elementId={newId} 
            addToBackpack={props.addToBackpack}
            checkBackpackForItem={props.checkBackpackForItem}
            backpackItems={props.backpackItems}
        />
    })

    return (
        <ul id="box-container-ul">
            
            {makeBoxes}
        </ul>
    )
}