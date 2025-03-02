/*
static = keyword that defines properties or methods that belong to a class it self 
rather that the objects created from that class (class owns anything static, not the objects)

*/

class MathUtil{
    static PI = 3.14159;
    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));
console.clear();

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("SreyPin");
const user3 = new User("Soknan");


console.log(user3.username);
console.log(User.userCount);
user2.sayHello();

const user4 = new User("Pearith");

User.getUserCount();