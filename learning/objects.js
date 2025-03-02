/*
object = A collection of related properties and/or method 
Can represent real world objects (people, products, places)
object = {key: value
          function()}
*/

const person1 ={
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function (){
        console.log(`Hi! I am ${this.firstName}!`);
    },
    sayBye: function (){
        console.log("Goodbey");
    },
    eat: () => {
        console.log("I am eating a Krabby Patty");
    }
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 40,
    isEmployed: false,
    sayHello: function (){
        console.log(`Hey I'm ${this.firstName} ...`);
    },
    sayBye: function (){
        console.log("Bye ...");
    },
    eat: () => {
        console.log("I am eating roast beef, chicken, and pizza");
    }
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.sayBye();
person1.eat();

console.log("=======================================");

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.sayBye();
person2.eat();

console.log("=======================================");

console.log(this);
//console.log(name);