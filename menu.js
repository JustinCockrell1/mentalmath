// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// const problemDisplay = document.getElementById("currentProblem");
// const pastDisplay = document.getElementById("problems");
// const answerInput = document.getElementById("answer");
const optionsDiv = document.getElementById("options");
const alertsDiv = document.getElementById("alerts");

const allOps = ["+","-", "/", "*"];

let options = {
    num1Min:2,
    num2Min:2,
    num1Max:2,
    num2Max:2,
    allowedOperators:["+"]
}

// let started = false;

const possibleOptions = [
    {
        name:"2 digit addition",
        num1Min:2,
        num2Min:2,
        num1Max:2,
        num2Max:2,
        allowedOperators:["+"],
        same:false
    },
    {
        name:"3 digit addition",
        num1Min:3,
        num2Min:3,
        num1Max:3,
        num2Max:3,
        allowedOperators:["+"],
        same:false
    },   
    {
        name:"2 digit subtraction",
        num1Min:2,
        num2Min:2,
        num1Max:2,
        num2Max:2,
        allowedOperators:["-"],
        same:false
    },   
    {
        name:"3 digit subtraction",
        num1Min:3,
        num2Min:3,
        num1Max:3,
        num2Max:3,
        allowedOperators:["-"],
        same:false
    },  
    {
        name:"2x1 multiplication",
        num1Min:2,
        num2Min:1,
        num1Max:2,
        num2Max:1,
        allowedOperators:["*"],
        same:false
    },  
    {
        name:"3x1 multiplication",
        num1Min:3,
        num2Min:1,
        num1Max:3,
        num2Max:1,
        allowedOperators:["*"],
        same:false
    },  
    {
        name:"squaring 2 digits",
        num1Min:2,
        num2Min:2,
        num1Max:2,
        num2Max:2,
        allowedOperators:["*"],
        same:true
    },
    {
        name:"2x2 multiplication",
        num1Min:2,
        num2Min:2,
        num1Max:2,
        num2Max:2,
        allowedOperators:["*"],
        same:false
    },    
    {
        name:"multiplication tables",
        num1Min:1,
        num2Min:1,
        num1Max:1,
        num2Max:1,
        allowedOperators:["*"],
        same:false
    },  
]


function init() {
    for(let i = 0; i < possibleOptions.length; i++) {
        console.log(possibleOptions[i].name, i);
        optionsDiv.innerHTML += `<button class="option-choice">${possibleOptions[i].name}</button>`
    }
    const optionDivs = document.querySelectorAll(".option-choice");
    for(let i = 0; i < optionDivs.length; i++) {
        optionDivs[i].onclick = function() {
            window.location.href="/mentalmath/mentalmath.html?type=" + i;
            // start();
        }
    }
    console.log("choose an option");
}



// function start() {
// started = true;
// count = 0;
// pastDisplay.innerHTML = "";
// startTime = Date.now();
// nextQuestion();
// }

init()

