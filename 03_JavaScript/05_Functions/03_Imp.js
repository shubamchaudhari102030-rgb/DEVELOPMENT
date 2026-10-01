  

  //Function Declaration

function getSum(a,b,c)
{
    let sum = a+b+c;
    return sum;
}

let result = getSum(7,9,3);
console.log("Sum : " , result);



//or (Same)

//Function Expression

let getSumm = function(a,b,c)
{
    return a+b+c;
}

let resultt = getSumm(7,9,3);
console.log("Summ:" , resultt);


//arrow function

let getSummm = (a, b, c) =>
{
    let sum = a + b + c;
    return sum;
};

let resulttt = getSummm(7, 9, 3);

console.log("Sum : ", resulttt);