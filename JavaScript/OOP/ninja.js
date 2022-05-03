class Ninja{
    constructor(nameInput, healthInput){
        this.name = nameInput;
        this.health = healthInput;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        let ninjaName = `This ninja's name is ${this.name}.`;
        console.log(ninjaName);
        return this;
    }

    showStats(){
        let info = `This ninja's name is ${this.name}, their strength level is ${this.strength}, speed is ${this.speed}, and their health is ${this.health}.`;
        console.log(info);
        return this;
    }
    
    drinkSake(){
        this.health += 10;
        let drink = `${this.name} drank some sake and now their health is ${this.health}`;
        console.log(drink);
        return this;
    }

}

let Frutata = new Ninja("JP", 150);

Frutata.sayName().showStats().drinkSake();

// console.log(Frutata);
