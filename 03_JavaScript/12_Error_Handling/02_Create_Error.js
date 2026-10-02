// throw → manually create an error

try {

    let age = 19;

    if (age < 18) {
        throw new Error("Age must be 18+");
    }

    console.log("Eligible"); // if age is moore than 18 , then it will be execute

}
catch (err) {

    console.log(err.message);
}