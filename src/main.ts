import {Pokemon} from "./Classes/Pokemon";
import {Battle} from "./Classes/Battle";
import {Spell} from "./Classes/Spell";

const flameShower: Spell = {type: "fire", name: "flameShower", damage: 5, special: false};
const lightning: Spell = {type: "fire", name: "flameShower", damage: 5, special: false};

let salamecheStats = {speed: 5, attack: 10, defense: 10, specialAttack: 14, specialDefense: 15};
let pikachuStats = {speed: 4, attack: 12, defense: 8, specialAttack: 16, specialDefense: 13};

const salameche: Pokemon = new Pokemon("Salameche", salamecheStats, 1, [flameShower], 100);
const pikachu: Pokemon = new Pokemon("Pikachu", pikachuStats, 1, [lightning], 100);

const battle: Battle = new Battle();
let initiator: Pokemon = battle.whichPokemonHaveTheInitiative(salameche, pikachu);

let isRunning: boolean = true;

while(isRunning){
        battle.battleRound(initiator, initiator.name === salameche.name ? pikachu: salameche, initiator.spells[0]);
        isRunning = battle.arePokemonsAlive(salameche, pikachu);
        initiator = initiator.name === salameche.name ? pikachu: salameche;
}