const person = {
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const student = Object.create(person);
student.name = "Siva";
student.age = 23;

student.greet(); 

console.log(Object.getPrototypeOf(student)); 
console.log(student.__proto__ === person);   

