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

  function goToNextQuestion(){

  }

  function displayHighScore(){
      if (document.getElementById("highscore").style.display == "none"){
        document.getElementById("highscore").style.display = "inherit";
      }else{
          document.getElementById("highscore").style.display = "none";
      }
  }