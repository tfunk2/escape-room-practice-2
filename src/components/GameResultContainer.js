import React from 'react'
import Treasure from '../images/treasure.png'
import LeaderBoard from './LeaderBoard'

export default function GameResultContainer(props) {

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

    const sortByMissesThenSeconds = (allGames) => {
        let firstSort = allGames.sort((a, b) => a.total_misses-b.total_misses)
        let distinctValues = []
        
        firstSort.forEach(game => {
          if( !(distinctValues.includes(game.total_misses)) ){
            distinctValues = [...distinctValues, game.total_misses]
          }
        }) 
        
        let arrayOfGroupedGames = distinctValues.map(value => {
          return firstSort.filter(game => value === game.total_misses)
        })
        
        let arrayOfSortedGroupedGames = arrayOfGroupedGames.map(smallArrayOfGames => {
          return smallArrayOfGames.sort((a,b) => a.seconds_to_complete - b.seconds_to_complete)
        })
        
        return arrayOfSortedGroupedGames.flat()
      }
      
    return(
        <div className="game-result-container">
            <div id="game-result-info">
                <h1 className="victory-text">Well done {<span className="most-recent-score-span">{props.usernameState}</span>},</h1>
                <h1 className="victory-text">You found the loot in {<span className="most-recent-score-span">{props.mostRecentTime}</span>} seconds,</h1>
                <h1 className="victory-text">and {whichSentence()}{<span className="most-recent-score-span">{whichInfo()}</span>}{whichEnding()}</h1>
                <h2 id="click-treasure">{props.leaderBoardClicked === false ?
                    <div id="click-treasure-div">Click the treasure to compare your score to the 
                        <span className="top-ten-span">Top 10!</span>
                    </div> : 
                    <span id="top-ten-title" className="top-ten-span">Top 10</span>}
                </h2>
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
                    </> : 
                    <LeaderBoard  
                        leaderBoardClicked={props.leaderBoardClicked}
                        sortByMissesThenSeconds={sortByMissesThenSeconds}
                        users={props.users}
                        dummyDiv={props.dummyDiv}
                    />
                }
            </div>
        </div>
    )
}