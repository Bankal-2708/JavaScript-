const score = 100; // it can be anythiing string boolean etc
// console.log(score)

const age = new Number(20); // only number
// console.log(age)

// console.log(age.toString().length)
// console.log(age.toFixed(2)) // show x num of digit after '.'


const amount = 10000000
// console.log(amount.toLocaleString())


// ++++++++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-3)) // convert negative to positive
// console.log(Math.round(4.5)) // approx value round of value 
// console.log(Math.ceil(4.2)) // uper value round of 5
// console.log(Math.floor(4.7)) // lower value round of 4

// console.log(Math.max(1,6,3,7,5,9,61,6,3,7,5,9,6))
// console.log(Math.min(1,6,3,7,5,9,6))


console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 21

console.log(Math.floor(Math.random() * (max - min)) + min)