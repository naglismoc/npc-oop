"use strict";

import Mage from './components/mage/Mage.js';
import Ranger from './components/ranger/Ranger.js';
import Warrior from './components/warrior/Warrior.js';

const EvilMage = new Mage('Evil Mage');
const Legolas = new Ranger('Legolas');
const Barbariana = new Warrior('Barbariana');

EvilMage.attack();
Legolas.attack();
EvilMage.attack();
EvilMage.attack();
Barbariana.attack();

function sleep( index, time ) {
    console.log( index-- );

    if ( index > 0 )  {
        setTimeout( () => {
            sleep(index, time);
        }, time );
    }
}

sleep(5, 1000);