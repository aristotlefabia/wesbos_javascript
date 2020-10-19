// JavaScript source code
function Pizza(topping = [], customer) {
    this.topping = topping;
    this.customer = customer;
    console.log('xxx');
}


let pizza = new Pizza(['cheese', 'bacon'], 'pizzahut');
console.log('-----');
console.log(pizza);
console.log('-----');
Object.entries(pizza).forEach(e => console.log(e));

