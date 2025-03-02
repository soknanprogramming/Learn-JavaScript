/*
constructor = spacial method for defining the properties and methods of objects
*/

function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){
        console.log(`You drive the ${this.model}`);
    }
    this.look = function() {
        console.log(`Color car is ${this.color}`);
    }
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// console.log("========================================");

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
console.log("========================================");


console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
console.log("========================================");

console.clear();

car1.drive();
car1.look();
console.log("========================================");

car2.drive();
car2.look();
console.log("========================================");

car3.drive();
car3.look();
console.log("========================================");

console.clear();

// Don't Repeat Yourself
const car = [car1, car2, car3];

car.forEach((obj) => {
    obj.drive();
    obj.look();
    console.log("========================================");
});