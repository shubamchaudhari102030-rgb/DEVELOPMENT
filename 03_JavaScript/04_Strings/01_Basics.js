// let ww = "Shubham"
// let ll = 'SHUBHAM'
// let mm = `Shubham`

// console.log(typeof ww); //string
// console.log(typeof ll); //string
// console.log(typeof mm); //string

//console.log(ww.length); //7
//console.log(ll.length); //7
//console.log(mm.length); //7

let op1 = "Shubham";
let op2 = " Chaudhari";

console.log(op1 + op2); //Shubham Chaudhari

console.log(op1.toUpperCase()); //SHUBHAM (Sab capital letter me convert karte hai)
console.log(op2.toLowerCase()); // chaudhari (sab small letter me convert karte hai)


let str = "Shubham";
console.log(str.substring(0, 3)); //Shu  (Matlab 0 se 3 index tak ka string print karega, 3 ko include nahi karega)
// Index 0 se start hoga (Like an Array) aur 3 index tak ka string print karega, 3 ko include nahi karega


// split method

let sentense = "My name is Shubham Chaudhari";
let words = sentense.split(" "); //Split method me humne space dala hai, to ye har space ke baad alag alag word ko alag kar dega

console.log(words); //['My', 'name', 'is', 'Shubham', 'Chaudhari'] (Ye array me print karega)