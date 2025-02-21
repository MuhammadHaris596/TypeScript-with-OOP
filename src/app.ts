//------------------------------------------------- Qno 1------------------------
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return user;
}

console.log(createUser({ id: 2, name: "Muhammad Haris", email: "jawedharis2@gmail.com", isActive: true }));

// //------------------------------------------------- Qno 2------------------------

type Input = number | string;

function processInput(input: Input): string {
    if (typeof(input) === "number") {
        return `Number: ${input.toString()}`;
    } else {
        return `String: ${input}`;
    }
}

console.log(processInput(5000)); // Output: "Number: 5000"

// ------------------------------------------------- Qno 3------------------------

class Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `The maker of this vehicle is ${this.make}, model is ${this.model}, made in the year ${this.year}`;
    }
}

class Car extends Vehicle {
    doors: number;

    constructor(make: string, model: string, year: number, doors: number) {
        super(make, model, year);
        this.doors = doors;
    }

    getInfo() {
        return `${super.getInfo()} and has ${this.doors} doors.`;
    }
}

class Motorcycle extends Vehicle {
    hasSidecar: boolean;

    constructor(make: string, model: string, year: number, hasSidecar: boolean) {
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
    constructor(private balance: number, readonly accountNumber: string) {
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    get balanceInfo() {
        return this.balance;
    }

    deposit(amount: number): number {
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount: number): number {
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return this.balance;
        } else {
            console.log("Withdrawal successful");
            return (this.balance -= amount);
        }
    }
}

const newObj = new BankAccount(2000, "03017305201");
console.log(newObj.deposit(1200));  // Output: 3200
console.log(newObj.withdraw(900));  // Output: 2300

// ------------------------------------------------- Qno 5------------------------

abstract class Shape {
    constructor(protected color: string) {}

    abstract calculateArea(): number;

    getColor(): string {
        return this.color;
    }
}

class Circles extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number, color: string) {
        super(color);
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

const shapeObj = new Rectangle(9.9, 5, "pink");
console.log(shapeObj.calculateArea());

const shapeObjCircle = new Circles(18.4, "pink");
console.log(shapeObjCircle.calculateArea());

// ------------------------------------------------- Qno 6------------------------

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    religion?: string;
}

function createProduct(product: Product): Product {
    return product;
}

let products = createProduct({ id: 1, name: "Muhammad Haris", price: 5000, category: "Shalwar Kameez", religion: "Islam" });
console.log(createProduct({ id: 2, name: "Muhammad Faraz", price: 5000, category: "Pant Shirt" }));
console.log(products);



// ------------------------------------------------- Qno 7------------------------


class Employee{
    constructor(public EmployeeName:String , public salary:number){}

    getDetails(){
        return `The Employee name is ${this.EmployeeName} and has a salary of  ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(public programmingLanguage:string , EmployeeName:string , salary:number){
        super(EmployeeName ,salary)
    }


    getDetails(){
         return `The Employee name is ${this.EmployeeName} and has a salary of  ${this.salary} and he is a developer of ${this.programmingLanguage}`
    }
}

class Designer extends Employee{

    constructor(EmployeeName:String ,  salary:number ,  public toolUsed:string ){
        super(EmployeeName,salary)

}



    getDetails(){
       return `The Employee name is ${this.EmployeeName} and has a salary of  ${this.salary} and he used  ${this.toolUsed}`
    }
    }


    let myDev = new Developer("TypeScript","Muhammad Haris" ,350000)
    let myDes = new Designer("Muhammad Haris",350000,"JavaScript")
    console.log(myDev);
    console.log(myDes);

    

// ------------------------------------------------- Qno 8------------------------

class Student {
    constructor(public name: string, private grades: number[], protected school: string, readonly studentID: number) {
        this.name = name;
        this.grades = grades;
        this.school = school;
        this.studentID = studentID;
    }

    addgrades(grade: number): number[] {
        this.grades.push(grade);
        return this.grades;
    }

    averageGrades(): number {
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

// ------------------------------------------------- Qno 9------------------------

type MyResponse = { success: true, data: string } | { success: false, error: string };

function handleResponse(data: MyResponse): MyResponse {
    if (data.success) {
        console.log(`Data received: ${data.data}`);
    } else {
        console.log(`Error occurred: ${data.error}`);
    }

    return data;
}

console.log(handleResponse({ success: true, data: 'I am doing Bachelors' }));

// ------------------------------------------------- Qno 10------------------------

abstract class Animal {
    constructor(protected species: string) {
        this.species = species;
    }

    abstract makeSound(): string;

    getSpecies(myspecies: string): string {
        return this.species = myspecies;
    }
}

class Dog extends Animal {
    constructor(species: string) {
        super(species);
    }

    makeSound(): string {
        return `Woof`;
    }
}

let dog = new Dog("Dog");
console.log(dog);
console.log(dog.makeSound());

class Cat extends Animal {
    constructor(species: string) {
        super(species);
        this.species = species;
    }

    makeSound(): string {
        return `Meow`;
    }
}

let cat = new Cat("Cat");
console.log(cat);
console.log(cat.makeSound());


// ------------------------------------------------- Qno 11------------------------


function findIndex<P> (arr:P[] , value:P){
    return arr.indexOf(value)
}

console.log(findIndex([3,4,5],5));


// ------------------------------------------------- Qno 12------------------------

interface car {
    drive(): string;
}

interface Bike {
    ride(): string;
}

class Mycar implements car {
    drive(): string {
        return `Drive a Car`;
    }
}

class Mybike implements Bike {
    ride(): string {
        return `Ride a Bike`;
    }
}

let myCar = new Mycar();
let mybike = new Mybike();

function useVehicle(vehicle: car | Bike) {
    if ("drive" in vehicle) {
        return vehicle.drive();
    } else {
        return vehicle.ride();
    }
}

console.log(useVehicle(myCar));
console.log(useVehicle(mybike));

// ------------------------------------------------- Qno 13------------------------

interface Person {
    name: string;
    age: number;
}

interface Employees {
    jobTitle: string;
}

type FullTimeEmployee = Person & Employees;

function describeEmployee(emp: FullTimeEmployee): void {
    console.log(emp.name);
    console.log(emp.age);
    console.log(emp.jobTitle);
}

let Employees: FullTimeEmployee = {
    name: "Muhammad Faraz",
    age: 24,
    jobTitle: "Sr Sales Promotion Officer"
};

describeEmployee(Employees);

// ------------------------------------------------- Qno 14------------------------

// import {dog} from "./type"

 interface dog {
    bark(): string;
}
interface Cats {
    Meow(): string;
}

class myDog implements dog {
    bark(): string {
        return `Woof!`;
    }
}

class myCat implements Cats {
    Meow(): string {
        return `Meow`;
    }
}

let myDogObj = new myDog();
let myCatObj = new myCat();

type Pet = Cats | dog;

function makeSound(pet: Pet) {
    if ("bark" in pet) {
        return pet.bark();
    } else {
        return pet.Meow();
    }
}

console.log(makeSound(myDogObj));

// ------------------------------------------------- Qno 15------------------------

interface Shapes {
    calculateArea(): number;
    getType(): string;
}

class circle implements Shapes {
    constructor(public radius: number) {}

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getType(): string {
        return "Circle";
    }
}

let myCircle = new circle(3.145);
console.log(myCircle);
console.log(myCircle.calculateArea());
console.log(myCircle.getType());


//--------------------------------------------Intersection Type(Merge)---------------------------------

type bird ={
    name:string
    flyingspeed:number
}

type terrestrialanimals = {
    name:string
    runningspeed:number
}


type Animals = bird & terrestrialanimals

let abc : Animals = {

    name:"Hen",
    flyingspeed:57,
    runningspeed:88
}

//-------------------------------------------- Type Casting ---------------------------------


const app = document.getElementById("input")! as HTMLInputElement
console.log(app.value); 


//-------------------------------------------- Generics ---------------------------------

const app3 = <HTMLInputElement> document.getElementById("input")

const myPromise : Promise<string> =  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("My new promise is resolved!");
    }, 2000);
})


myPromise.then((data)=>{
    data.split(" ")
})

console.log(myPromise);


//-------------------------------------------- General Generics with different Types ---------------------------------


function GenericPromise<T>(value:T){

    return new Promise((resolve) => {
        resolve(value);
    });
}

GenericPromise<string>("Hello").then(console.log); 
GenericPromise<number>(123).then(console.log);




function merge<T extends object, U extends object >( object1:T ,object2:U){
    return { ...object1, ...object2 };
}


let mymerges = merge({name:"Haris"},{age:21});
mymerges.name = "name"


// -------------------------------------------Function Type--------------------------------------------

let  fun : (x: number , y :number)=>number

function add(num1 : number , num2: number):number{
    return num1+num2
}

function multiply(a: number, b: number): number {
    return a * b;
}

fun = multiply  
console.log(fun(1,3));

fun = add
console.log(fun(1,3));


// -------------------------------------------Function Overloading--------------------------------------------

type Combined = string | number

function adds(num1 : string , num2: string):string
function adds(num1 : number , num2: number):number
function adds(num1 : Combined , num2: Combined){

    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2
    }
    if(typeof num1 === "string" && typeof num2 === "string"){
        return num1 + num2
    }
    else{
        throw Error("botn types are different so concatenation can't implement on it!")
    }
   
}

adds(1,2)

console.log(adds("Ab","CD").split( " "));


===---`135u9088..00
qqmncnclskfj99----       77===--

0rrrr