const max = Math.max(6, 45, 34, 35, 25, 0);
const numbers = [23, 24, 25, 26, 27, 28, 29, 65]
const arrayMax = Math.max(...numbers);
console.log(arrayMax);
console.log(max);


// use spread operator to copy values
const friends = [2, 8, 4, 5, 6, 7];
const bondhu = friends;
const dosto = [...friends]
friends.push(100);
console.log(dosto);
console.log(friends);

// advanced 
const sonkha = [...friends, 101010];
console.log(sonkha);