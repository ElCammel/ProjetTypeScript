import {Pokemon} from "./Classes/Pokemon";
import {Battle} from "./Classes/Battle";

describe("Test initiative of pokemons during a battle:", () => {
    test("Salameche have the initiative", () => {
        const salameche: Pokemon = new Pokemon("Salameche", 5);
        const pikachu: Pokemon = new Pokemon("Pikachu", 4);
        const battle: Battle = new Battle();

        expect(battle.whichPokemonHaveTheInitiative(salameche, pikachu)).toBe(salameche);
    });
});