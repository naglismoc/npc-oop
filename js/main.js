"use strict";

import Object from './components/Object.js';

const terrain = new Object('terrain');
terrain.setSize(1000,1000);
terrain.setPos(0,0);
terrain.setBackgroundColor("lightblue");


const garden = new Object("garden");
garden.setSize(800,800);
garden.setBackgroundColor("green");
terrain.add(garden);
garden.setPos(100,100);


const house = new Object("house");
house.setSize(500 ,600);
house.setBackgroundColor("brown");
garden.add(house);
house.setPos(100,100);

const room1 = new Object("dining_room");
room1.setSize(200,150);
house.add(room1);
room1.setPos(0,0);

const room2 = new Object("bedroom");
room2.setSize(296,180);
house.add(room2);
room2.setPos(200,0);


const room3 = new Object("gym");
room3.setSize(200,300);
house.add(room3);
room3.setPos(0,150);

const room4 = new Object("winter_garden");
room4.setSize(496,146);
house.add(room4);
room4.setPos(0,450);

const room5 = new Object("another_room_usefull");
room5.setSize(296,276);
house.add(room5);
room5.setPos(200,180);






















//  sleep(5,500, funkcija);
    



function sleep( index, time, funkcija ) {
    funkcija();
    if ( index > 0 )  {
        setTimeout( () => {
         
            sleep(index, time,funkcija);
        }, time );
    }
}

function funkcija(){
   document.getElementById
    
}