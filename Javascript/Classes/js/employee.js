export class Employee {

    constructor(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }

    promotion(newPosition, newSalary) {
        this.position = newPosition;
        this.salary = newSalary;
        console.log(`${this.name} got ${this.salary} for the ${this.position} `)
    }

    display() {
        console.log(`ID: ${this.id}, Name: ${this.name},`);
    }
}