"use strict";
function createUser(user) {
    return user;
}
console.log(createUser({ id: 2, name: "Muhammad Haris", email: "jawedharis2@gmail.com", isActive: true }));
function processInput(input) {
    if (typeof (input) === "number") {
        return `Number: ${input.toString()}`;
    }
    else {
        return `String: ${input}`;
    }
}
console.log(processInput(5000)); // Output: "Number: 5000"
// ------------------------------------------------- Qno 3------------------------
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `The maker of this vehicle is ${this.make}, model is ${this.model}, made in the year ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    getInfo() {
        return `${super.getInfo()} and has ${this.doors} doors.`;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, hasSidecar) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }
    getInfo() {
        return `${super.getInfo()} and has a sidecar: ${this.hasSidecar}`;
    }
}
const objVehicle = new Car("Hyundai", "Sonata", 2021, 4);
const objMotorcycle = new Motorcycle("Toyota", "Cd70", 2015, false);
console.log(objVehicle.getInfo());
console.log(objMotorcycle.getInfo());
// ------------------------------------------------- Qno 4------------------------
class BankAccount {
    constructor(balance, accountNumber) {
        this.balance = balance;
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }
    get balanceInfo() {
        return this.balance;
    }
    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return this.balance;
        }
        else {
            console.log("Withdrawal successful");
            return (this.balance -= amount);
        }
    }
}
const newObj = new BankAccount(2000, "03017305201");
console.log(newObj.deposit(1200)); // Output: 3200
console.log(newObj.withdraw(900)); // Output: 2300
// ------------------------------------------------- Qno 5------------------------
class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
class Circles extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const shapeObj = new Rectangle(9.9, 5, "pink");
console.log(shapeObj.calculateArea());
const shapeObjCircle = new Circles(18.4, "pink");
console.log(shapeObjCircle.calculateArea());
function createProduct(product) {
    return product;
}
let products = createProduct({ id: 1, name: "Muhammad Haris", price: 5000, category: "Shalwar Kameez", religion: "Islam" });
console.log(createProduct({ id: 2, name: "Muhammad Faraz", price: 5000, category: "Pant Shirt" }));
console.log(products);
// ------------------------------------------------- Qno 7------------------------
class Employee {
    constructor(EmployeeName, salary) {
        this.EmployeeName = EmployeeName;
        this.salary = salary;
    }
    getDetails() {
        return `The Employee name is ${this.EmployeeName} and has a salary of  ${this.salary}`;
    }
}
class Developer extends Employee {
    constructor(programmingLanguage, EmployeeName, salary) {
        super(EmployeeName, salary);
        this.programmingLanguage = programmingLanguage;
    }
    getDetails() {
        return `The Employee name is ${this.EmployeeName} and has a salary of  ${this.salary} and he is a developer of ${this.programmingLanguage}`;
    }
}
class Designer extends Employee {
    constructor(EmployeeName, salary, toolUsed) {
        super(EmployeeName, salary);
        this.toolUsed = toolUsed;
    }
    getDetails() {
        return `The Employee name is ${this.EmployeeName} and has a salary of  ${this.salary} and he used  ${this.toolUsed}`;
    }
}
let myDev = new Developer("TypeScript", "Muhammad Haris", 350000);
let myDes = new Designer("Muhammad Haris", 350000, "JavaScript");
console.log(myDev);
console.log(myDes);
// ------------------------------------------------- Qno 8------------------------
class Student {
    constructor(name, grades, school, studentID) {
        this.name = name;
        this.grades = grades;
        this.school = school;
        this.studentID = studentID;
        this.name = name;
        this.grades = grades;
        this.school = school;
        this.studentID = studentID;
    }
    addgrades(grade) {
        this.grades.push(grade);
        return this.grades;
    }
    averageGrades() {
        let add = 0;
        for (let i = 0; i < this.grades.length; i++) {
            add += this.grades[i];
        }
        return add / (this.grades.length * 100);
    }
}
let myStudents = new Student("Muhammad Faraz", [], "Metropolis", 1);
console.log(myStudents.addgrades(90));
console.log(myStudents.addgrades(99));
console.log(myStudents.addgrades(88));
console.log(myStudents.averageGrades());
console.log(myStudents);
function handleResponse(data) {
    if (data.success) {
        console.log(`Data received: ${data.data}`);
    }
    else {
        console.log(`Error occurred: ${data.error}`);
    }
    return data;
}
console.log(handleResponse({ success: true, data: 'I am doing Bachelors' }));
// ------------------------------------------------- Qno 10------------------------
class Animal {
    constructor(species) {
        this.species = species;
        this.species = species;
    }
    getSpecies(myspecies) {
        return this.species = myspecies;
    }
}
class Dog extends Animal {
    constructor(species) {
        super(species);
    }
    makeSound() {
        return `Woof`;
    }
}
let dog = new Dog("Dog");
console.log(dog);
console.log(dog.makeSound());
class Cat extends Animal {
    constructor(species) {
        super(species);
        this.species = species;
    }
    makeSound() {
        return `Meow`;
    }
}
let cat = new Cat("Cat");
console.log(cat);
console.log(cat.makeSound());
// ------------------------------------------------- Qno 11------------------------
function findIndex(arr, value) {
    return arr.indexOf(value);
}
console.log(findIndex([3, 4, 5], 5));
class Mycar {
    drive() {
        return `Drive a Car`;
    }
}
class Mybike {
    ride() {
        return `Ride a Bike`;
    }
}
let myCar = new Mycar();
let mybike = new Mybike();
function useVehicle(vehicle) {
    if ("drive" in vehicle) {
        return vehicle.drive();
    }
    else {
        return vehicle.ride();
    }
}
console.log(useVehicle(myCar));
console.log(useVehicle(mybike));
function describeEmployee(emp) {
    console.log(emp.name);
    console.log(emp.age);
    console.log(emp.jobTitle);
}
let Employees = {
    name: "Muhammad Faraz",
    age: 24,
    jobTitle: "Sr Sales Promotion Officer"
};
describeEmployee(Employees);
class myDog {
    bark() {
        return `Woof!`;
    }
}
class myCat {
    Meow() {
        return `Meow`;
    }
}
let myDogObj = new myDog();
let myCatObj = new myCat();
function makeSound(pet) {
    if ("bark" in pet) {
        return pet.bark();
    }
    else {
        return pet.Meow();
    }
}
console.log(makeSound(myDogObj));
class circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    getType() {
        return "Circle";
    }
}
let myCircle = new circle(3.145);
console.log(myCircle);
console.log(myCircle.calculateArea());
console.log(myCircle.getType());
let abc = {
    name: "Hen",
    flyingspeed: 57,
    runningspeed: 88
};
//-------------------------------------------- Type Casting ---------------------------------
const app = document.getElementById("input");
console.log(app.value);
//-------------------------------------------- Generics ---------------------------------
const app3 = document.getElementById("input");
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("My new promise is resolved!");
    }, 2000);
});
myPromise.then((data) => {
    data.split(" ");
});
console.log(myPromise);
//-------------------------------------------- General Generics with different Types ---------------------------------
function GenericPromise(value) {
    return new Promise((resolve) => {
        resolve(value);
    });
}
GenericPromise("Hello").then(console.log);
GenericPromise(123).then(console.log);
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
let mymerges = merge({ name: "Haris" }, { age: 21 });
mymerges.name = "name";
// -------------------------------------------Function Type--------------------------------------------
let fun;
function add(num1, num2) {
    return num1 + num2;
}
function multiply(a, b) {
    return a * b;
}
fun = multiply;
console.log(fun(1, 3));
fun = add;
console.log(fun(1, 3));
function adds(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + num2;
    }
    else {
        throw Error("botn types are different so concatenation can't implement on it!");
    }
}
adds(1, 2);
console.log(adds("Ab", "CD").split(" "));
//# sourceMappingURL=app.js.map