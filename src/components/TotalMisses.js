import React from 'react'

export default function TotalMisses(props) {

    const helpAddSpan = () => {
        return "Misses: "
    }

    return(
        <div className="total-misses-div">
            <h1 id="misses-word">{helpAddSpan()}<span className="game-number" >{props.totalMisses}</span></h1>
        </div>
    )
    
}