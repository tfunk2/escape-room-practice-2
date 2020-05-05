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
    const { box, addToBackpack } = props

    function handleImageClick() {
        addToBackpack(box)
    }

    function whichImage() {
        switch(box.tool) {
            case 'screwdriver':
              return screwdriver;
            case 'lighter':
              return lighter;
            case 'stethoscope':
              return stethoscope;
            case 'straw':
              return straw;
            case 'flashlight':
              return flashlight;
            case 'chain saw':
              return chainSaw;
            case 'batteries':
              return batteries;
            case 'hammer':
              return hammer;
            case 'scissors':
              return scissors;
            case 'crowbar':
              return crowbar;
            case 'credit card':
              return creditCard;
            case 'lockpick':
              return lockpick;
            case 'dynamite':
              return dynamite;
            case 'paper clip':
              return paperClip;
            case 'master key':
              return masterKey;
            case 'You found the treasure!':
              return treasure;
            default:
              return null;
          }
    }

    // function whichOpenContainerImage() {
    //     switch(box.tool) {
    //         case '':
    //           return screwdriver;
    //         case '':
    //           return lighter;
    //         case '':
    //           return stethoscope;
    //         case '':
    //           return straw;
    //         case '':
    //           return flashlight;
    //         case '':
    //           return chainSaw;
    //         case '':
    //           return batteries;
    //         case '':
    //           return hammer;
    //         case '':
    //           return scissors;
    //         case '':
    //           return crowbar;
    //         case '':
    //           return creditCard;
    //         case '':
    //           return lockpick;
    //         case '':
    //           return dynamite;
    //         case '':
    //           return paperClip;
    //         case '':
    //           return masterKey;
    //         case '':
    //           return treasure;
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