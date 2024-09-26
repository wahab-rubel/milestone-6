// var : no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign


const money = 25;
const rich = money + 50;
console.log(rich);


let count = 0;
count = count + 1;
console.log(count);

const numbers = [1, 2, 3, 4, 5];

numbers[2] = 55;
numbers.push(12, 13, 14, 15);
console.log(numbers);

// object 
const student = {
  name: 'Student',
  class: 10,
  age: 16,
}

student.age = 20;
console.log(student);


// loop 

let sum = 0;
for(let i = 0; i < 10; i++){
  const num = i;
  sum = sum + num;
}
console.log(sum);