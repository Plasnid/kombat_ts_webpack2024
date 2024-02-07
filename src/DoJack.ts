/*
N A M E S: 
Amanda J.
Cassie D.
*/

import DigiPet from './DigiPet';

//DO THIS:  import Armor
import Armor from './Armor';
//DO THIS:  import OffensiveFood
import OffensiveFood from './OffensiveFood';

//DO THIS:change the name of the fighter to one of your own choosing. Make it cool
class Dojack implements DigiPet{
    //DO THIS:  you'll need to define tamName, hp
    tamName:string;
    hp:number;
    
    /*
    DO THIS: make armor for your fighter.  They are strong against what they have most of 3 caterogies:
        -fruit(strong against fruit, weak against grain)
        -meat(strong against meat, weak against fruit)
        -grain(strong against grain, weak against meat)
    */
    defenseCharacteristics: Armor = {strongAgainst: "meat", weakAgainst: "fruit"};
    //DO THIS:  declare an array called foods that is made of OffensiveFood weapons
    foods: OffensiveFood[];

    //DO THIS: have your constructor take in tamName which will be your fighters name in the ring
    constructor(tamName: string){
        this.tamName = tamName;
        this.hp = 60;
        console.log(`my name is ${this.tamName}`);

        //DO THIS:  use 'this' and foods to make an array of OffensiveFoods
        this.foods = [
            {foodName: "mushy banana", foodCat: "fruit", damage: 3},
            {foodName: "unripe watermelon", foodCat: "fruit", damage: 6},
            {foodName: "prickly pineapple", foodCat: "fruit", damage: 6},
            {foodName: "sack of oranges", foodCat: "fruit", damage: 7},
            {foodName: "frozen roast", foodCat: "meat", damage: 5},
            {foodName: "sharp chicken bones", foodCat: "meat", damage: 6},
            {foodName: "10 pound steak", foodCat: "meat", damage: 7},
            {foodName: "stale bran muffins", foodCat: "grain", damage: 6},
            {foodName: "burnt pizza crust", foodCat: "grain", damage: 7},
            {foodName: "20 pound bag of flour", foodCat: "grain", damage: 7}
        ]
    }

    //DO THIS:  make a function that will return your fighters name
    public getFighterName(): string {
        return this.tamName;
    }

    //DO THIS:  make a defend function that will return the users Armor
    public defend(): Armor {
        return this.defenseCharacteristics;
    }

    //DO THIS:  make an attack function that will return a random OffensiveFood weapon
    public attack(): OffensiveFood {
        return this.foods[Math.floor(Math.random() * this.foods.length)];
    }

    //DO THIS:  make a takeDamage function that takes in a number and reduces hp
    public takeDamage(damage: number): void {
        this.hp-= damage;
    }

    //DO THIS:  make a getHP function that will return the users current hp
    public getHP(): number {
        return this.hp;
    }
}

//DO THIS:  change FighterA to your fighters cool class name

export default Dojack;
