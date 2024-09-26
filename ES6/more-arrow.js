const difference = (x, y) => x - y;
const multiple = (first, second, third) => first * second * third;

// single parameter
const getAge = (person) => person.age;
const student = {name: 'kolimuddin', age: 45}
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[3];
const third = getThird([5, 85, 90, 12, 74, 45]);
console.log(third);

const doubleIt = num => num * 2;

// no parameter
const getPIN = () => Math.PI;
console.log(getPI());

// large arrow function. if you want to get anythings returned from this function. than you have to
// use the return keyword

const doMath = (x, y, z) => {
  const sum = x + y + z;
  const mult = x * y * z;
  const result = sum + mult;
  return result;
}
