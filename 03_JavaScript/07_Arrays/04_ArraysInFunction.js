

let arr = [10,20,30,40,50];

function getSum(arr) {
    let sum =0;

    for(let index =0; index<arr.length; index++){
        sum = sum + arr[index];
    }
    return sum ;
}

let totalSum = getSum(arr);
console.log(totalSum);