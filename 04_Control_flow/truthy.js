// let userEmail = ["bankal@gmal.com"]
 

// if(userEmail.length > 0 && userEmail.every(item => typeof item === "string")){
//   console.log("got user email");
// } else {
//   console.log("does not got user email");
// }

const obj = {}

if(Object.keys(obj).length === 0){
  // console.log('obj is empty')
}


// null coalescing operator ??

let val;
// val = 2 ?? 3;
// val = null ?? 20
val = undefined ?? 30

// console.log(val);


const price = 10;
let buy;

price <= 80 ? buy = true : buy = false;

buy ? console.log("Buy it") : console.log("Dont but it");
 
