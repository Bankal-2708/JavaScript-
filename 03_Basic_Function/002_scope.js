let a = 30;

const printHello = () => {
  let a = 20;
  // console.log('Inner a : ', a);
}

printHello();
// console.log('Outer a : ', a);


console.log(addOne(5))

function addOne(num) {
  return num + 1;
}


