var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');

var roleHarvester = {

    run: function (creep) {
        var sources = creep.room.find(FIND_SOURCES);

        var constructionSites = creep.room.find(FIND_CONSTRUCTION_SITES);

        var targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_SPAWN && structure.energy < 300 
                    || structure.structureType == STRUCTURE_EXTENSION && structure.energy < 50)
            }
        }); 

        if (creep.store.getFreeCapacity() > 0 && (!creep.memory.upgrading && !creep.memory.building)) {            
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], { visualizePathStyle: { stroke: 'purple'}})
            }   
        }  else if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], { visualizePathStyle: { stroke: 'green'}})
        } else if (constructionSites.length) {
            roleBuilder.run(creep);
        } else {
            roleUpgrader.run(creep);
        }
    }
}

module.exports = roleHarvester;


