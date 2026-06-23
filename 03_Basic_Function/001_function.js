function sum(num1, num2) { // parameters
  console.log(num1 + num2);
}

// let result = sum(2,3) // arguments
// console.log(result); // it is not returning anything


function SumOfTwoNum(num1, num2) {
  // let result = num1+num2
  // return result
  return num1 + num2
}
const result = SumOfTwoNum(2, 3)
// console.log(result);

function loginUserMsg(username = 'unknown person') { // by default
  if (username === undefined) {
    console.log("Please enter your name");
    return
  }
  return `${username} just logged in`
}

const msg = loginUserMsg()
// console.log(msg);


function calculateCartPrice(...num) {
  return num.reduce((acc, curr) => acc += curr
  )
}

// console.log(calculateCartPrice(200, 300, 400))

// pass an obj into function

const obj = {
  name : "Bankal Mavi",
  age : 20
}

function objHandle(anyObj){
  return `User name is ${anyObj.name} and age is ${anyObj.age}`
}

console.log(objHandle(obj));
