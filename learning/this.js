/*
this = reference to the object where THIS is used 
(the object depends on the imediate context)
person.name = this.name
*/

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function (){
        console.log(`Hi! I am ${this.name}`);
    },
    eat: function (){
        console.log(`${this.name} is eating ${this.favFood}`);
    }
};

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function (){
        console.log(`Hi I am ${person2.name}`);
    },
    eat: function (){
        console.log(`${person2.name} is eating ${person2.favFood}`);
    }
};


person1.sayHello();
person1.eat();

console.log("============================================================");

person2.sayHello();
person2.eat();

console.clear();

console.log(this);
console.log(global);

console.clear();

const person3 = {
    name: "Sreypin",
    favFood: "Rice",
    sayHello: () => {
        console.log(`Hello Me ${this.name}`);
    },
    eat: () => {
        console.log(`${this.name} is eating ${this.favFood}`);
    }
};

person3.sayHello();
person3.eat();