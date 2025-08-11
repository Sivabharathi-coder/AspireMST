export function CalculateAnnualSalary(monthlySalary){
    return monthlySalary*12;
}

export function formatCurrency(amount){
    return `${amount.toLocaleString("en-IN")}`
}