import React from 'react'
import BackpackItem from './BackpackItem'

export default function Backpack(props) {

    let i = 0
    const makeBackpackItems = props.backpackItems.map(backpackItem => {
        i += 1
        const newId = `backpack-item-${i}`
        return <BackpackItem backpackItem={backpackItem} backpackId={newId} key={backpackItem.id} />
    })

    return (
        <div className="backpack">
            <h2>Backpack</h2>
            {makeBackpackItems}
        </div>
    )
}