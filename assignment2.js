// 1. Write code to display from 1 to 100 but just even numbers.

for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}


//2.  Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
function calculate(operation, num1, num2) {
    let result;
  
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Division by zero is not allowed';
        }
        break;
      default:
        result = 'Invalid operation';
    }
  
    return result;
  }
  console.log(calculate('add', 5, 3));        
  console.log(calculate('subtract', 10, 4));   
  console.log(calculate('multiply', 6, 2));    
  console.log(calculate('divide', 8, 2));   
  console.log(calculate('divide', 5, 0));      
  console.log(calculate('unknown', 2, 3));    
  

// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.

function findTax(salary) {
    let taxRate;
    let taxAmount;
  
    switch (true) {
      case (salary > 0 && salary <= 500000):
        taxRate = 0;
        break;
      case (salary > 500000 && salary <= 1000000):
        taxRate = 0.10;
        break;
      case (salary > 1000000 && salary <= 1500000):
        taxRate = 0.20;
        break;
      case (salary > 1500000):
        taxRate = 0.30;
        break;
      default:
        return "Invalid salary amount";
    }
  
    taxAmount = salary * taxRate;
    return taxAmount;
  }
  
  // 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(n1, n2) {
    const num1Str = n1.toString();
    const num2Str = n2.toString();
    let sum = 0;
  
    for (let i = 0; i < Math.max(num1Str.length, num2Str.length); i++) {
      const digit1 = i < num1Str.length ? parseInt(num1Str[i]) : 0;
      const digit2 = i < num2Str.length ? parseInt(num2Str[i]) : 0;
      sum += digit1 * digit2;
    }
    return sum;
  }
  
  const n1 = 6;
  const n2 = 34;
  console.log(sumOfProducts(n1, n2));  // Output: 24
  