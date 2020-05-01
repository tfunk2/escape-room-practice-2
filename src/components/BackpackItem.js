import React from 'react'

export default function BackpackItem(props) {

    return (
        <li className='backpack-item'>
            <img id={props.backpackId} className='backpack-image' alt={props.backpackItem.toolUsedToUnlock} src={props.backpackItem.toolImageURL}></img>
            <p>{props.backpackItem.tool}</p>
        </li>
    )
}