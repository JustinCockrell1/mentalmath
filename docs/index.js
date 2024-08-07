// process.stdin.resume();
// process.stdin.setEncoding('utf8');

import possibleOptions from "./options.js";

const problemDisplay = document.getElementById("currentProblem");
const pastDisplay = document.getElementById("problems");
const answerInput = document.getElementById("answer");
const optionsDiv = document.getElementById("options");
const alertsDiv = document.getElementById("alerts");
const sessionTotalDisplay = document.getElementById("sessionTotal");

const totalIcon = document.getElementById("total-icon");

const pointsIndicator = document.getElementById("messages");


let sessionTotal = 0;
let streak = 0;

const allOps = ["+","-", "/", "*"];

let options = {
    num1Min:2,
    num2Min:2,
    num1Max:2,
    num2Max:2,
    allowedOperators:["+"],
    same:false
}

let started = false;

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

    count++;
    // if(count>=20) {
    //     endGame();
    //     return;
    // }

    
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
    problemDisplay.innerHTML = `${n1} ${op} ${n2}`
    // console.log(`${count}:`, n1, op, n2, "=");
}

function endGame() {
    const currentTime = Date.now();
    const timeTaken = currentTime - startTime;
    const seconds = timeTaken/1000;
    console.log("seconds", seconds);
    alertsDiv.innerHTML+= `Well done. That took you ${seconds} seconds`;
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
        problemDisplay.style.color = "green";
        // totalIcon.style.color="green";
        pastDisplay.innerHTML += `<li>${n1} ${op} ${n2} = ${answer}</li>`;
        pastDisplay.scrollTo({top:pastDisplay.scrollHeight, behavior:"smooth"});
        answerInput.value = "";
        if(localStorage.getItem("totalCorrect"))
        localStorage.setItem("totalCorrect", Number(localStorage.getItem("totalCorrect"))+1);
        else {
            localStorage.setItem("totalCorrect", 1);
        }
        
        sessionTotal++;

        pointsIndicator.classList.add("animate")
        
        streak++;
        if(streak >10) {totalIcon.style.color="black"}
        if(streak >20) {totalIcon.style.color="red"}
        if(streak >30) {totalIcon.style.color="purple"}
        if(streak >40) {totalIcon.style.color="gold"}
        if(streak >50) {totalIcon.style.color="green"}
        
        if(sessionTotal==10) {
            totalIcon.hidden = false;
        }
 
        nextQuestion();
      
    }
    else {
        problemDisplay.style.color = "red";
        streak = 0;
        // totalIcon.style.color="red";
        totalIcon.hidden = true;
      
        // alertsDiv.innerHTML += "You are 10 ply bud";
        // console.log("you are 10 ply bud");
        answerInput.value = "";
        displayQuestion();
    }

    window.setTimeout(()=>{
        problemDisplay.style.color = "black";
        // totalIcon.style.color="black";
    }, 300)
    
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

pointsIndicator.onanimationend = function() {
    pointsIndicator.classList.remove("animate");
    sessionTotalDisplay.innerHTML = sessionTotal;
}

document.getElementById("pause").onclick = function() {
    document.getElementById("menu").open = true;
    // document.getElementById("seconds").innerHTML = `${seconds}`;
}
document.getElementById("resume").onclick = function() {
    document.getElementById("menu").open = false;
}
document.getElementById("menu").onclick = function() {
    document.getElementById("menu").open = false;
}
document.getElementById("restart").onclick = function() {
    window.location.reload()
}
document.getElementById("menuArticle").onclick = function(e) {
    e.stopPropagation();
    // alert("pause");
}

function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('type');
    const indexes = myParam.split("-");
    options = possibleOptions[Number(indexes[0])][Number(indexes[1])];
    // alert(myParam);
    answerInput.focus();
    start();


}



function start() {
started = true;
count = 0;
pastDisplay.innerHTML = "";
startTime = Date.now();
nextQuestion();

}

init()

