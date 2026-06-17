const reverseStr = (str) => {
  return str.split(" ").reverse().join(" ");
}


const revStr = (rev) => {
  return rev.split('').reverse().join("");
}


console.log(reverseStr("Bankal mavi")) // mavi Bankal
console.log(revStr("bankal")) // lakanb

