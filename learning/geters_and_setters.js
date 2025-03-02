/*
getter = special method that makes a property readable
setter = special method that makes a property writeable

validate and modify a value when reading/writing a property
*/

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHieght){
        if(newHieght > 0){
            this._hight = newHieght;
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return this._width.toFixed(1);
    }

    get height(){
        return this._hight.toFixed(1);
    }

    get area(){
        return (this._width * this._hight).toFixed(1);
    }
}

const rectangle = new Rectangle(3, 4);

//rectangle.width = -10;
rectangle.width = 10;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negetive number");
        }
    }

    get firstName(){
        return this._firstName;
    }
}

const person1 = new Person("sok", "nan", 18);


console.log(person1.firstName);
// We still access it 
console.log(person1._lastName);
console.log(person1._age);