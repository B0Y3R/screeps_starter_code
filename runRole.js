var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleAttacker = require('role.attacker');

var runRole = {
    run: function() {
        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
    
            const { memory: { role } } = creep;

            switch(role) {
                case 'harvester':
                    roleHarvester.run(creep);
                    break;
                case 'upgrader':
                    roleUpgrader.run(creep);
                    break;
                case 'builder':
                    roleBuilder.run(creep);
                    break;
                case 'attacker':
                    roleAttacker.run(creep);
                    break;
                default:
                    break;
            }    
        }
    }
};

module.exports = runRole;