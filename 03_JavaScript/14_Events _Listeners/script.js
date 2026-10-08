

//  Syntax
//  element.addEventListener("event", function() {
    // code to execute
//  });


function changeText(){
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Babbar"
}

let fpara = document.getElementById('fpara');

fpara.addEventListener('click' , changeText);



// removeEventListener()
// Removes/stops the specified event listener from an element.

// Example:
// fpara.addEventListener('click', changeText);
// fpara.removeEventListener('click', changeText);

// After removing:
// Clicking on fpara will NO LONGER call the changeText() function.

// Note:
// The same function reference must be used while
// adding and removing the event listener.



//2nd 


function alertPara(event) {
    alert("You have Clicked on para: " + event.target.textContent);

}
let mydiv = document.getElementById('wrapper');

document.addEventListener('click' , alertPara);

// **`event.target`** → Returns the element that was actually clicked.

//**`event.target.textContent`** → Gets the text/content of that clicked element.

//**Example:** If you click on a `<p>` containing **"Hello"**, it gets `"Hello"`.
