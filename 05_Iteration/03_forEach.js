const names = ["Ankush", "Aman", "Bankal", "Kittu", "Vansh"];

// names.forEach((name) => {
//   console.log(name)
// })

// const printname = (name) => {
//   console.log(name)
// }

// names.forEach(printname)

names.forEach((name, index, arr)=>{ // it carry or have these 3 parameters 
  // console.log(name, index, arr)
})


const users = [
  {
    id: 1,
    name: "Bankal",
    age: 21,
    city: "Delhi",
    salary: 45000,
    isActive: true
  },
  {
    id: 2,
    name: "Ankush",
    age: 24,
    city: "Mumbai",
    salary: 60000,
    isActive: false
  },
  {
    id: 3,
    name: "Kittu",
    age: 22,
    city: "Delhi",
    salary: 55000,
    isActive: true
  },
  {
    id: 4,
    name: "Aman",
    age: 25,
    city: "Bengaluru",
    salary: 70000,
    isActive: true
  },
  {
    id: 5,
    name: "Kunal",
    age: 23,
    city: "Mumbai",
    salary: 50000,
    isActive: false
  }
];


// users.forEach((user)=>{
//   console.log(`${user.id} Name : ${user.name}, Age : ${user.age}, City : ${user.city}, Salary : ${user.salary}, Active : ${user.isActive}`)
// })

users.forEach(({id, name, age, city, salary, isActive})=>{
  
   console.log(`${id} Name : ${name}, Age : ${age}, City : ${city}, Salary : ${salary}, Active : ${isActive}`)
})