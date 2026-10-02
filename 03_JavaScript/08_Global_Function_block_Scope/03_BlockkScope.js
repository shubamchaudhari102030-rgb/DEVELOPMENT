// BLOCK SCOPE
// A variable declared inside { } = Block-scoped variable
// let and const follow block scope

if (true) {

    let age = 20;
    const name = "Shubham";

    console.log(age);  // Accessible inside block
    console.log(name); // Accessible inside block
}

// console.log(age);  // ❌ Not accessible outside block
// console.log(name); // ❌ Not accessible outside block