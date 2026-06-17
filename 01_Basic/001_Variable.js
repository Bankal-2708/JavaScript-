const name = "Bankal Mavi";
let age = 25;
var isStudent = true;
const studentId = 12345;
city = "India"; // This is valid because 'city' is declared without 'var', 'let', or 'const', making it a global variable.

// name = "John Doe"; // This will throw an error because 'name' is a constant and cannot be reassigned.
age = 26; // This is valid because 'age' is declared with 'let' and can be reassigned.
isStudent = false; // This is valid because 'isStudent' is declared with 'var' and can be reassigned.
// studentId = 67890; // This will throw an error because 'studentId' is a constant and cannot be reassigned.
city = "USA"; // This is valid because 'city' is a global variable and can be reassigned.

console.table([name, age, isStudent, studentId, city]);  

console.log(x,y,z);
var x = 10; // This will not throw an error because of hoisting, but it will log 'undefined' before the assignment.
let y = 20; // This will throw a ReferenceError if accessed before declaration due to the temporal dead zone.
const z = 30; // This will also throw a ReferenceError if accessed before declaration due to the temporal dead zone.