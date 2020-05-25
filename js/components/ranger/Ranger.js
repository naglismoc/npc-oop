import NonPlayerCharacter from '../npc/NonPlayerCharacter.js';

class Ranger extends NonPlayerCharacter {
    constructor( name ) {
        super( name, 'ranger' );
    }
}

export default Ranger;