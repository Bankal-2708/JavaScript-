const marvel_heros = ["Thor", "IronMan", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros) // it just push complete array not elements

// const all_heros = marvel_heros.concat(dc_heros) // it generate a new array and add elements not array

const all_heros = [...marvel_heros, ...dc_heros]

// console.log(all_heros);


const arr = [1, 2, [3, 4], [5, 6, [7, 8, [9]]]]

const single_array = arr.flat(Infinity) // it remove the subarrays and convert all into single one 
// console.log(single_array)


// console.log(Array.from("Bankal Mavi")); // it convert anything into array even object also
// console.log(Array.from({ name: "Bankal" })); // we need to tell to create a array of key or value otherwise it return empty array []

const s1 = 100;
const s2 = 200;
const s3 = 300;

// console.log(Array.of(s1, s2, s3)); // use for converting multiple variable, obj into array

// const names = ["Bankal Mavi", "Ankush", "Kittu"]

// names.map((name) => {
//   console.log(name.toUpperCase());
// })

// console.log(names);

// names.forEach((name) => {
//   console.log(name);
// })

// console.log(names);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const num = number.filter((num) => {
  return num % 2 === 0
})

// console.log(num)
const sum = number.reduce((acc, curr) => { // sum of all number or array 
  return acc += curr
})
// console.log(sum)

// let max = 0;

// number.forEach((num) => {
//   if (num > max) {
//     max = num;
//   }

// })

// console.log(max);

const max = number.reduce((acc, curr) => {
  return curr > acc ? curr : curr
})

// console.log(max);

const min = number.reduce((acc, curr) => {
  return curr < acc ? curr : acc
})

// console.log(min);

// let count;

// const totalEven = number.filter((num) => {
//   return num % 2 === 0
// }).length

const totalEven = number.reduce((acc, curr) => {
  return curr % 2 === 0 ? acc + 1 : acc
}, 0)

// console.log(totalEven);


const names = ["Ankush","Bankal","Kittu"]

for(let name of names){
  console.log(name);
}





