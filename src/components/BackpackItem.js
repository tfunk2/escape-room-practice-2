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
import pocketKnife from '../images/pocketKnife.png'

export default function BackpackItem(props) {

    function whichImage() {
        switch(props.backpackItem.tool) {
            case 'pocket knife':
              return pocketKnife;
              break;
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

    return (
        <li className='backpack-item'>
            <img 
                id={props.backpackId} 
                className='backpack-image' 
                alt={props.backpackItem.tool} 
                src={whichImage()}
            >
            </img>
            <p>{props.backpackItem.tool}</p>
        </li>
    )
}