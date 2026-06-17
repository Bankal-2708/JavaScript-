let temperature = null;
let isRaining = true;

console.log("Temperature:", temperature); // Output: Temperature: null
console.log("Is it raining?", isRaining); // Output: Is it raining? true

console.log(typeof temperature); // Output: object (null is considered an object in JavaScript)
console.log(typeof isRaining); // Output: boolean
console.log(typeof undefined); // Output: undefined
console.log(typeof {}); // Output: object
console.log(typeof []); // Output: object (arrays are also considered objects in JavaScript)
console.log(typeof function () { }); // Output: function
console.log(typeof Symbol('symbol')); // Output: symbol

console.log(typeof (typeof 1));
console.log(typeof (typeof {})); // string everything

console.log(null == undefined); // Output: true (because null and undefined are loosely equal)
console.log(null === undefined); // Output: false (because null and undefined are not strictly equal)
console.log(null == 0); // Output: false (because null is only loosely equal to undefined)
console.log(undefined == 0); // Output: false (because undefined is only loosely equal to null)
console.log(NaN == NaN); // Output: false (because NaN is not equal to anything, including itself)

console.log("Type of....");
console.log(typeof NaN); // Output: number (NaN is considered a number in JavaScript)
console.log({} === {}); // Output: false (because they are different objects in memory)
console.log(null === null); // Output: true (because null is a primitive value and both sides are the same)
console.log([] === []); // Output: false (because they are different arrays in memory)
console.log(function () { } === function () { }); // Output: false (because they are different functions in memory)

console.log("adding...");

console.log("Bankal" + 1);
console.log(1 + "Bankal");
console.log(1 + "Bankal" + 2);
console.log(1 + "Bankal" + 2 + "Mavi");
console.log("1" + 2 + 1); // 121
console.log(1 + 2 + "3"); // 33
console.log("1" + "2" + 1); // 121
console.log(1 + "2" + 1); // 121

console.log("Substracting...");
console.log("Bankal" - 1); // NaN
console.log(1 - "Bankal"); // NaN
console.log(1 - "Bankal" + 1); // NaN
console.log(1 + "Bankal" - 1);// NaN

console.log("1" - 2); // - operator does not work on string so it convert string into number // -1
console.log("1" - "2" + 1);  // 0
console.log(1 - "2" - 1); -2


console.log({} + {});
console.log([] + []); // empty string
console.log({} + []);