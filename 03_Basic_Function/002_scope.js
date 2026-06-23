let a = 30;

const printHello = () => {
  let a = 20;
  console.log('Inner a : ', a);
}

printHello();
console.log('Outer a : ', a);
