$(document).ready(function(){

var startButton = document.querySelector('.start-button');
var restartButton = document.querySelector('.restart-button');
var startPage = document.querySelector('.start-page');
var timeDisplay = document.querySelector('.timer');
var question = document.querySelector('h3');
var question1 = document.querySelector('.question-1');
var paragraph = document.querySelector('.paragraph');
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');
var answer5 = document.querySelector('#answer5');
var answers = document.querySelector('#answers');
var submit = document.querySelector('#submit');
var initialsForm = document.querySelector('#initials-input');
var initialsButton = document.querySelector('#initials-button');
var i = -1;
var time = 60;
var interval;
var x = 0;
var initials;
var user;
timeDisplay.textContent = time;
answer1.style.display = "none";
answer2.style.display = "none";
answer3.style.display = "none";
answer4.style.display = "none";
submit.style.display = "none";
initialsForm.style.display = "none";
initialsButton.style.display = "none";
restartButton.style.display = "none";
var answersCorrect = 0;
var answersIncorrect = 0;
var usersArray = [];



  startButton.addEventListener("click", function() {
    renderPage()
    clearAnswer()
    timer()
});

submit.addEventListener("click", function(event) {
event.preventDefault();
var selectedOption = document.querySelector('input[type=radio]:checked');
var answerQ = selectedOption.value;

      if(questions[x].answer == answerQ ) {   
          answersCorrect++  
          console.log(answersCorrect, answersIncorrect)
      } else {
        time = time - 10;
        answersIncorrect++
        console.log(answersCorrect, answersIncorrect)
      }
  renderPage()
  clearAnswer()
  x++
  });

function renderPage() {
    i ++
    if(i == 5) {
        done();
    }else {
    question.textContent = questions[i].title;
    paragraph.textContent = "";
    startButton.style.display = "none";
    answer1.style.display = "inline";
    answer2.style.display = "inline";
    answer3.style.display = "inline";
    answer4.style.display = "inline";
    
    submit.style.display = "block";
    answer1.nextSibling.textContent = " " + questions[i].choices[0];
    answer2.nextSibling.textContent = " " + questions[i].choices[1];
    answer3.nextSibling.textContent = " " + questions[i].choices[2];
    answer4.nextSibling.textContent = " " + questions[i].choices[3];
    }}



function timer() {
      interval = setInterval(function(){
      time--;
      timeDisplay.textContent = time;
      if(time <= 0) {
        time = 0;
        pause();
        done();
      }
      if(time < 10) {
      timeDisplay.style.color = "red";
      timeDisplay.style.fontSize = "25px";
      timeDisplay.style.padding = "5px";
      }
    },1000);
  }

function pause(){
    clearInterval(interval);
    timeDisplay.textContent = time;
    
  }

function done() {
      question.textContent = "Finished! Final score: " + answersCorrect;
      paragraph.textContent = " ";
      answers.textContent = "";
      initialsForm.style.display = "inline";
      initialsButton.style.display = "inline";
   
      clearAnswer()
      pause()
  }

  initialsButton.addEventListener("click", function(event) {
    event.preventDefault();
    initials = document.querySelector("#initials-input").value;
    user = {
      initials: initials,
      score: answersCorrect
    };
      usersArray.push(user);
      usersArray = usersArray.concat(JSON.parse(localStorage.getItem('users') || '[]'));
      window.localStorage.setItem('users', JSON.stringify(usersArray));
   
      question.textContent = "High Score";
      initialsForm.style.display = "none";
      initialsButton.style.display = "none";
      restartButton.style.display = "block";
      paragraph.style.display = "inline";
      answers.style.display = "inline";
      answers.style.paddingLeft = "5%";
      var highestScore = usersArray[0].score;
      var highestName = usersArray[0].initials;
    
      for(i = 0; i < usersArray.length; i++) {
        if (usersArray[i].score > highestScore) {
          highestName = usersArray[i].initials;
          highestScore = usersArray[i].score;
          paragraph.textContent = highestName;
          answers.textContent = highestScore;
        } else {
          paragraph.textContent = highestName;
          answers.textContent = highestScore;
        }
      }
     

  })
  
function clearAnswer() {
    answer1.checked = false;
    answer2.checked = false;
    answer3.checked = false;
    answer4.checked = false;
  } 

 

    $(restartButton).click(function(){
      location.reload(true);
  });

    
 });
      
    


       
        