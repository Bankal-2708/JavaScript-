// let i = 0;

// while (i <= 1000) {
//   console.log(i, "Butki");
//   i++;
// }


// for of => Array, String

const name = "Bankal Mavi"
const latter = []
for (const ltr of name) {
  if(ltr == ' '){
    continue
  }
  latter.push(ltr)
}
// console.log(latter.length);


const map = new Map();

map.set('IND',"India")
map.set('USA','United States of America')


// console.log(map);
for (const [key, value] of map) {
  // console.log(key ,':', value)
}

const myObj = {
  name : "Bankal Mavi",
  age : 20,
  phn : "821058872"
}

for (const key in myObj) {
   
  console.log(`${key} : ${myObj[key]}`);
  
  
}