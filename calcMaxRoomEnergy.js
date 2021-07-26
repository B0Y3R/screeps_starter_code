const creepSpawner = require("./creep.spawner")

var calcMaxRoomEnergy = {
    run: function() {

        let maxRoomEnergy = 300;

        creep.room.find(FIND_STRUCTURES, {
            reduce: (structure) => {
                if (structure.structureType === STRUCTURE_EXTENSION) {
                    maxRoomEnergy += 50;
                }
            }
        });

        console.log(maxRoomEnergy);
    }
};

module.exports = calcMaxRoomEnergy;