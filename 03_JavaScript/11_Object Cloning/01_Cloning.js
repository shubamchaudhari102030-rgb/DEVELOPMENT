
// ==================================================
// OBJECT CLONING
// ==================================================

// Cloning = Creating a copy of an existing object

let student = {
    name: "Shubham",
    branch: "CSE"
};


// Spread operator (...) is used to create a copy
let studentCopy = { ...student };


// Original object
console.log(student);

// Cloned object
console.log(studentCopy);
