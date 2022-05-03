class Card{
    constructor(nameInput, costInput){
        this.name = nameInput;
        this.cost = costInput;
    }
}

class Unit extends Card{
    constructor(nameInput, costInput, powerinput, resilienceInput) {
        super(nameInput, costInput);
        this.power = powerinput;
        this.resilience = resilienceInput;
    }
    attack(target){
        if (target instanceof Unit) {
            let play = `${this.name} attacked ${target.name}! ${target.name} lost ${this.power} RESILIENCE!`
            console.log(play);
        } 
        else {
            throw new Error("Target must be a unit!");
        }
        target.resilience -= this.power;
        return this;
    }
}

class Effect extends Card{
    constructor(nameInput, costInput, textInput, statInput, magnitudeInput){
        super(nameInput, costInput);
        this.text = textInput;
        this.stat = statInput;
        this.magnitude = magnitudeInput;
    }
    play(target){
        if (target instanceof Unit) {
            let play = `${this.name} was played on ${target.name}!`
            console.log(play);
        } 
        else {
            throw new Error("Target must be a unit!");
        }
        if (this.stat == "Resilience"){
        target.resilience += this.magnitude;
        let outcome = `${target.name}'s ${this.stat} was affected by ${this.magnitude}. ${target.name}'s ${this.stat} is now ${target.resilience}`;
        console.log(outcome);
        return this;
        }
        if (this.stat == "power"){
        target.power += this.magnitude;
        let outcome = `${target.name}'s ${this.stat} was affected by ${this.magnitude}. ${target.name}'s ${this.stat} is now ${target.power}`;
        console.log(outcome);
        return this;
        }
    }
}

let RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);

let HardAlgo = new Effect("Hard Algorithm", 2, "Increases target's resilience by 3", "Resilience", 3);

let BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

let Unhandled = new Effect("Unhandled Promise Rejection", 1, "Reduces target's resilience by 2", "Resilience", -2);

let Pair = new Effect("Pair Programming", 3, "Increases target's power by 2", "power", 2);

// console.log(RedBeltNinja, BlackBeltNinja);

HardAlgo.play(RedBeltNinja);

Unhandled.play(RedBeltNinja);

Pair.play(BlackBeltNinja);

RedBeltNinja.attack(BlackBeltNinja);

// console.log(RedBeltNinja, BlackBeltNinja);

