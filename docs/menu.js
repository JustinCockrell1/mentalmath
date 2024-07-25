// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// const problemDisplay = document.getElementById("currentProblem");
// const pastDisplay = document.getElementById("problems");
// const answerInput = document.getElementById("answer");
import possibleOptions from "./options.js";

const optionsDiv = document.getElementById("options");
const alertsDiv = document.getElementById("alerts");

const allOps = ["+","-", "/", "*"];

const path = "/mentalmath";

let options = {
    num1Min:2,
    num2Min:2,
    num1Max:2,
    num2Max:2,
    allowedOperators:["+"]
}

// let started = false;


function init() {



    const types = ["Addition", "Subtraction", "Multiplication"]

    for(let i = 0; i < possibleOptions.length; i++) {
        optionsDiv.innerHTML += `<h4>${types[i]}</h4>`;
        let optionsText = "";
        optionsText += '<div class="options-box">';
        for(let j = 0; j < possibleOptions[i].length; j++) {
        console.log(possibleOptions[i].name, i);
        optionsText += `<a href=./mentalmath.html?type=${i}-${j}><button class="option-choice">${possibleOptions[i][j].name}</button></a>`
        }
        optionsText+="</div>";
        optionsDiv.innerHTML+=optionsText;
    }
    // const optionDivs = document.querySelectorAll(".option-choice");
    // for(let i = 0; i < optionDivs.length; i++) {
    //     optionDivs[i].onclick = function() {
    //         window.location.href="/mentalmath/mentalmath.html?type=" + i;
    //         // start();
    //     }
    // }
    console.log("choose an option");

    document.getElementById("score").innerHTML = localStorage.getItem("totalCorrect");
}



document.getElementById("share-btn").onclick = function() {
    navigator.share({title:"Mental Math Game", text:"Come join your friends and play this game", url:window.location.href})
}

// function start() {
// started = true;
// count = 0;
// pastDisplay.innerHTML = "";
// startTime = Date.now();
// nextQuestion();
// }

init()

