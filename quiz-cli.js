import Quiz from "./CardMemoryQuiz.js";

function handleCli(message) {
    console.log(message);
}



const quiz = new Quiz(options);




    process.stdin.on("data", (data)=>{
        quiz.handleInput(data.toString("utf-8").trim());
    });


