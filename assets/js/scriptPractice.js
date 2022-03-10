//global variables

var startBtn = document.querySelector("start");
var timerEl = document.querySelector("#countdown");
var quesNumer = document.querySelector("question-number");
var quesContent = document.querySelector("question-content");
var ansContent = document.querySelector("answer-content");
var quesIndex;
var nxtQues;
var score = 0;

//this will start the game
startBtn.addEventListener("click", startGame);






//function to start the game
function startGame (){
    nxtQues = quesList.sort(() => Math.random() - .5);
    quesIndex = 0;
    countdown();
    goToNextQuestion();
}

//function to go to the next question
function goToNextQuestion (){
    takeQues(nxtQues[quesIndex]);
}

//function to pull a question from the quesList array
function takeQues(ques){
    quesContent.innerText = quesList.ques;
    ques.ans.forEach(answer => {
        var ansBtn = document.createElement("button");
        ansBtn.innerText = answer.text;
        if (answer.correct){
            ansBtn.setAttribute("style", "background-color: #00a2ff; color: black; outline: 3px solid black;");
            score ++;
        }
        ansBtn.addEventListener("click", selectAnswer);
        ansContent.appendChild(ansBtn);
    })
}


//function for selecting the answer
function selectAnswer (element){
    var selectedAns = e.target;
    var correct = selectedAns.dataset.correct;
    setStatusClass
}




//function to start the timer
function countdown() {
    var timeLeft = 120;
    var timeInterval = setInterval(function () {
      //
      timeLeft--;
      timerEl.textContent = timeLeft + " (sec)"
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        timer.textContent = "Time is up!";
      }
      //
    }, 1000);
  }


//var for questions

var quesList = [
    {
        ques: "What is 2 + 2",
        ans: [
            { text: "4", correct: true},
            { text: "8", correct: false},
            { text: "12", correct: false},
            { text: "16", correct: false},
        ]
    }
]