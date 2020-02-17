"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, stats, level, spells, hp) {
        this.name = name;
        this.stats = stats;
        this.level = level;
        this.spells = spells;
        this.hp = hp;
        this.experience = 0;
        this.levelMaxXp = 1000;
        this.isAlive = true;
    }
    Pokemon.prototype.levelUp = function () {
        this.level++;
    };
    Pokemon.prototype.gainXP = function (experience) {
        if (experience + this.experience > this.levelMaxXp) {
            this.levelUp();
            this.experience = 0;
            this.levelMaxXp *= 2;
        }
        else {
            this.experience += experience;
        }
    };
    Pokemon.prototype.calculateDamages = function (defender, spell) {
        var pokemonDefense = spell.special ? defender.stats.specialDefense : defender.stats.defense;
        return Math.floor(Math.floor(Math.floor(2 * this.level / 5 + 2) * this.stats.attack * spell.damage / pokemonDefense) / 50) + 2;
    };
    Pokemon.prototype.dealDamage = function (defendor, damages) {
        defendor.hp -= damages;
        console.log(this.name + " deals " + damages + " to " + defendor.name + " which have " + defendor.hp + " hp left.");
        if (defendor.hp - damages <= 0) {
            defendor.isAlive = false;
            console.log(this.name + " have defeated " + defendor.name + ".");
        }
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
