import React from 'react'

export default function Leader(props) {

    return(
        <div className="leader" id={`leader-${props.ranking}`}>
            <h2 id="ranking">#<span className="leader-board-numbers">{props.ranking}</span></h2>
            <h2 id="id"><span className="leader-board-numbers">{props.username}</span></h2>
            <h2 id="seconds">
                <span  className="leader-board-numbers">
                    {props.leader.seconds_to_complete}
                </span> sec.
            </h2>
            <h2 id="misses"><span className="leader-board-numbers">{props.leader.total_misses}</span> misses</h2>
        </div>
    )
     
}