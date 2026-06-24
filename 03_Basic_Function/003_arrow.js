const user = {
  name: "Bankal",
  price: 999,
  welcomeMsg: function () {
    console.log(`${this.name} , welcome to my website`)
    return this.name
    // console.log(this);

  }
}

// user.welcomeMsg()
// user.name = "Ankush"
// user.welcomeMsg()

// console.log(this);


const sum = (x, y, z) => {
  console.log(x + y);
  console.log(z);


}

sum(2, 3, user.welcomeMsg())