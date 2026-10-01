
//ex1

function printNumber(num) 
{
    console.log("Printing Number:" , num);
}
printNumber(6);

// num is the parameter passed to the function
// 6 is the argument passed to the function when calling it





//ex2 (Double Parameters)

function printAvg(num1, num2)
{
    let avg = (num1 + num2) / 2;
    console.log("Average: " , avg);
    // + avg & ,avg both will work, but + avg will convert the number to string and then print it, while ,avg will print the number as it is
}
printAvg(10, 20);  // o/p = 15




// ex3 (Return Statement)

function getSum(a,b,c)
{
    let sum = a+b+c;
    return sum;
}

let result = getSum(7,9,3);
console.log("Sum: " , result);
//or console.log("Sum: " , getSum(7,9,3)); // we can directly print the return value of the function without storing it in a variable


//dont durectly print the return value of the function, store it in a variable and then print it
// because if we directly print the return value of the function, it will not be stored in any variable and we will not be able to use it later in the code
// in short, return value of the function should be stored in a variable and then used later in the code



//ex4 (Function Expression)

function getMyName(firstName , lastName)
{
    let FullName = firstName + lastName;
    return FullName;
    // or return firstName + lastName; // we can directly return the concatenated string without storing it in a variable
}


let Result = getMyName("Shubham"," Chaudhari");
console.log("Full Name: " , Result); 
