import React from 'react'

export default function Leader(props) {

    return(
        <div className="leader">
            <h2 id="ranking">#{props.ranking}</h2>
            <h2 id="id">{props.username}</h2>
            <h2 id="seconds">{props.leader.seconds_to_complete} sec.</h2>
            <h2 id="misses">{props.leader.total_misses} misses</h2>
        </div>
    )
     
}