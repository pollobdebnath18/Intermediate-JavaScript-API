const numbers  = [1,3,5,7,2,10,38];
const mx = Math.max(...numbers);
console.log(numbers);
console.log(...numbers);
console.log(mx);

// another example 
const person = {name:"alice",age:30};
const person2 = {...person};
person2.age=50;
console.log(person);
console.log(person2);
