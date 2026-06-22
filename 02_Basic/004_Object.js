const user = new Object();

user.name = "Bankal mavi"
user.age = 21
user.isLoggedIn = false

console.log(Object.keys(user)) // key of entire oj for iteration we get these keys into array form 
console.log(user.hasOwnProperty("age")) // chek 

// console.log(user);

const regularUser = {
  email: "bankalmavi212@gmail.com",
  fullName: {
    userName: {
      firstname: "Bankal",
      lastName: "Mavi"
    }
  }
}

// console.log(regularUser.fullName.userName);

// merging 2 obj 


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 5: "e", 6: "f" }

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

console.log(obj3)
