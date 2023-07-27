//Default
let numSquares = 0;
let colors = randomColor(0);

//Initialize
let pickedColor = pickColor();
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("messageTry");
colorDisplay.textContent = pickedColor;

//Reset
let resetBtn = document.querySelector("#reset");

//Difficulty Buttons
let easyBtn = document.querySelector("#easybtn");
let medBtn = document.querySelector("#medbtn");
let hardBtn = document.querySelector("#hardbtn");

//Difficulty Buttons Logic//
easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    medBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = randomColor(numSquares); // Update the colors array
})

medBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    medBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 6;
    colors = randomColor(numSquares); // Update the colors array
})

hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    medBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 9;
    colors = randomColor(numSquares); // Update the colors array
})

//Starts Button Logic//
resetBtn.addEventListener("click", function () {
    colors = randomColor(numSquares);
    pickedColor = pickColor(); // Randomly pick a color from the updated colors array
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Puzzle";
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
            messageDisplay.textContent = "";
            colorDisplay.style.color = "#000000";
        } else {
            squares[i].style.display = "none";
        }
    }
})


//Detect if player selected correct color//
for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]; //initial colour
    squares[i].addEventListener("click", function () {
        //grab colour
        let clickedColor = this.style.background;
        if (clickedColor === pickedColor) { //compare
            messageDisplay.textContent = "Correct!";
            messageDisplay.style.color = pickedColor;
            colorDisplay.style.color = pickedColor;
            changeColor(pickedColor);
            resetBtn.textContent = "Play again?";
        } else {
            this.style.background = "#BCCDE5";
            messageDisplay.textContent = "Not this one, pick another.";
            messageDisplay.style.color = clickedColor;
        }
    })
}

//loop ends, function starts//
function changeColor(colors) {
    //loop squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors; //change to given color.
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomColor(num) {
    let array = [];
    while (array.length < num) {
        let newColor = randomColorResult();
        if (!array.includes(newColor)) {
            array.push(newColor);
        }
    }
    return array;
}


function randomColorResult() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    return "rgb(" + R + ", " + G + ", " + B + ")";
}