// this is a coding quiz.

//global variables

//vars for the start button
    //this is selecting the start quiz button at the bottom
        var startBtn = document.querySelector("#startBtn");

//vars for the timer
    //this var is selecting the box directly to the right of "Timer:"
        var timerEl = document.querySelector("#countdown");
    //this var is selecting the box that says timer
        var timer = document.querySelector("#timer");

//added Elements to section-body
    /*  <section class="section-body">
            <div id="questions">
                <div> (createQuestions)
                    <h3>
                    <h4>
                    <ol>
                        <li> *4
    */
        //vars for the body where the questions will be displayed
        //var to select the contents in the main box where the questions will be displayed.
        var questionBox = document.getElementById("questions");
        //this var creates a div, which will be inside div #questions
        var createQuestion = document.createElement("div");
    //inside the div
        //creates h3 inside div
        var createQuestionH3 = document.createElement("h3");
        //creates h4 inside div. This will display the actual question
        var createQuestionH4 = document.createElement("h4");
        //this creates an ol inside the createQuestion div.
        var answerList = document.createElement("ol");
        //this creates li inside the ol that will display the answer options to the question
        var answer1 = document.createElement("li");
        var answer2 = document.createElement("li");
        var answer3 = document.createElement("li");
        var answer4 = document.createElement("li");


    //all appends 

        questionBox.appendChild(createQuestion);
        createQuestion.appendChild(createQuestionH3);
        createQuestion.appendChild(createQuestionH4);
        createQuestion.appendChild(answerList);
        answerList.appendChild(answer1);
        answerList.appendChild(answer2);
        answerList.appendChild(answer3);
        answerList.appendChild(answer4);

    //contet for div

        //div
        // createQuestion.textContent =
        //contents for h3
        createQuestionH3.textContent = "Question # (x)" //+ questionNumber[index]; //add this part later and remove x
        //contents for h4
        createQuestionH4.textContent = "Question: "
        //content for ol
        //contents for li
        answer1.textContent = "A. " //+ answers content. One will be correct and the other 3 incorrect.;
        answer2.textContent = "B. " //+ answers content. One will be correct and the other 3 incorrect.;
        answer3.textContent = "C. " //+ answers content. One will be correct and the other 3 incorrect.;
        answer4.textContent = "D. " //+ answers content. One will be correct and the other 3 incorrect.;

    //setAttribute for each

        //div
        //createQuestion.setAttribute();

        //h3
        createQuestionH3.setAttribute("style", "font-size: 250%; outline: 5px solid #7bf343; border-radius: 5px; margin: 1rem; padding: 0.5rem;");
        //h4
        createQuestionH4.setAttribute("style", "font-size: 150%; outline: 5px solid #7bf343; border-radius: 5px; margin-top: 1rem; margin-left: 1rem; margin-right: 1rem; margin-bottom: 3.5rem; padding: 0.5rem;");
        //ol
        // answerList.setAttribute();

        //li
        answer1.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem;");
        answer2.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem;");
        answer3.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem;");
        answer4.setAttribute("style", "background-color: #b6b8b9; color: blue; outline: 1px solid black; border-radius: 5px; margin: 1rem; padding: 1.5rem;");
        // answer2.setAttribute();
        // answer3.setAttribute();
        // answer4.setAttribute();






//if you want to: think about making a rules page with a button to continue or to exit the quiz. once continue is pushed the quiz will begin.

//create a timer for the page that will be triggered later.
//this function is the timer
function countdown() {
    var timeLeft = 120;
    var timeInterval = setInterval(function () {
      //
      timeLeft--;
      timerEl.textContent = timeLeft + " (sec)"
      // YOUR CODE HERE
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        timer.textContent = "Time is up!";
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

