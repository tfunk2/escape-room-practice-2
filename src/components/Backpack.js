import React from 'react'
import Box from './Box'

export default function Backpack(props) {

    let i = 0
    const makeBackpackItems = props.backpackItems.map(box => {
        i += 1
        const newId = `backpack-item-${i}`
        return <Box box={box} backpackId={newId}/>
    })

    return (
        <div className="backpack">
            <h2>Backpack</h2>
            {makeBackpackItems}
        </div>
    )
}