// 1.
class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.department = "Commerce";
    }
}

const student1 = new Student(11, "ramu");
const student2 = new Student(22, "samu");
// console.log(student1.name, student2.id);


// 2.
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

const car1 = new Car("Toyota", 2017);  // create actual object
// console.log("My " + car1.name + " car age is " + car1.age() + " years.");


// 3.
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     play(status) {
//         return `${this.name} is playing ${status}`;
//     }
// }
// const person1 = new Person("Tamim", 37, "good");
// const person2 = new Person("Sakib", 35);
// console.log(person1.play());


// 4.
class Mes {
    constructor(name, semester) {
        this.name = name;
        this.semester = semester;
        this.upzila = "14gram";
    }
}
const man1 = new Mes("Anower", 7 + 'th');
const man2 = new Mes("Shakil", 7 + 'th');
// console.log(man1);
// console.log(man2);


// 5.
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(10, 11);
console.log(square.area);

// 6.
class Circle {
    constructor (radius) {
        this.radius = radius;
    }
    get area() {
        return this.circleArea();
    }
    circleArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle (6);
// console.log(circle.circleArea());
console.log(circle.area);