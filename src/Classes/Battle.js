"use strict";
exports.__esModule = true;
var Battle = /** @class */ (function () {
    function Battle() {
    }
    Battle.prototype.whichPokemonHaveTheInitiative = function (firstPokemon, secondPokemon) {
        if (firstPokemon.stats.speed === secondPokemon.stats.speed) {
            return (Math.floor(Math.random() * 2)) === 0 ? firstPokemon : secondPokemon;
        }
        else {
            return (firstPokemon.stats.speed > secondPokemon.stats.speed) ? firstPokemon : secondPokemon;
        }
    };
    Battle.prototype.battleRound = function (initiator, secondPokemon, spell) {
        var damages = initiator.calculateDamages(secondPokemon, spell);
        initiator.dealDamage(secondPokemon, damages);
    };
    Battle.prototype.arePokemonsAlive = function (firstPokemon, secondPokemon) {
        return firstPokemon.isAlive === secondPokemon.isAlive;
    };
    return Battle;
}());
exports.Battle = Battle;
