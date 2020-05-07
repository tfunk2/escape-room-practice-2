import React from 'react'
import Treasure from '../images/treasure.png'
import LeaderBoard from './LeaderBoard'

export default function GameResultContainer(props) {

    // fetch username here using user id

    const whichSentence = () => {
        if (props.mostRecentTotalMisses === 0) {
            return `you did it with `
        } else {
            return `you only misused your tools `
        }
    }

    const whichInfo = () => {
       if (props.mostRecentTotalMisses === 0) {
        return "perfect"
       } else {
        return props.mostRecentTotalMisses
       }
    }

    const whichEnding = () => {

        if (props.mostRecentTotalMisses === 0) {
            return " accuracy!"
        } else if (props.mostRecentTotalMisses === 1) {
            return " time!"
        } else {
            return " times!"
        }
    }

    return(
        <div className="game-result-container">
            <div id="game-result-info">
                <h1 className="victory-text">Well done {<span className="most-recent-score-span">{props.usernameState}</span>},</h1>
                <h1 className="victory-text">You found the loot in {<span className="most-recent-score-span">{props.mostRecentTime}</span>} seconds,</h1>
                <h1 className="victory-text">and {whichSentence()}{<span className="most-recent-score-span">{whichInfo()}</span>}{whichEnding()}</h1>
                <h2 id="click-treasure">Click the treasure to compare your score to the Top 10!</h2>

            </div>
            
            <div id="treasure-image-div">
                {props.leaderBoardClicked === false ?
                    <>
                        <img 
                            alt="dancing treasure" 
                            className="treasure-image animated tada infinite" 
                            src={Treasure}
                            onClick={props.setLeaderBoardStatus}
                        >
                        </img>
                    </> : <LeaderBoard leaderBoardClicked={props.leaderBoardClicked}/>
                }
            </div>
        </div>
    )
}