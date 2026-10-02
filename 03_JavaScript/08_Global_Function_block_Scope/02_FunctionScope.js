// FUNCTION SCOPE
// Variable declared inside a function = Function-scoped variable

function student() {

    let branch = "CSE";

    console.log(branch); // Accessible inside function
}

student();

// console.log(branch); // ❌ Not accessible outside function