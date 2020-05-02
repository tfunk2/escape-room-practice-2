import React from 'react'
import screwdriver from '../images/screwdriver.png'
import lighter from '../images/lighter.png'
import stethoscope from '../images/stethoscope.png'
import straw from '../images/straw.png'
import flashlight from '../images/flashlight.png'
import chainSaw from '../images/chainSaw.png'
import batteries from '../images/batteries.png'
import hammer from '../images/hammer.png'
import scissors from '../images/scissors.png'
import crowbar from '../images/crowbar.png'
import creditCard from '../images/creditCard.png'
import lockpick from '../images/lockpick.png'
import dynamite from '../images/dynamite.png'
import paperClip from '../images/paperClip.png'
import masterKey from '../images/masterKey.png'
import treasure from '../images/treasure.png'

export default function Tool(props) {
    const { box, addToBackpack, idNumber } = props

    function handleImageClick() {
        addToBackpack(box)
    }

    function whichImage() {
        switch(box.tool) {
            case 'screwdriver':
              return screwdriver;
              break;
            case 'lighter':
              return lighter;
              break;
            case 'stethoscope':
              return stethoscope;
              break;
            case 'straw':
              return straw;
              break;
            case 'flashlight':
              return flashlight;
              break;
            case 'chain saw':
              return chainSaw;
              break;
            case 'batteries':
              return batteries;
              break;
            case 'hammer':
              return hammer;
              break;
            case 'scissors':
              return scissors;
              break;
            case 'crowbar':
              return crowbar;
              break;
            case 'credit card':
              return creditCard;
              break;
            case 'lockpick':
              return lockpick;
              break;
            case 'dynamite':
              return dynamite;
              break;
            case 'paper clip':
              return paperClip;
              break;
            case 'master key':
              return masterKey;
              break;
            case 'You found the treasure!':
              return treasure;
              break;
            default:
              return null;
          }
    }

    // function whichOpenContainerImage() {
    //     switch(box.tool) {
    //         case '':
    //           return screwdriver;
    //           break;
    //         case '':
    //           return lighter;
    //           break;
    //         case '':
    //           return stethoscope;
    //           break;
    //         case '':
    //           return straw;
    //           break;
    //         case '':
    //           return flashlight;
    //           break;
    //         case '':
    //           return chainSaw;
    //           break;
    //         case '':
    //           return batteries;
    //           break;
    //         case '':
    //           return hammer;
    //           break;
    //         case '':
    //           return scissors;
    //           break;
    //         case '':
    //           return crowbar;
    //           break;
    //         case '':
    //           return creditCard;
    //           break;
    //         case '':
    //           return lockpick;
    //           break;
    //         case '':
    //           return dynamite;
    //           break;
    //         case '':
    //           return paperClip;
    //           break;
    //         case '':
    //           return masterKey;
    //           break;
    //         case '':
    //           return treasure;
    //           break;
    //         default:
    //           return null;
    //       }
    // }

    return (
        <div className='tool-div'>
            <img 
                className='box-item-image' 
                onClick={handleImageClick} 
                id={`${box.unlockable}-tool-image`} 
                alt={box.tool} 
                src={whichImage()}
            >
            </img>
        </div>
    )
}