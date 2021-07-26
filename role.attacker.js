var roleAttacker = {

    run: function (creep) {

        var enemies = creep.room.find(Game.HOSTILE_CREEPS);

        console.log(enemies.length, "ENEMIES IN ROOM")

        if (enemies.length) {
            attacker.moveTo(enemies[0]);
            attacker.attack(enemies[0]); 
        }
    }
}

module.exports = roleAttacker;


