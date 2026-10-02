

// try → Code that may cause an error
// catch → Handles the error
// finally → Runs whether error occurs or not



try{
    console.log("try  blockk starts here");

    console.log(x);      // but we did not define x here, so  this is error

    console.log("try block ends here");
}

catch(err) {
    // define karte hai , error ke saath hum kya karna chahte hai

    // retry logic
    // fallback mechanm
    //logging
    //custom error
    //try again later

    console.log("I am inside catch block")
    console.log(("Your error is here: ", err));

}
