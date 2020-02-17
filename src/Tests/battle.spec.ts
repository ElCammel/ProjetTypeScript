import {Pokemon} from "../Classes/Pokemon";
import {Battle} from "../Classes/Battle";

describe("Test initiative of pokemons during a battle:", () => {
    test("Salameche have the initiative", () => {
        var salamecheStats = {speed: 5, attack: 10, defense: 10, specialAttack: 14, specialDefense: 15};
        var pikachuStats = {speed: 4, attack: 12, defense: 8, specialAttack: 16, specialDefense: 13};
        const salameche: Pokemon = new Pokemon("Salameche", salamecheStats, 1, [], 100);
        const pikachu: Pokemon = new Pokemon("Pikachu", pikachuStats, 1, [], 100);
        const battle: Battle = new Battle();

        expect(battle.whichPokemonHaveTheInitiative(salameche, pikachu)).toBe(pikachu);
    });
});
