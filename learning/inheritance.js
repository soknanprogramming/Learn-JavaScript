/*
inheritance = allows a new class to inherit properties and methods 
from existing class (parent -> child)
help with code reusability
*/

class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "hewk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.eat();
console.log(rabbit.alive);
fish.swim();
rabbit.run();
