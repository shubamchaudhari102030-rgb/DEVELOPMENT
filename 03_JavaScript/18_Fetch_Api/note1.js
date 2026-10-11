// ```javascript
// /*
// FETCH API IN JAVASCRIPT

// 1. Fetch API is used to send requests to a server and receive data.

// 2. fetch() returns a Promise.

// 3. then() is used to handle the result of a Promise.

// 4. catch() is used to handle errors.

// 5. response.json() converts JSON data into a JavaScript object or array.

// 6. async/await can also be used with Fetch API.

// 7. Fetch does not automatically reject a Promise for HTTP errors
//    like 404 or 500. Check response.ok to detect these errors.
// */
// ```


//Code



// 1. Send a request to the server to get user data
fetch("https://jsonplaceholder.typicode.com/users/1")

    // 2. Convert the server's response into JSON data
    .then(response => response.json())

    // 3. Receive the converted data and print it to the console
    .then(data => console.log(data))

    // 4. Handle errors if the request fails due to a network issue
    .catch(error => console.log(error));

