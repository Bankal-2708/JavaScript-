 

const users = [
  {name : "Ankush", city : "meerut"},
  {name : "Bankal mavi", city : "mawana"},
  {name : "Kittu", city : "meerut"}
]

const filter = users.filter(user=> user.city == 'meerut') // if we want users from one city 
// console.log(filter);

const result = users.reduce((acc,curr)=>{
  (acc[curr.city] = acc[curr.city] || []).push(curr);

  return acc
},{})

console.log(result);

