let nameUser=document.getElementById("customerName");
let inputs=document.getElementsByTagName("input");
let buttonClass=document.getElementsByClassName("submit-button");
let orderSelect=document.querySelector("#order");

//displayOrder
function displayOrder() {

    let name = nameUser.value;

    let order = orderSelect.value;

    document.getElementById("result").innerText =
        "Hello " + name + "! Your order is " + order + ".";

}

//changeButtonColor
function changeButtonColor() {
 document.getElementById("submitBtn").style.backgroundColor= "green";
}

//resetButtonColor
function resetButtonColor() {
 document.getElementById("submitBtn").style.backgroundColor= "#333";
}

//Text Formatter
// 1. getElementById()
let textBox = document.getElementById("text-box");

// 2. getElementsByClassName()
let container = document.getElementsByClassName("controls-container")[0];

// 3. getElementsByTagName()
let allInputs =document.getElementsByTagName("input");

// 4. querySelector()
let fontSelect =document.querySelector("#fontFamily");

let sizeSelect =document.querySelector("#fontSize");



// Main Function
function updateTextStyles() {

    let font = fontSelect.value;
    let size = sizeSelect.value;
    let isItalic = document.getElementById("italic").checked;
    let isBold =document.getElementById("bold").checked;
    let isUnderline =document.getElementById("underline").checked;

    // Change text style
    textBox.style.fontFamily = font;
    textBox.style.fontSize = size;
    textBox.style.fontStyle =isItalic ? "italic" : "normal";
    textBox.style.fontWeight =isBold ? "bold" : "normal";
    textBox.style.textDecoration =isUnderline ? "underline" : "none";
}


// Do While + onclick
let i = 0;
do {

    allInputs[i].onclick = function() {
        updateTextStyles();
    };
    i++;

} while (i < allInputs.length);


// onchange
fontSelect.onchange = updateTextStyles;
sizeSelect.onchange = updateTextStyles;


// onmouseover
textBox.onmouseover = function() {
    textBox.style.backgroundColor = "#e8f4f8";
};



// onmouseout
textBox.onmouseout = function() {
    textBox.style.backgroundColor = "white";
};


// Apply default settings
updateTextStyles();



// Image Shape Changer
// getElementById()
let img = document.getElementById("target-image");
let btnCircle = document.getElementById("btn-circle");
let btnSquare = document.getElementById("btn-square");
// querySelector()
let title = document.querySelector("#main-title");
// getElementsByClassName()
let buttonsByClass =document.getElementsByClassName("shape-btn");
// getElementsByTagName()
let allButtons =document.getElementsByTagName("button");

// onclick
// Make Circle
btnCircle.onclick = function() {

    img.style.borderRadius = "50%";

};
// Make Square
btnSquare.onclick = function() {
    img.style.borderRadius = "0%";

};
