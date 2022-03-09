// this is a coding quiz.

//global variables
var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#countdown")
//if you want to: think about making a rules page with a button to continue or to exit the quiz. once continue is pushed the quiz will begin.

//create a timer for the page that will be triggered later.
function countdown() {
    var timeLeft = 120;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      //
      timeLeft--;
      timerEl.textContent = timeLeft + " (sec)"
      // YOUR CODE HERE
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        displayMessage();
      }
      //
    }, 1000);
  }


//click a button that will start the timer as well as show the first question.

//create a function that will display a question.

//create a function that will move on to the next question once an answer has been given.
//if a question is answered incorrectly, remove time from the clock.

    //here are all the questions
        /* 
            1. What does console.log() do in Javascript?
                Saves the the search history in the browser
                Creates a message in Notepad
                Displays the IP address of the device you are using
                Outputs a message to the dev console (correct)
            
            2. What is a variable in Javascript?
                A symbol standing in for an unknown numerical value in an equation
                Something that stores a data value that can be changed later on (correct)
                A common error message
                The last name of the most successful coder in history
            
            3. Which on of these is NOT a primitive data type?
                String
                Boolean
                Undefined
                Object (correct)
            
            4. What does == mean in Javascript?
                It is used as a comparison between two variables regardless of the datatype.
                It is used as a comparison between two variables and will check the datatype.
                It is used to assign a value of a variable.
                It makes the value of a variable unchangeable.
            
            5. What does === mean in Javascript?
                It is used to assign a value of a variable.
                It is used as a comparison between two variables regardless of the datatype.
                It is used as a comparison between two variables and will check the datatype.
                It makes the value of a variable unchangeable.

            6.

            x1. Which member of TMNT does this page look like?
                Michelangelo
                Leonardo (correct)
                Donatello
                Raphael

            x2. Is Gary a good teacher?
                Yes (correct)
                No 
        */

//repeat the process of displaying a question and moving to the next question when answered.

//end quiz when timer runs out or all questions are answered.

//create a function that will display the number of questions answered correctly.

//find a way to save the high scores.
//find a way to enter initials where the scores are being displayed.
//create a button to clear high scores.

//ask to play the game again.

