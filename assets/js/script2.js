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
var bestScores;

//var for the overall timer; timeLeft
var timeLeft = 30;

//eventListeners
//listeners for my buttons
startBtn.addEventListener("click", startGame);
highScoreBtn.addEventListener("click", displayHighScore);


//function to start the game
function startGame (){
    countdown();
    goToQuestion1();
}

//this is the timer
function countdown() {
    
    var timeInterval = setInterval(function () {
      //
      timeLeft--;
      timerEl.textContent = timeLeft + " (sec)"
      if (timeLeft <= 0) {
        clearInterval(timeInterval);
        timer.textContent = "Time is up!";
        //this will force the game to end once time runs out.
        endGame();
        //this will generate the prompt so it does not go twice.
        bestScores = prompt("Enter your initials to save your high score.")
        if (bestScores === null){
            return; //if user hits cancel the high score will not be tracked by their name.
        }
        //now 
      }
      //
    }, 1000);
}

//this is what will load the next question.
function goToQuestion1(){
    question1();
}
function goToQuestion2(){
    question2();
}
function goToQuestion3(){
    question3();
}
function goToQuestion4(){
    question4();
}
function goToQuestion5(){
    question5();
}
function goToQuestion6(){
    question6();
}
function goToQuestion7(){
    question7();
}
function goToQuestion8(){
    question8();
}
function goToQuestion9(){
    question9();
}
function goToQuestion10(){
    question10();
}
function goToQuestion1x(){
    question1x();
}
function goToQuestion2x(){
    question2x();
}

//this function will end the game. set timeLeft to 0 if there is still time left. log score into local storage. local storage will then add info to highscore display. A prompt will come up to allow the player to insert their score.
function endGame(){
    timeLeft = 0;
    displayHighScore();
}
    
//this function will display the highscore
function displayHighScore(){
    if (document.getElementById("highscore").style.display == "none"){
    document.getElementById("highscore").style.display = "inherit";
    }else{
        document.getElementById("highscore").style.display = "none";
    }
}



































//ALL OF THE QUESTIONS ARE IN THE NEXT SECTIONS

var item1 = document.getElementById("item1");
var questionBody = document.getElementById("questions");
var answerContent = document.getElementById("answer-content");
var buttonSection = document.getElementById("start-button");

// var nextBtn = document.createElement("button");
    // nextBtn.textContent = "Next"
    // //append button for next
    // buttonSection.appendChild(nextBtn);
    // //button event listener
    // nextBtn.addEventListener("click", goToQuestion2);

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
        answerlist1.addEventListener("mouseover", function(){
            answerlist1.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist2.addEventListener("mouseover", function(){
            answerlist2.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist3.addEventListener("mouseover", function(){
            answerlist3.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist4.addEventListener("mouseover", function(){
            answerlist4.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        //mouse off
        answerlist1.addEventListener("mouseout", function(){
            answerlist1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist2.addEventListener("mouseout", function(){
            answerlist2.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist3.addEventListener("mouseout", function(){
            answerlist3.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist4.addEventListener("mouseout", function(){
            answerlist4.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });

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
        //removeChild to make space for the next question
        answerContent.removeChild(questionContainer);
        questionContainer.removeChild(answerlist1);
        questionContainer.removeChild(answerlist2);
        questionContainer.removeChild(answerlist3);
        questionContainer.removeChild(answerlist4);
        question2();
    }
    function wrong(){
        timeLeft = (timeLeft - 5);
    }

}

function question2(){

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
        answerlist1.addEventListener("mouseover", function(){
            answerlist1.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist2.addEventListener("mouseover", function(){
            answerlist2.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist3.addEventListener("mouseover", function(){
            answerlist3.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist4.addEventListener("mouseover", function(){
            answerlist4.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        //mouse off
        answerlist1.addEventListener("mouseout", function(){
            answerlist1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist2.addEventListener("mouseout", function(){
            answerlist2.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist3.addEventListener("mouseout", function(){
            answerlist3.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist4.addEventListener("mouseout", function(){
            answerlist4.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });

    //create eventListener
    answerlist1.addEventListener("click", wrong);
    answerlist2.addEventListener("click", wrong);
    answerlist3.addEventListener("click", correct);
    answerlist4.addEventListener("click", wrong);

    function correct(){
        if (score === 1){
            score = score+1;
        }
        console.log(score);
        answerlist3.setAttribute("style", "background-color: #00a2ff; color: black; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding 1.5rem; font-size: 50%; height: 5.3rem;");
        //removeChild to make space for the next question
        answerContent.removeChild(questionContainer);
        questionContainer.removeChild(answerlist1);
        questionContainer.removeChild(answerlist2);
        questionContainer.removeChild(answerlist3);
        questionContainer.removeChild(answerlist4);
        question3();
    }
    function wrong(){
        timeLeft = (timeLeft - 5);
    }

}
function question3(){

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
        answerlist1.addEventListener("mouseover", function(){
            answerlist1.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist2.addEventListener("mouseover", function(){
            answerlist2.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist3.addEventListener("mouseover", function(){
            answerlist3.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist4.addEventListener("mouseover", function(){
            answerlist4.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        //mouse off
        answerlist1.addEventListener("mouseout", function(){
            answerlist1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist2.addEventListener("mouseout", function(){
            answerlist2.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist3.addEventListener("mouseout", function(){
            answerlist3.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist4.addEventListener("mouseout", function(){
            answerlist4.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });

    //create eventListener
    answerlist1.addEventListener("click", wrong);
    answerlist2.addEventListener("click", wrong);
    answerlist3.addEventListener("click", correct);
    answerlist4.addEventListener("click", wrong);

    function correct(){
        if (score === 2){
            score = score+1;
        }
        console.log(score);
        answerlist3.setAttribute("style", "background-color: #00a2ff; color: black; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding 1.5rem; font-size: 50%; height: 5.3rem;");
        //removeChild to make space for the next question
        answerContent.removeChild(questionContainer);
        questionContainer.removeChild(answerlist1);
        questionContainer.removeChild(answerlist2);
        questionContainer.removeChild(answerlist3);
        questionContainer.removeChild(answerlist4);
        question4();
    }
    function wrong(){
        timeLeft = (timeLeft - 5);
    }

}
function question4(){

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
        answerlist1.addEventListener("mouseover", function(){
            answerlist1.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist2.addEventListener("mouseover", function(){
            answerlist2.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist3.addEventListener("mouseover", function(){
            answerlist3.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist4.addEventListener("mouseover", function(){
            answerlist4.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        //mouse off
        answerlist1.addEventListener("mouseout", function(){
            answerlist1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist2.addEventListener("mouseout", function(){
            answerlist2.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist3.addEventListener("mouseout", function(){
            answerlist3.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist4.addEventListener("mouseout", function(){
            answerlist4.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });

    //create eventListener
    answerlist1.addEventListener("click", wrong);
    answerlist2.addEventListener("click", wrong);
    answerlist3.addEventListener("click", correct);
    answerlist4.addEventListener("click", wrong);

    function correct(){
        if (score === 3){
            score = score+1;
        }
        console.log(score);
        answerlist3.setAttribute("style", "background-color: #00a2ff; color: black; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding 1.5rem; font-size: 50%; height: 5.3rem;");
        //removeChild to make space for the next question
        answerContent.removeChild(questionContainer);
        questionContainer.removeChild(answerlist1);
        questionContainer.removeChild(answerlist2);
        questionContainer.removeChild(answerlist3);
        questionContainer.removeChild(answerlist4);
        question5();
    }
    function wrong(){
        timeLeft = (timeLeft - 5);
    }

}
function question5(){

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
        answerlist1.addEventListener("mouseover", function(){
            answerlist1.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist2.addEventListener("mouseover", function(){
            answerlist2.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist3.addEventListener("mouseover", function(){
            answerlist3.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist4.addEventListener("mouseover", function(){
            answerlist4.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        //mouse off
        answerlist1.addEventListener("mouseout", function(){
            answerlist1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist2.addEventListener("mouseout", function(){
            answerlist2.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist3.addEventListener("mouseout", function(){
            answerlist3.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist4.addEventListener("mouseout", function(){
            answerlist4.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });

    //create eventListener
    answerlist1.addEventListener("click", wrong);
    answerlist2.addEventListener("click", wrong);
    answerlist3.addEventListener("click", correct);
    answerlist4.addEventListener("click", wrong);

    function correct(){
        if (score === 4){
            score = score+1;
        }
        console.log(score);
        answerlist3.setAttribute("style", "background-color: #00a2ff; color: black; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding 1.5rem; font-size: 50%; height: 5.3rem;");
        //removeChild to make space for the next question
        answerContent.removeChild(questionContainer);
        questionContainer.removeChild(answerlist1);
        questionContainer.removeChild(answerlist2);
        questionContainer.removeChild(answerlist3);
        questionContainer.removeChild(answerlist4);
        question6();
    }
    function wrong(){
        timeLeft = (timeLeft - 5);
    }

}

function question6(){

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
        answerlist1.addEventListener("mouseover", function(){
            answerlist1.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist2.addEventListener("mouseover", function(){
            answerlist2.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist3.addEventListener("mouseover", function(){
            answerlist3.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist4.addEventListener("mouseover", function(){
            answerlist4.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        //mouse off
        answerlist1.addEventListener("mouseout", function(){
            answerlist1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist2.addEventListener("mouseout", function(){
            answerlist2.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist3.addEventListener("mouseout", function(){
            answerlist3.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist4.addEventListener("mouseout", function(){
            answerlist4.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });

    //create eventListener
    answerlist1.addEventListener("click", wrong);
    answerlist2.addEventListener("click", wrong);
    answerlist3.addEventListener("click", correct);
    answerlist4.addEventListener("click", wrong);

    function correct(){
        if (score === 5){
            score = score+1;
        }
        console.log(score);
        answerlist3.setAttribute("style", "background-color: #00a2ff; color: black; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding 1.5rem; font-size: 50%; height: 5.3rem;");
        //removeChild to make space for the next question
        answerContent.removeChild(questionContainer);
        questionContainer.removeChild(answerlist1);
        questionContainer.removeChild(answerlist2);
        questionContainer.removeChild(answerlist3);
        questionContainer.removeChild(answerlist4);
        question7();
    }
    function wrong(){
        timeLeft = (timeLeft - 5);
    }

}
function question7(){

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
        answerlist1.addEventListener("mouseover", function(){
            answerlist1.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist2.addEventListener("mouseover", function(){
            answerlist2.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist3.addEventListener("mouseover", function(){
            answerlist3.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist4.addEventListener("mouseover", function(){
            answerlist4.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        //mouse off
        answerlist1.addEventListener("mouseout", function(){
            answerlist1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist2.addEventListener("mouseout", function(){
            answerlist2.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist3.addEventListener("mouseout", function(){
            answerlist3.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist4.addEventListener("mouseout", function(){
            answerlist4.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });

    //create eventListener
    answerlist1.addEventListener("click", wrong);
    answerlist2.addEventListener("click", wrong);
    answerlist3.addEventListener("click", correct);
    answerlist4.addEventListener("click", wrong);

    function correct(){
        if (score === 6){
            score = score+1;
        }
        console.log(score);
        answerlist3.setAttribute("style", "background-color: #00a2ff; color: black; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding 1.5rem; font-size: 50%; height: 5.3rem;");
        //removeChild to make space for the next question
        answerContent.removeChild(questionContainer);
        questionContainer.removeChild(answerlist1);
        questionContainer.removeChild(answerlist2);
        questionContainer.removeChild(answerlist3);
        questionContainer.removeChild(answerlist4);
        question8();
    }
    function wrong(){
        timeLeft = (timeLeft - 5);
    }

}
function question8(){

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
        answerlist1.addEventListener("mouseover", function(){
            answerlist1.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist2.addEventListener("mouseover", function(){
            answerlist2.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist3.addEventListener("mouseover", function(){
            answerlist3.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist4.addEventListener("mouseover", function(){
            answerlist4.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        //mouse off
        answerlist1.addEventListener("mouseout", function(){
            answerlist1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist2.addEventListener("mouseout", function(){
            answerlist2.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist3.addEventListener("mouseout", function(){
            answerlist3.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist4.addEventListener("mouseout", function(){
            answerlist4.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });

    //create eventListener
    answerlist1.addEventListener("click", wrong);
    answerlist2.addEventListener("click", wrong);
    answerlist3.addEventListener("click", correct);
    answerlist4.addEventListener("click", wrong);

    function correct(){
        if (score === 7){
            score = score+1;
        }
        console.log(score);
        answerlist3.setAttribute("style", "background-color: #00a2ff; color: black; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding 1.5rem; font-size: 50%; height: 5.3rem;");
        //removeChild to make space for the next question
        answerContent.removeChild(questionContainer);
        questionContainer.removeChild(answerlist1);
        questionContainer.removeChild(answerlist2);
        questionContainer.removeChild(answerlist3);
        questionContainer.removeChild(answerlist4);
        question9();
    }
    function wrong(){
        timeLeft = (timeLeft - 5);
    }

}
function question9(){

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
        answerlist1.addEventListener("mouseover", function(){
            answerlist1.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist2.addEventListener("mouseover", function(){
            answerlist2.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist3.addEventListener("mouseover", function(){
            answerlist3.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist4.addEventListener("mouseover", function(){
            answerlist4.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        //mouse off
        answerlist1.addEventListener("mouseout", function(){
            answerlist1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist2.addEventListener("mouseout", function(){
            answerlist2.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist3.addEventListener("mouseout", function(){
            answerlist3.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist4.addEventListener("mouseout", function(){
            answerlist4.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });

    //create eventListener
    answerlist1.addEventListener("click", wrong);
    answerlist2.addEventListener("click", wrong);
    answerlist3.addEventListener("click", correct);
    answerlist4.addEventListener("click", wrong);

    function correct(){
        if (score === 8){
            score = score+1;
        }
        console.log(score);
        answerlist3.setAttribute("style", "background-color: #00a2ff; color: black; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding 1.5rem; font-size: 50%; height: 5.3rem;");
        //removeChild to make space for the next question
        answerContent.removeChild(questionContainer);
        questionContainer.removeChild(answerlist1);
        questionContainer.removeChild(answerlist2);
        questionContainer.removeChild(answerlist3);
        questionContainer.removeChild(answerlist4);
        question10();
    }
    function wrong(){
        timeLeft = (timeLeft - 5);
    }

}
function question10(){

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
        answerlist1.addEventListener("mouseover", function(){
            answerlist1.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist2.addEventListener("mouseover", function(){
            answerlist2.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist3.addEventListener("mouseover", function(){
            answerlist3.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist4.addEventListener("mouseover", function(){
            answerlist4.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        //mouse off
        answerlist1.addEventListener("mouseout", function(){
            answerlist1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist2.addEventListener("mouseout", function(){
            answerlist2.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist3.addEventListener("mouseout", function(){
            answerlist3.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist4.addEventListener("mouseout", function(){
            answerlist4.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });

    //create eventListener
    answerlist1.addEventListener("click", wrong);
    answerlist2.addEventListener("click", wrong);
    answerlist3.addEventListener("click", correct);
    answerlist4.addEventListener("click", wrong);

    function correct(){
        if (score === 9){
            score = score+1;
        }
        console.log(score);
        answerlist3.setAttribute("style", "background-color: #00a2ff; color: black; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding 1.5rem; font-size: 50%; height: 5.3rem;");
        //removeChild to make space for the next question
        answerContent.removeChild(questionContainer);
        questionContainer.removeChild(answerlist1);
        questionContainer.removeChild(answerlist2);
        questionContainer.removeChild(answerlist3);
        questionContainer.removeChild(answerlist4);
        question1x();
    }
    function wrong(){
        timeLeft = (timeLeft - 5);
    }

}
function question1x(){

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
        answerlist1.addEventListener("mouseover", function(){
            answerlist1.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist2.addEventListener("mouseover", function(){
            answerlist2.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist3.addEventListener("mouseover", function(){
            answerlist3.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist4.addEventListener("mouseover", function(){
            answerlist4.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        //mouse off
        answerlist1.addEventListener("mouseout", function(){
            answerlist1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist2.addEventListener("mouseout", function(){
            answerlist2.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist3.addEventListener("mouseout", function(){
            answerlist3.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist4.addEventListener("mouseout", function(){
            answerlist4.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });

    //create eventListener
    answerlist1.addEventListener("click", wrong);
    answerlist2.addEventListener("click", wrong);
    answerlist3.addEventListener("click", correct);
    answerlist4.addEventListener("click", wrong);

    function correct(){
        if (score === 10){
            score = score+1;
        }
        console.log(score);
        answerlist3.setAttribute("style", "background-color: #00a2ff; color: black; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding 1.5rem; font-size: 50%; height: 5.3rem;");
        //removeChild to make space for the next question
        answerContent.removeChild(questionContainer);
        questionContainer.removeChild(answerlist1);
        questionContainer.removeChild(answerlist2);
        questionContainer.removeChild(answerlist3);
        questionContainer.removeChild(answerlist4);
        question2x();
    }
    function wrong(){
        timeLeft = (timeLeft - 5);
    }

}
function question2x(){

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
        answerlist1.addEventListener("mouseover", function(){
            answerlist1.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist2.addEventListener("mouseover", function(){
            answerlist2.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist3.addEventListener("mouseover", function(){
            answerlist3.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        answerlist4.addEventListener("mouseover", function(){
            answerlist4.setAttribute("style", "background-color: #5c5c5c; color: blue; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size 50%; ");
        });
        //mouse off
        answerlist1.addEventListener("mouseout", function(){
            answerlist1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist2.addEventListener("mouseout", function(){
            answerlist2.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist3.addEventListener("mouseout", function(){
            answerlist3.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });
        answerlist4.addEventListener("mouseout", function(){
            answerlist4.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem; font-size: 50%; ");
        });

    //create eventListener
    answerlist1.addEventListener("click", wrong);
    answerlist2.addEventListener("click", wrong);
    answerlist3.addEventListener("click", correct);
    answerlist4.addEventListener("click", wrong);

    function correct(){
        if (score === 11){
            score = score+1;
        }
        console.log(score);
        answerlist3.setAttribute("style", "background-color: #00a2ff; color: black; outline: 3px solid black; border-radius: 5px; margin: 1rem; padding 1.5rem; font-size: 50%; height: 5.3rem;");
        //removeChild to make space for the next question
        answerContent.removeChild(questionContainer);
        questionContainer.removeChild(answerlist1);
        questionContainer.removeChild(answerlist2);
        questionContainer.removeChild(answerlist3);
        questionContainer.removeChild(answerlist4);
        endGame();
    }
    function wrong(){
        timeLeft = (timeLeft - 5);
    }

}

//END QUESTIONS






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