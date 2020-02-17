import {Pokemon} from "./Pokemon";
import {Spell} from "./Spell";

class Battle{

    constructor(){}

    public whichPokemonHaveTheInitiative(firstPokemon: Pokemon, secondPokemon: Pokemon): Pokemon{
        if(firstPokemon.stats.speed === secondPokemon.stats.speed){
            return (Math.floor(Math.random() *2)) === 0 ? firstPokemon: secondPokemon;
        }
        else{
            return (firstPokemon.stats.speed > secondPokemon.stats.speed) ? firstPokemon : secondPokemon;
        }
    }

    public battleRound(initiator: Pokemon, secondPokemon: Pokemon, spell: Spell){
        const damages: number = initiator.calculateDamages(secondPokemon, spell);
        initiator.dealDamage(secondPokemon, damages);
    }

    public arePokemonsAlive(firstPokemon: Pokemon, secondPokemon: Pokemon){
        return firstPokemon.isAlive === secondPokemon.isAlive;
    }


}

export { Battle };