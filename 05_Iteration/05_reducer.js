const cart = [
  {
    id: 1,
    product: "Laptop",
    category: "Electronics",
    price: 65000,
    quantity: 1,
    inStock: true
  },
  {
    id: 2,
    product: "Wireless Mouse",
    category: "Electronics",
    price: 1200,
    quantity: 2,
    inStock: true
  },
  {
    id: 3,
    product: "T-Shirt",
    category: "Clothing",
    price: 799,
    quantity: 3,
    inStock: true
  },
  {
    id: 4,
    product: "Running Shoes",
    category: "Footwear",
    price: 3499,
    quantity: 1,
    inStock: false
  },
  {
    id: 5,
    product: "Water Bottle",
    category: "Accessories",
    price: 499,
    quantity: 2,
    inStock: true
  }
];

const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice);
