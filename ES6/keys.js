const glass = {
  name: 'glass',
   color: 'white', 
   price: 12, 
   isCleaned: true
  };

// console.log(glass);

// const keys = Object.keys(glass);
const values = Object.values(glass);
console.log(values);
// console.log(keys);

const pair = Object.entries(glass);
console.log(pair);
// array of arrays , two dimensional arrays
// [
//   ['name', 'glass'],
//   ['color', 'golden'],
//   ['rice', 12],
//   [isCleaned, true]
// ]

const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);

// freeze
Object.freeze(glass);
glass.source ="bangladesh";
glass.price = 1200;
console.log(freeze);