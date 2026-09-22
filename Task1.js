// Part 1 — Customer Information
let name=prompt("Enter Your Name:");
let age = prompt("Enter your age:");
let gender = prompt("Enter your gender (male / female):");
if(gender==="female"){
     alert("Welcome Ms. " + name);
}else if (gender === "male") {

    alert("Welcome Mr. " + name);

} else {

    alert("Welcome " + name);

}
//Part 2 — Check Customer Eligibility
if(age<16){
    alert("You are not eligible to place an order");
} else {
    alert("You are eligible to open an account.");
}
//Part 3 — Choose an Order
let order = prompt("Choose your order: Burger, Shawarma, or Zinger");
let isValidOrder= false;
if (
    order === "Burger" ||
    order === "Shawarma" ||
    order === "Zinger"
){
    alert("Your order is being prepared");
    isValidOrder = true;
} else {
    alert("Invalid order. Please try again");
}
// Part 4 — Logical Operators
let orderStatus;
if (age >= 18 && isValidOrder) {
    orderStatus = "Order confirmed";
} else if (age < 18 || !isValidOrder) {
    orderStatus = "Order requires verification";
}
// Part 5 — Display Information

console.log("Customer Name:", name);
console.log("Age:", age);
console.log("Gender:", gender);

// Extra Challenge

let isAvailable;

if (order === "Burger" || order === "Shawarma") {
    isAvailable = true;
} else {
    isAvailable = false;
}

if (isAvailable && isValidOrder) {
    alert("Your order can be prepared");
} else {
    alert("Your order cannot be prepared");
}

// Final Order Summary

document.write("<h2>Final Order Summary</h2>");
document.write("Customer Name: " + name + "<br>");
document.write("Age: " + age + "<br>");
document.write("Gender: " + gender + "<br>");
document.write("Order: " + order + "<br>");
document.write("Order Status: " + orderStatus + "<br>");
