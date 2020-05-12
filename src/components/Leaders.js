import React from 'react'
import Leader from './Leader'

export default function Leaders(props) {

    const findLeaderById = (userId) => {
        return props.users.find(user => {
            return +user.id === +userId
        }).username
    }

    let i = 0
    const makeLeaders = props.topTen.map(leader => {
        i += 1
        return <Leader 
            ranking={i} 
            leaderBoardClicked={props.leaderBoardClicked} 
            key={`leader-${i}`} 
            leader={leader} 
            users={props.users}
            username={findLeaderById(leader.user_id)}
        />
    })

    return(
        <div className="leaders">
            {makeLeaders}
        </div>
    )
}