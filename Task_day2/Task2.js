// 1. Create the Menu

let menu = [
    {
        name: "burger",
        price: 5,
        category: "Main",
        available: true
    },

    {
        name: "pizza",
        price: 7,
        category: "Main",
        available: true
    },

    {
        name: "pasta",
        price: 6,
        category: "Main",
        available: false
    },

    {
        name: "salad",
        price: 3,
        category: "Starter",
        available: true
    },

    {
        name: "juice",
        price: 2,
        category: "Drinks",
        available: false
    }
];


// 2. Show Menu

function showMenu() {

    for (let i = 0; i < menu.length; i++) {

        console.log(
            menu[i].name + " - $" +
            menu[i].price + " - " +
            menu[i].category
        );

    }
}

showMenu();


// 3. Ask the customer for food name
let foodName = prompt("Enter food name:");


// 4. Store the selected food
let selectedFood;


// 5. Keep asking until we find an available food
while (!selectedFood) {

    for (let i = 0; i < menu.length; i++) {

       

        if (!menu[i].available) {
            continue;
        }
        if (menu[i].name === foodName) {
            selectedFood = menu[i];
            break;
        }
    }


    // If food was not found

    if (!selectedFood) {

        foodName = prompt(
            "Food is not available. Enter another food:"
        );
    }
}

for (let property in selectedFood) {
    console.log(property + ": " + selectedFood[property]);
}
let quantity = Number(prompt("Enter quantity:"));
let totalPrice = Number(selectedFood.price) * quantity;
console.log("Total Price: $" + totalPrice);

document.write("<h2>Your Order</h2>");
document.write("Food: " + selectedFood.name + "<br>");
document.write("Price: $" + selectedFood.price + "<br>");
document.write("Quantity: " + quantity + "<br>");
document.write("Total: $" + totalPrice);

//function
//Q1 — Reverse Number 
function reverseNumber(number) {
   number = number.toString();
    let reversed = "";
 for (let i = number.length - 1; i >= 0; i--) {
    reversed += number[i];
  }
  return reversed;
}
console.log(reverseNumber("12345")); // Output: "54321"

//Q2 _ Even or Odd
function checkEvenOdd() {

    for (let i = 0; i <= 15; i++) {

        if (i % 2 === 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }

    }

}
checkEvenOdd();

// Q3 — Insert Dashes

function insertDashes(number) {

    let result = "";

    for (let i = 0; i < number.length; i++) {

        result = result + number[i];

        if (number[i] % 2 === 0 && number[i + 1] % 2 === 0) {
            result = result + "-";
        }
    }

    console.log(result);
}

let number = prompt("Enter a number:");
insertDashes(number);
 

//Q4 — Age Checker
function Agechecker(age) {

    if (age >= 18) {
        console.log("The user is Adult");
    } else {
        console.log("The user is Minor");
    }

}
Agechecker(20);