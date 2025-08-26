class Cat{
    constructor(name, sexe){
    this.name = name;
    this.sexe = sexe;
    }

    speak(){
        return `${this.name} says meow!`;
    }
}


class Dog{
    constructor(name,sexe){
    this.name = name;
    this.sexe = sexe;
    }

    speak(){
        return `${this.name} says woof!`;
    }
}


class Bird{
    constructor(name, sexe){
    this.name = name;
    this.sexe = sexe;
    }

    speak() {
        if(this.sexe === "male"){
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`;
        }
    }    
}

const ct = new Cat("Sasha", "female");
const dg = new Dog("Rufio", "male");
const birds = [
    new Bird("Pablo", "male"),
    new Bird("Mable", "female"),
];

ct.speak();
dg.speak();
birds.forEach(bird => bird.speak());
