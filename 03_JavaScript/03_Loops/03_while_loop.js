
//Syntax

// initialisation

// while(condition) 
// {
    // Loop Logic

    //Updation
// }


let i = 0;
while (i < 8)
{
    console.log(i);
    i++;
}

console.log("Loop is completed");


// using continue statement


let k = 0;

while (k < 8) {

    if (k == 4) {
        k++;
        continue;
        
    }

    console.log(k);
    k++;
}
console.log("Loop is completed");

//Using break statement

let j = 0;

while (j < 8) {

    if (j == 4) {
        
        break;
        j++;
    }
    console.log(j);
    j++;

}

console.log("Loop is completed");