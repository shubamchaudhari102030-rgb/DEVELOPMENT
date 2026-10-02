// Default value for 'b' is 10

function add(a, b = 10) {

    return a + b;
}

console.log(add(5, 20)); // 25
console.log(add(5));     // 15



// For String 

// Default value for 'name' is "Guest"

function greet(name = "Guest") {

    return "Hello " + name;
}

console.log(greet("Shubham")); // Hello Shubham
console.log(greet());          // Hello Guest