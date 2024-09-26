// function declarations
function add (a, b){
  
  return a + b;
}
// function expression
const add2 = function(a, b){
  return a + b;
}
// arrow function
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multiple = (num1, num2, num3, num4) => num1 * num2 * num3 * num4;


// const sum = add(5, 93);
// const sum = add4(5, 9, 2, 2);
const sum = multiple(2, 2, 2, 2);
console.log(sum);