class product {
    constructor(id, name, qty, price) {
        this.id = id;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
}

let cartitme = [];

let product1 = new product(1, 'egg', 10, 20)
let product2 = new product(2, 'milk', 10, 170)
let product3 = new product(3, 'butter', 10, 300)
let product4 = new product(4, 'bread', 10, 80)
let product5 = new product(5, 'cold drink', 10, 50)

cartitme = [product1, product2, product3, product4, product5];

console.log(cartitme);