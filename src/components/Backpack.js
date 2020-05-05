import React from 'react'
import BackpackItem from './BackpackItem'
import BackpackImage from '../images/arrow-backpack2.png'

export default function Backpack(props) {

    let i = 0
    const makeBackpackItems = props.backpackItems.map(backpackItem => {
        i += 1
        const newId = `backpack-item-${i}`
        return <BackpackItem backpackItem={backpackItem} backpackId={newId} key={`backpack-id-${i}`} />
    })

    return (
        <div className="backpack">
            <img id="backpack-image" alt="backpack with arrow pointing inside" src={BackpackImage}></img>
            {makeBackpackItems}
        </div>
    )
}