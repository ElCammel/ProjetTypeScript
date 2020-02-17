import {Spell} from "./Spell";
import {Stats} from "./Stats";

class Pokemon {
    name: string;
    stats: Stats;
    spells: Spell[];
    hp: number;
    experience: number;
    levelMaxXp: number;
    isAlive: boolean;
    level: number;


    constructor(name: string, stats: Stats, level: number, spells: Spell[], hp: number) {
        this.name = name;
        this.stats = stats;
        this.level = level;
        this.spells = spells;
        this.hp = hp;
        this.experience = 0;
        this.levelMaxXp = 1000;
        this.isAlive = true;
    }

    public levelUp(){
        this.level ++;
    }

    public gainXP(experience: number){
        if(experience + this.experience > this.levelMaxXp){
            this.levelUp();
            this.experience = 0;
            this.levelMaxXp *= 2;
        }
        else {
            this.experience += experience;
        }
    }

    public calculateDamages(defender: Pokemon, spell: Spell): number{
        let pokemonDefense: number = spell.special ? defender.stats.specialDefense: defender.stats.defense;

        return Math.floor(Math.floor(Math.floor(2 * this.level / 5 + 2) * this.stats.attack * spell.damage / pokemonDefense) / 50) + 2;
    }

    public dealDamage(defendor: Pokemon, damages: number){
        defendor.hp -= damages;
        console.log(this.name + " deals " + damages +" to " + defendor.name+ " which have " + defendor.hp + " hp left.");
        if(defendor.hp - damages <= 0){
            defendor.isAlive = false;
            console.log(this.name+ " have defeated " + defendor.name+".");
        }
    }
}

export { Pokemon };
