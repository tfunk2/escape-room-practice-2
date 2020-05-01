import React from 'react'

export default function Tool(props) {
    const { box, addToBackpack } = props

    function handleImageClick() {
        addToBackpack(box)
    }

    return (
        <div>
            <img 
                className='box-item-image' 
                onClick={handleImageClick} 
                id={box.unlockable} 
                alt={box.tool} 
                src={box.toolImageURL}
            >
            </img>
        </div>
    )
}