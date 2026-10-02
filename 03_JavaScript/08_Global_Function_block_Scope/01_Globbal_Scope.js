// GLOBAL SCOPE
// Variable declared outside a function = Global variable

let name = "Shubham";

console.log(name); // Accessible globally

function greet() {
    console.log(name); // Global variable → accessible inside function
}

greet();

console.log(name); // Accessible outside function