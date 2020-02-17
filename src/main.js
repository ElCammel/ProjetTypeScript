"use strict";
exports.__esModule = true;
var Pokemon_1 = require("./Classes/Pokemon");
var Battle_1 = require("./Classes/Battle");
var flameShower = { type: "fire", name: "flameShower", damage: 5, special: false };
var lightning = { type: "fire", name: "flameShower", damage: 5, special: false };
var salamecheStats = { speed: 5, attack: 10, defense: 10, specialAttack: 14, specialDefense: 15 };
var pikachuStats = { speed: 4, attack: 12, defense: 8, specialAttack: 16, specialDefense: 13 };
var salameche = new Pokemon_1.Pokemon("Salameche", salamecheStats, 1, [flameShower], 100);
var pikachu = new Pokemon_1.Pokemon("Pikachu", pikachuStats, 1, [lightning], 100);
var battle = new Battle_1.Battle();
var initiator = battle.whichPokemonHaveTheInitiative(salameche, pikachu);
var isRunning = true;
while (isRunning) {
    battle.battleRound(initiator, initiator.name === salameche.name ? pikachu : salameche, initiator.spells[0]);
    isRunning = battle.arePokemonsAlive(salameche, pikachu);
    initiator = initiator.name === salameche.name ? pikachu : salameche;
}
