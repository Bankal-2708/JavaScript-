const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numb = nums.filter((num) => num % 2 === 0)

const greater5 = nums.filter((item) => { // if use curly bracec then we have to use return statement
  return (item > 5)
})

// console.log(numb);
// console.log(greater5);

// console.log(nums);


const totalSum = nums.reduce((acc, cur) => {
  return acc + cur
}, 0)


console.log(totalSum);

