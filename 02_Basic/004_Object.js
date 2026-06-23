const user = new Object();

user.name = "Bankal mavi"
user.age = 21
user.isLoggedIn = false

// console.log(Object.keys(user)) // key of entire oj for iteration we get these keys into array form 
// console.log(user.hasOwnProperty("age")) // chek 

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

const obj3 = { ...obj1, ...obj2, ...obj4 }

// console.log(obj3)

Object.values(obj3).forEach(element => {
  // console.log(element);
});

for (const key in obj3) {
  // console.log(key, obj3[key]); 
}

const Study = Symbol("isStudy")
const course = {
  name: "JavaScript",
  price: 999,
  instructur: "Hitesh",
  [Study]: true
}

// console.log(course);

const { name, price, instructur } = course
// console.log(name); // we can assess directly and easily

const { name: courseName } = course // destructure

// console.log(courseName);

let users = [
  { name: "Bankal", age: 20 },
  { name: "Ankush", age: 19 },
  { name: "Ashu", age: 18 }
]

let underAge = users.some((user) => user.age < 18)
console.log(underAge);


