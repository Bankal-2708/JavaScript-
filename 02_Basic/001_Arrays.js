const arr = [1, 2, 3, 4, 5]
const arr2 = new Array(1, 2, 3, 4, 5, 6, 7)

// console.log(arr)
// console.log(arr2)

// Arrays Methods

arr.push(6, 7, 8, 9, 10) // push element from last
// arr.pop() // remove last element
// arr.shift() //remove element from starting

// console.log(arr.includes(8)) // check wheather it is present in this or  not only one arguemnt
// console.log(arr.indexOf(10))

const newArr = arr.join() // it convert num arrya into string array

// console.log(newArr) // type is string
// console.log(arr) // type is number


console.log(arr)

console.log(arr.slice(1,3)) // it does not update original array just give us a copy part of original array
console.log(arr) // original array will be same

console.log(arr.splice(1,3))  // it   update original array just give us a  real cutted part from original array
console.log(arr) // update the original array
