// process.stdin.resume();
// process.stdin.setEncoding('utf8');

const problemDisplay = document.getElementById("currentProblem");
const pastDisplay = document.getElementById("problems");
const answerInput = document.getElementById("answer");
const optionsDiv = document.getElementById("options")

const allOps = ["+","-", "/", "*"];

let options = {
    num1Min:2,
    num2Min:2,
    num1Max:2,
    num2Max:2,
    allowedOperators:["+"]
}

let started = false;

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
        name:"multiplication tables",
        num1Min:1,
        num2Min:1,
        num1Max:1,
        num2Max:1,
        allowedOperators:["*"],
        same:false
    },  
]

let n1 = 4;
let n2 = 4;
let op = '+';
let answer = '0';

let count = 0;
let startTime = 0;

let numDigits = 1;

//2 digit addition
//3 digit addition
//2 digit subtraction
//3 digit subtraction
//2 x1 mult
//3x1 mult
//squaring 2 digit numbers

function genRandom(n1, n2) {
    const diff = (n2-n1)+1;
    numDigits = Math.floor(Math.random()*diff+n1);
    // console.log(diff, numDigits);
    let num = 0;
    for(let i = 0; i < numDigits; i++) {
        if(i==numDigits-1) num+=genRandDigitWithout0()*10**i;
        else num+=genRandDigit()*10**i;
    }
    return num;
};

function genRandDigit() {
    return Math.floor(Math.random()*9);
}
function genRandDigitWithout0() {
    return Math.floor(Math.random()*8)+1;
}

function getRandomOp() {
    let i = Math.floor(Math.random()*options.allowedOperators.length);
    return options.allowedOperators[i];
};


function nextQuestion() {
    pastDisplay.innerHTML += `<li>${count}: ${n1} ${op} ${n2}</li>`;
    
    count++;
    if(count>=20) {
        endGame();
        return;
    }
    n1 = genRandom(options.num1Min, options.num1Max);
    if(options.same) {
        n2 = n1;
    }
    else {
    n2 = genRandom(options.num2Min, options.num2Max);
    }

    if(n2 > n1){
        const t = n2;
        n2 = n1;
        n1 = t;
    }

    op = getRandomOp();
    if(op=="+")
        answer = (n1 + n2).toString();
    else if(op=="-")
        answer = (n1 - n2).toString();
    else if(op=="/")
        answer = (n1 / n2).toString();
    else if(op=="*")
        answer = (n1 * n2).toString();

    displayQuestion();
}

function displayQuestion() {
    problemDisplay.innerHTML = `${count}: ${n1} ${op} ${n2}`
    // console.log(`${count}:`, n1, op, n2, "=");
}

function endGame() {
    const currentTime = Date.now();
    const timeTaken = currentTime - startTime;
    const seconds = timeTaken/1000;
    console.log("seconds", seconds);
}


answerInput.oninput = function(e) {
    const a = answerInput.value;
    if(a.length >= answer.length) {
        checkAnswer(a);
    }
}

function checkAnswer(e) {
    const line = e.trim();
    if(started) {
    
    // console.log(line);

    if(line==answer) {
        nextQuestion();

    }
    else {
        console.log("you are 10 ply bud");
        displayQuestion();
    }

    }
    else {
        const choice = Number(line);
        console.log(choice);
        if(choice>=0 && choice<possibleOptions.length) {
            options = possibleOptions[choice];
            
            start()
        }
    }
    answerInput.value = "";
}

// process.stdin.on("data", (e)=>{
//     const line = e.trim();
//     if(started) {
    
//     // console.log(line);

//     if(line==answer) {
//         nextQuestion();
//     }
//     else {
//         console.log("you are 10 ply bud");
//         displayQuestion();
//     }
//     }
//     else {
//         const choice = Number(line);
//         console.log(choice);
//         if(choice>=0 && choice<possibleOptions.length) {
//             options = possibleOptions[choice];
            
//             start()
//         }
//     }
// })

function init() {
    for(let i = 0; i < possibleOptions.length; i++) {
        console.log(possibleOptions[i].name, i);
        optionsDiv.innerHTML += `<button class="option-choice">${possibleOptions[i].name}</button>`
    }
    const optionDivs = document.querySelectorAll(".option-choice");
    for(let i = 0; i < optionDivs.length; i++) {
        optionDivs[i].onclick = function() {
            options = possibleOptions[i];
            start();
        }
    }
    console.log("choose an option");
}



function start() {
started = true;
count = 0;
pastDisplay.innerHTML = "";
startTime = Date.now();
nextQuestion();
}

init()

