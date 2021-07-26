var creepSpawner = require('creep.spawner');
var clearMemory = require('clearMemory');
var runRole = require('runRole');
var bodyCost = require('bodyCost');

module.exports.loop = function () {    
    // console.log(bodyCost.run([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]));
    clearMemory.run();
    creepSpawner.run();
    runRole.run();    
}
