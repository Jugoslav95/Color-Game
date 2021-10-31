var i = 1;
var stopLoop = false;
var timer = 800;
var firstColor = document.getElementById('colorOne');
var secondColor = document.getElementById('colorTwo');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var gameResult = document.getElementById('output');
var randomColors = ["red", "green", "purple", "blue", "yellow", "orange"];
var currentLevel = document.getElementById('level');


function myFunction() {

    gameResult.innerText = "";

    var randomNumOne = Math.floor(Math.random() * randomColors.length);
    var randomNumTwo = Math.floor(Math.random() * randomColors.length);

    currentLevel.innerText = "Level: " + i;
    
    stopLoop = false;
    startButton.disabled = true;
    stopButton.disabled = false;

    if (stopLoop === true) {
        return;
    }


    setTimeout(function() {
        if (stopLoop === false) {
            firstColor.style.backgroundColor = randomColors[randomNumOne];
            secondColor.style.backgroundColor = randomColors[randomNumTwo];
            myFunction();
        }
    }, timer)
}

function breakLoop() {
    var startButton = document.getElementById('start');
    var stopButton = document.getElementById('stop');
    stopLoop = true;
    startButton.disabled = false;
    stopButton.disabled = true;

    if (firstColor.style.backgroundColor == secondColor.style.backgroundColor) {
        gameResult.innerText = "Good Job! Level " + i + " clear!";
        i++;
        timer -= 100;
        startButton.innerText = "START LEVEL " + i;
    }
    else {
        i = 1;
        gameResult.innerText = "You Lose!";
        timer = 800;
        startButton.innerText = "START";
        currentLevel.innerText = "Level: " + i;
    }
}