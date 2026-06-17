const name = "Bankal Mavi"
const age = 20

// console.log(name + age);

const info = `Hello my name is ${name} and my age is ${age}`;
// console.log(info)
// console.log(name.__proto__)
// console.log(name.charAt(5))
// console.log(name.indexOf('a'))
// console.log(name.at(8))


// const newStr = "  Bankal     "
// console.log(newStr)
// console.log(newStr.trim()) // remove extra spaces

// const url = "https//bankalmavi.com/bankal%20/bankalmavi"
// console.log(url.replace('%20', '--'))
// console.log(url.includes('mavi'))


// console.log(name.blink())
const cap = info.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
console.log(cap)
console.log(info.toLowerCase().includes("bankal"));


