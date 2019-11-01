$(document).ready(function(){

var startButton = document.querySelector('.start-button');
var restartButton = document.querySelector('.restart-button');
var startPage = document.querySelector('.start-page');
var timeDisplay = document.querySelector('.timer');
var question = document.querySelector('h2');
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
answer5.style.display = "none";
submit.style.display = "none";
initialsForm.style.display = "none";
initialsButton.style.display = "none";
restartButton.style.display = "none";
var answersCorrect = 0;
var answersIncorrect = 0;
var usersArray = [];
var storedUsers;
var questions = [
    
    {
      title: "Who is leading the AFC North?",
      choices: ["Ravens", "Browns", "Steelers", "Bengals", "none of the above"],
      answer: "answer1"
    },
    {
      title: "Who is leading the NFC North?",
      choices: ["Bears", "Vikings", "Lions", "Packers", "none of the above"],
      answer: "answer4"
    },
    {
        title: "Who is leading the NFC East?",
        choices: ["Cowboys", "Redskins", "Eagles", "Giants", "none of the above"],
        answer: "answer3"
      },
      {
        title: "Who is leading the AFC South?",
        choices: ["Colts", "Texans", "Jaguars", "Titans", "none of the above"],
        answer: "answer1"
      },
      {
        title: "Who is leading the AFC East?",
        choices: ["Jets", "Patriots", "Bills", "Dolphins", "none of the above"],
        answer: "answer2"
      },
   
  ];

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
    answer5.style.display = "inline";
    submit.style.display = "block";
    answer1.nextSibling.textContent = " " + questions[i].choices[0];
    answer2.nextSibling.textContent = " " + questions[i].choices[1];
    answer3.nextSibling.textContent = " " + questions[i].choices[2];
    answer4.nextSibling.textContent = " " + questions[i].choices[3];
    answer5.nextSibling.textContent = " " + questions[i].choices[4];
    }}



function timer() {
      interval = setInterval(function(){
      time--;
      timeDisplay.textContent = time;
      if(time === 0) {
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
    // time = time - 10;
    timeDisplay.textContent = time;
    
  }

function done() {
      question.textContent = "Finished! Final score: " + answersCorrect;
      paragraph.textContent = " ";
      answers.textContent = "";
      initialsForm.style.display = "inline";
      initialsButton.style.display = "inline";
      // initials = document.querySelector("#initials-input").value;
      // localStorage.setItem("initials", initials);
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
      // var test = JSON.parse(localStorage.getItem("users"))
      // console.log(test)
      
      highScore()

  })
  
function clearAnswer() {
    answer1.checked = false;
    answer2.checked = false;
    answer3.checked = false;
    answer4.checked = false;
  } 

 

  function highScore() {
    question.textContent = "High Score";
    initialsForm.value = user.score;
    initialsButton.style.display = "none";
    restartButton.style.display = "block";
    }

    $(restartButton).click(function(){
      location.reload(true);
  });

    

      //   $(restartButton).click(function(){
      //     location.reload(true);
      // });

    //  restartButton.addEventListener("click", function() {


    //       event.preventDefault()
    //       restartButton.style.display = "none";
    //       initialsForm.style.display = "none";
    //       i = 0;
    //       time = 60;
    //       answersCorrect = 0;
    //       answersIncorrect = 0;
    //       x = 0;
    //       renderPage()
    //       clearAnswer()
    //       timer()
         
          
    //      })
     
     


        });
      
    


       
        