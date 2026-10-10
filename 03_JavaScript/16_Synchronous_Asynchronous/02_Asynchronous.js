// ASYNCHRONOUS JAVASCRIPT
//  // Allows certain operations to complete later without blocking
//  // the remaining synchronous code.


  console.log("Start"); 
 setTimeout(() => { console.log("Async task"); 
 }, 2000);

  console.log("End"); 
   // Output:
  // Start
 // End 
// Async task (after 2 seconds)