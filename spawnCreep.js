const bodyCost = require('bodyCost');

const creepSizes = {
    "small": [WORK, CARRY, MOVE, MOVE],
    "medium": [WORK, WORK, CARRY, MOVE, MOVE, MOVE],
    "large": [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
    "extra-large": [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE]
};

var SpawnCreep = {
    run: function(role, roomEnergy) {
        const Spawn = Game.spawns['Spawn1'];
        const newName = role + Game.time;

        let size = "small";
 
        if (roomEnergy >= 550) {
            size = 'large';
        } else if (roomEnergy >= 400 ) {
            size = 'medium';
        }

        console.log(`Spawning ${size} ${role}: ${newName}`);

        Spawn.spawnCreep(creepSizes[size], newName, { memory: { role } } );
    }
}

module.exports = SpawnCreep;