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