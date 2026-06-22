// singleton obj

const objUser = new Object();

//  object literals

// declare a symbol and use it in obj as a key 

const mySym = Symbol("key1")

const user = {
  name: "Bankal Mavi",
  mySym: "mykey1", // not a symbol 
  [mySym]: "myKey2",
  age: 20,
  location: "Meerut",
  email: "mavibankal2601@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday", "Friday"]
}

// accessing an Object

// console.log(user.email);
// console.log(user["email","isLoggedIn"]);
// console.log(typeof user["mySym"]); // string
// console.log(user[mySym]);


// chnage values of obj

user.email = "bankalmavi1@gmail.com" // email get chnage
// console.log(user["email"]);

// Object.freeze(user) // now we cant make change in object it frezz the obj
user.email = "bankalmavi2708@gmail.com"  // it will not update the users mail

// console.log(user);


user.greeting = function () {
  // console.log(`Hello User ${this.name}`); 
}

// console.log(user.greeting());

const arr = [1, 2, 3, 4]

const obj = [
  {
    name: "Bankal",
    age: 20
  }, {
    name: "Ankush",
    age: 21
  }
]
console.log(typeof obj);





