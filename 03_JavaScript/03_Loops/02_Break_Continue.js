
// Break Statement

for( let i = 1 ; i<=10 ; i++)
{
    if(i==8)         // Single Statement asel tr { }
                    // Curley Bracket ch kaam nahi... 

        break;        // when = 8 then loop stops
    
    console.log(i);
}
console.log("Loop ended");



///continue statement



for( let i = 1 ; i<=10 ; i++)
{
    if(i==8)     //skips 8 and goes to next iteration
        continue;        
    
    console.log(i);
}