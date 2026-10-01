
//collection of items/elements

//JavaScript allows different types of data in array 



// Creation of array
let arr = [ 1,23,4,65,3 , 'Shubham'];
console.log(arr);

// array constructor
let brr = new Array('love' , 1 , true ,46, 85 ,'hii');
console.log(brr);

console.log(arr[4]);  // it means array ke 3rd index par kya hai..,
console.log(brr[1]); // it means array ke 1st index par kya hai...


//push is for insert an element, (Element last madhe store hote..)
arr.push('Chaudhari');
console.log(arr);

//pop is for removing the element (Last wala element remove hote)
brr.pop();
console.log(brr);

// shift is use for remove element at left side
brr.shift();
console.log(brr);

//unshift is use for add element at left side
brr.unshift('lawuerfhg');
console.log(brr);


// slice is use for print elements in parts
//excluding last index
brr.slice(1,5);
console.log(brr);


//splice is use for changing the content (Insert , replace , change...)
brr.splice(1,2,'Kunal'); // It means 1 index se 2 values remove karo and vaha par kunal add karo....









console.log(typeof(arr));
console.log(typeof(brr));



