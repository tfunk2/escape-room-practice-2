import React from 'react'

export default function Box(props) {

    

    function handleClick() {
        if (props.addToBackpack) {
            props.addToBackpack(props.box)
        }
    }

    return (
        <li className='box' id={props.elementId} onClick={handleClick}>
            <h1>?</h1>
            <p>{props.box.tool}</p>
        </li>
    )
}