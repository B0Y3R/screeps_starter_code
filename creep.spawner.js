
const SpawnCreep = require('spawnCreep');
const MAX_ROOM_ENERGY = 300;
var creepSpawner = {
    run: function () {
        for (var name in Game.rooms) {

            var room = Game.rooms[name];
            var roomEnergy = room.energyAvailable;
            var creepCount = 3;

            if (roomEnergy >= MAX_ROOM_ENERGY) {

                var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
                var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
                var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
               
                if (harvesters.length < creepCount) {
                    SpawnCreep.run('harvester', roomEnergy)
                }

                if (builders.length < creepCount) {
                    var targets = room.find(FIND_CONSTRUCTION_SITES);
                    targets.length && SpawnCreep.run('builder', roomEnergy);
                }

                if (upgraders.length < creepCount && harvesters.length == creepCount){
                    SpawnCreep.run('upgrader', roomEnergy);
                } 
            }
        }
    }
}

module.exports = creepSpawner;