// Date 

const myDate = new Date();
// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())


// console.log(typeof myDate) // object
// const bookingDate = new Date("06-15-2026")

// const currentDate = Date.now()
// console.log(currentDate.toLocaleString())
// console.log(bookingDate.getTime())
// console.log(Math.floor(Date.now()/1000))

const todayDate = new Date();

console.log(
  todayDate.toLocaleDateString('default', {
    weekday: 'long'
  })
);

