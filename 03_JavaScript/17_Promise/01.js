// Promise in JavaScript

// A Promise is an object used to handle asynchronous operations.

// Three states:

// Pending: Operation is in progress.
// Fulfilled: Operation completed successfully.
// Rejected: Operation failed.

// Methods:

// .then() — Handles success.
// .catch() — Handles errors.
// .finally() — Executes after the Promise settles.

let firstPromise = new Promise((resolve, reject) => {

    console.log("Shubham");
    resolved(1001);

} );




/*
Promise in JavaScript:

1. Promise handles asynchronous operations.

2. Promise has 3 states:
   - Pending: Operation is still running.
   - Fulfilled: Operation completed successfully.
   - Rejected: Operation failed.

3. Important methods:
   - then(): Handles success.
   - catch(): Handles errors.
   - finally(): Runs after success or failure.

4. Promise is created using new Promise().

5. resolve(): Marks the Promise as successful.
   reject(): Marks the Promise as failed.
*/

// Example:
const myPromise = new Promise((resolve, reject) => {
    resolve("Success!");
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Finished"));