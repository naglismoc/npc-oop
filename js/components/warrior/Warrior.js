import NonPlayerCharacter from '../npc/NonPlayerCharacter.js';

class Warrior extends NonPlayerCharacter {
    constructor( name ) {
        super( name, 'warrior' );
    }

    attack() {
        return console.log(`${this.name}(${this.type}) attacked with sword and dealt 6 damage!`);
    }
}

export default Warrior;