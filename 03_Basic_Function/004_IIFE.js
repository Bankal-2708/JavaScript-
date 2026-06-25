// immediate invoked function expression : executed immediately
// why : we face problem sometime due to pollution of global scope , we use this to remove tha variable or pollution of global 


(function(){

  console.log("DB Connected");
  
})();

((name)=>{
  console.log(`DB CONNECTED TWO ${name}`);
  
})('Bankal Mavi');

(()=>{
  console.log("IIFE")
})();