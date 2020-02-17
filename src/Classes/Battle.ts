import {Pokemon} from "./Pokemon";

class Battle{

    constructor() {
    }

    public whichPokemonHaveTheInitiative(firstPokemon: Pokemon, secondPokemon: Pokemon): Pokemon{
        return (firstPokemon.speed > secondPokemon.speed) ? firstPokemon : secondPokemon;
    }
}

export { Battle };