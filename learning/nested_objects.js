/*
nested objects = Objects inside of Objects.
Allows you to repredent more complex data structures
Child object it enclosed by a Parent Object
Person{Address{}, ContactInfo{}}
ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
*/

const person1 = {
    fullName: "Kimlang",
    age: 18,
    isStudent: true,
    hobbies: ["Reading", "Scrolling", "Gaming"],
    address: {
        streat: "N 7",
        city: "Phnom Phen",
        country: "Cambodia"
    }
}


console.log(person1.fullName);
console.log(person1.age);
console.log(person1.hobbies[0]);
//console.log(person1.address.country);

for(const property in person1.address){
    console.log(person1.address[property]);
}

// =============================================================================================

class Person{
    // ...address I think It is the lazy way to code 
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(streat, city, country){
        this.streat = streat;
        this.city = city;
        this.country = country;
    }
}

const person2 = new Person("Soknea", 22, "8 Hourse", "Kratie", "Cambodia");

console.log(person2.fullName);
console.log(person2.age);
console.log(person2.address.city);