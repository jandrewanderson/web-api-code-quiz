//global variables

//buttons: start, next, highscore
var startBtn = document.getElementById("start");
var nextBtn = document.getElementById("next");
var highScoreBtn = document.getElementById("highscore-button");

//countdown
var timerEl = document.querySelector("#countdown");

//the answer buttons
var ansContent = document.querySelector("answer-content");
var ansValue = false;

//var for the overall score of the current run
var score = 0;

//var for the overall timer; timeLeft
var timeLeft = 120;

//eventListeners
//listeners for my buttons
startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", goToNextQuestion);
highScoreBtn.addEventListener("click", displayHighScore);


//function to start the game
function startGame (){
    countdown();
    goToNextQuestion();
}

//this is the timer
function countdown() {
    
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

//this is what will load the next question.
function goToNextQuestion(){
    if (question1){
        return;
        question2();
    }

    if (question2){
        return;
        question3();
    }
    if (question3){
        return;
        question4();
    }
    if (question4){
        return;
        question5();
    }
    if (question5){
        return;
        question6();
    }
    if (question6){
        return;
        question7();
    }
    if (question7){
        return;
        question8();
    }
    if (question8){
        return;
        question9();
    }
    if (question9){
        return;
        question10();
    }
    if (question10){
        endgame();
    }  
}


//this function will display the highscore
function displayHighScore(){
    if (document.getElementById("highscore").style.display == "none"){
    document.getElementById("highscore").style.display = "inherit";
    }else{
        document.getElementById("highscore").style.display = "none";
    }
}

var item1 = document.getElementById("item1");
var questionBody = document.getElementById("questions");
var answerContent = document.getElementById("answer-content");


function question1(){

    //variables for the question and answers
    var question = "Will I ever get this done?";
    var answers1 = "yes";
    var answers2 = "no";
    var answers3 = "maybe";
    var answers4 = "probably not";

    //creating variables for each answer button
    var questionContainer = document.createElement("div");
    questionContainer.textContent = question;
    var answerlist1 = document.createElement("button");
    answerlist1.textContent = answers1;
    var answerlist2 = document.createElement("button");
    answerlist2.textContent = answers2;
    var answerlist3 = document.createElement("button");
    answerlist3.textContent = answers3;
    var answerlist4 = document.createElement("button");
    answerlist4.textContent = answers4;
    
    //appends for the new quetsion and buttons
    answerContent.appendChild(questionContainer);
    questionContainer.appendChild(answerlist1);
    questionContainer.appendChild(answerlist2);
    questionContainer.appendChild(answerlist3);
    questionContainer.appendChild(answerlist4);

    //styling for quetsion and answers
    questionContainer.setAttribute("style", "display: flex; flex-direction: column; width: 90%; height: 90%; font-size: 200%; font-weight: 700; padding: 1rem; margin-top: 1rem;")
    answerlist1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
    answerlist2.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%;");
    answerlist3.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%;");
    answerlist4.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%;");

    //add hover effects
        //mouse on
        
        //mouse off
            // answerlist1.addEventListener("mouseout", function(event){
            //     answerlist1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem;");

    //create eventListener
    answerlist1.addEventListener("click", wrong);
    answerlist2.addEventListener("click", wrong);
    answerlist3.addEventListener("click", correct);
    answerlist4.addEventListener("click", wrong);

    function correct(){
        if (score === 0){
            score = score+1;
        }
        console.log(score);
        answerlist3.setAttribute("style", "background-color: #00a2ff; color: black; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding 1.5rem; font-size: 50%; height: 5.3rem;");
    }
    function wrong(){
        timeLeft = (timeLeft - 5);
    }

}
question1();





//this might be a way to insert questions into the body.
    // for ( var i=0; i< questions.length; i++) {
    //     var questionContainer = document.createElement("div");
    //     questionContainer.textContent = questions[i].question;

    //     var choices = questions[i].choices;
    //     for (var opt in choices) {
    //         var newBtn = document.createElement("button");
    //         answerContent.appendChild(newBtn);
    //     }
    //     answerContent.appendChild(questionContainer);
    // };