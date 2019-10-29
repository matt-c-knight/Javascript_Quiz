var startButton = document.querySelector('.start-button');
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
var i = -1;
var time = 15;
var interval;
timeDisplay.textContent = time;
answer1.style.display = "none";
answer2.style.display = "none";
answer3.style.display = "none";
answer4.style.display = "none";
answer5.style.display = "none";
submit.style.display = "none";
var answersCorrect = 0;
var answersIncorrect = 0;
var questions = [
    
    {
      title: "Who is leading the AFC North?",
      choices: ["Ravens", "Browns", "Steelers", "Bengals", "none of the above"],
      answer: "Ravens"
    },
    {
      title: "Who is leading the NFC North?",
      choices: ["Bears", "Vikings", "Lions", "Packers", "none of the above"],
      answer: "Vikings"
    },
    {
        title: "Who is leading the NFC East?",
        choices: ["Cowboys", "Redskins", "Eagles", "Giants", "none of the above"],
        answer: "Eagles"
      },
      {
        title: "Who is leading the AFC South?",
        choices: ["Colts", "Texans", "Jaguars", "Titans", "none of the above"],
        answer: "Titans"
      },
      {
        title: "Who is leading the AFC East?",
        choices: ["Patriots", "Jets", "Bills", "Dolphins", "none of the above"],
        answer: "none of the above"
      },
   
  ];


startButton.addEventListener("click", function() {
   
    pause()
    renderPage()
    clearAnswer()

    
    
    });

    submit.addEventListener("click", function(event) {
    event.preventDefault();

    if(questions[0] && answer1.checked) {     
        answersCorrect++
    } 
    if(questions[1] && answer4.checked) {
        answersCorrect++
    } 
    // if (questions[2] && answer3.checked) {
    //     answersCorrect++
    // }    
    // if (questions[3] && answer1.checked) {
    //   answersCorrect++
    // } 
    // if (questions[4] && answer1.checked) {
    //     answersCorrect++
    // } 
      console.log(answersCorrect)
    
      pause()
      renderPage()
    
      clearAnswer()
  
        
        });

    function renderPage() {
        timer();
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
        },1000);
    }

    function pause(){
        clearInterval(interval);
        time = 15;
        timeDisplay.textContent = time;
        
      }

      function done() {
          question.textContent = "Finished! Final score: " + answersCorrect;
          paragraph.textContent = " ";
          answers.textContent = "";

      }
      
      function clearAnswer() {
        answer1.checked = false;
        answer2.checked = false;
        answer3.checked = false;
        answer4.checked = false;
    }


      
    
    
    // function answerChecker() {
        
    //          if(questions[0] && answer1.checked) {     
    //         answersCorrect++
    //     } else if(questions[1] && answer4.checked) {
    //         answersCorrect++
    //     } else if (questions[2] && answer3.checked) {
    //         answersCorrect++
    //     } else if (questions[3] && answer1.checked === true) {
    //         answersCorrect++
    //     } else if (questions[4] && answer1.checked) {
    //         answersCorrect++
    //     }  
    //       console.log(answersCorrect)

    //     }

       
        