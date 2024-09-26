const actor = {
  name: 'Ananto jolil',
  age: 36,
  phone: '01710498381',
  money: 1223525215251,
}
// if right side is an object left side is destructuring will be object as well

const {phone, age: wahab} = actor

//const phone = actor.phone;
//const money = actor.money
//const age = actor.age;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(wahab);
console.log(wahab);
console.log(wahab);

// array destructuring 

const numbers = [12, 66]
const [first, second] = numbers;
const [x, y] = [11, 99]

// advanced destructuring
function doubleTheme(a, b) {
  return [a *2, b * 2]
}
const [prothom, ditiyo] = doubleTheme(5, 10);
console.log(prothom, ditiyo);