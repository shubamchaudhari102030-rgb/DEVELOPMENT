// CLASS IN JAVASCRIPT
// Class is a blueprint for creating objects.

class Student {

    // Constructor runs automatically when an object is created
    constructor(name, branch) {
        this.name = name;
        this.branch = branch;
    }

    // Method
    introduce() {
        console.log("Name:", this.name);
        console.log("Branch:", this.branch);
    }
}

// Creating an object
let student1 = new Student("Shubham", "CSE");

// Calling method
student1.introduce();