
//map() is used to perform an operation on every element of an array and create a new array from the results.


let brr = [10, 20, 30, 40];

function double(num) {
    return num * 2;
}

let result = brr.map(double);

console.log(result);



z


//The filter() method id used to select elements from an array based on a condition

//ex1

let arr = [10,20,35,40 , 83, 724];

let evenArray = arr.filter((number) => {
    if(number%2==0){
        return true;
    }
    else{
        return false;
    }

});

console.log(evenArray);


//ex2

let array = ['Shubham' , 8 , true , 'Chaudhari' , null];

let ans = array.filter((Element) =>
{
    if(typeof(Element) =='string') 
    {
        return true;
    }
    else {
        return false;
    }
}

);

console.log(ans);