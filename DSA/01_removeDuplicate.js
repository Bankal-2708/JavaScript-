 const arr = [1,2,3,4,2,3];
 
 const remove = arr.filter((item, index)=>arr.indexOf(item) === index)
 
 console.log(remove)