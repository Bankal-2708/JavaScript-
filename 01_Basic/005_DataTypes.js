// premetive data type

// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt


// Reference (Non - premetive)

// Arrays, Objects, Functions


// JS is Dynamicaly typed lang we dont need to declae a type of variable

// Array 

const name = ["Bankal Mavi", "Aman", "Ankush"];

// Object 

const detail = {
  name : "Bankal",
  age : 20,
  isStudent : true
}

// function

const myFun = function(){
  console.log("Hello Bankal");
}

const arrowFun = () => {
  console.log("Bankal Mavi");
}

// myFun();
// arrowFun();


// +++++++++++++++++++++++++++ MEMORY +++++++++++++++++++++++++++++

// stack is use for premitive data type

// in stack if we want to update the value then it give the copy of original value and let it change

let nameOne = "Bankal";
let nameTwo = nameOne;

nameTwo = "Bankal Mavi"

console.log(nameOne);
console.log(nameTwo);


// heap is use for Non - Premetive data type

// in heap if we want to update the value then it give the original value instead of copying

let userOne = {
  name : "Bankal",
  age : 20
}

let userTwo = userOne;

userTwo.name = "Bankal Mavi"

console.log(userOne);
console.log(userTwo)