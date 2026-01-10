import { Employee } from "./employee.js";
import { CalculateAnnualSalary, formatCurrency } from "./utils.js";


const emp1 = new Employee("siva", 1, 23);

emp1.display();
emp1.promotion("Senior Developer", 60000);
emp1.display();

console.log("Annual Salary", formatCurrency(CalculateAnnualSalary(6000)))

console.log("Calculate", formatCurrency(1233))