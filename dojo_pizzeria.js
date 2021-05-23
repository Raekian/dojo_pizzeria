// var pizza = {
//     crustType: ["deep dish", "hand tossed", "thin crust"]
//     sauceType: ["traditional", "marinara", "spicy"]
//     cheeses: ["mozzarella", "feta"]
//     toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions"]
// }

function pizzaOven (crust, sauce, cheeses, toppings) {
    var pizza =  {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni","sausage"])
console.log(p1)

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(p2)

var p3 =  pizzaOven("thin crust", "spicy", "mozzarella", ["pepperoni", "hot peppers"] )
console.log(p3)

var p4 = pizzaOven("deep dish", "spicy", ["mozzarella", "feta"], ["bacon"])
console.log(p4)