var startButton = document.querySelector('.start-button');
var startPage = document.querySelector('.start-page');
var timeDisplay = document.querySelector('.timer');
var question = document.querySelector('h2');
var question1 = document.querySelector('.question-1');
var paragraph = document.querySelector('.paragraph');
var i = -1;
var time = 15;
var interval;
timeDisplay.textContent = time;

var questions = [
    
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "HEYHEYHEYThe condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "HOHOHOHOThe condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "HEHEHEHEThe condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "HAHAHAHAThe condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
   
  ];


startButton.addEventListener("click", function() {
    
    pause()
    renderPage()
    
    
    
 
    });


    function renderPage() {
        timer();
        i ++
        if(i == 5) {
            done();
        }else {
        question.textContent = questions[i].title;
        paragraph.textContent = questions[i].choices;
        startButton.textContent = "Submit";
        }
         }

    function timer() {

        interval = setInterval(function(){
            time--;
            timeDisplay.textContent = time;
        },1000);
    }

    function pause(){
        clearInterval(interval);
        time = 15;
        timeDisplay.textContent = time;
        
      }

      function done() {
          question.textContent = "Finished!";
          paragraph.textContent = "";
      }