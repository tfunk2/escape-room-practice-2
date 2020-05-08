import React from 'react'

export default function TotalMisses(props) {

    return(
        <div className="total-misses-div">
            <h1>{`Misses: ${props.totalMisses}`}</h1>
        </div>
    )
    
}