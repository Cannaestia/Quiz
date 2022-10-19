var resetButton = document.querySelector(".reset-button");
var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector(".timer-count");
var startEl = document.querySelector(".start");
var quizEl = document.querySelector(".quiz");
var endEl = document.querySelector(".end");
var quizTitle = document.querySelector(".title .quiz");
var questionEl = document.querySelector(".questions");
var resetEl = document.querySelector(".reset");
var submitEl = document.querySelector(".submit");
var scoreEl = document.querySelector(".score");
var q1El = document.querySelector(".q1");
var q2El = document.querySelector(".q2");
var q3El = document.querySelector(".q3");
var q4El = document.querySelector(".q4");
var cursor = 0;
var score = 0;

// function displayState () {
//   if (state === 'start') {
//     startEl.style,display = 'block';
//     quizEl.style.display = 'none';
//     endEl.style.display = 'none';
//   }
//   if (state === 'quiz') {
//     startEl.style,display = 'none';
//     quizEl.style.display = 'block';
//     endEl.style.display = 'none';
//     showQuestions();
//   }
//   if (state === 'end') {
//     startEl.style,display = 'none';
//     quizEl.style.display = 'none';
//     endEl.style.display = 'block';
//   }

// }

var questions = [
  {
    title: "What house did the sorting hat place Harry Potter in?",
    choices: {
      a: "Hufflepuff",
      b: "Ravenclaw",
      c: "Gryffindor",
      d: "Slytherin",
    },
    answer: "Gryffindor",
  },
  {
    title: "What was the name of the main villian throughout the series?",
    choices: { a: "Jack", b: "Voldermort", c: "Kai", d: "Draco" },
    answer: "Voldermort",
  },
  {
    title: "What was Harry Potters Patronus Charm?",
    choices: { a: "Elephant", b: "Rabbit", c: "Stag", d: "Bear" },
    answer: "Stag",
  },
  {
    title: "Who was the potions professor?",
    choices: {
      a: "Professor Snape",
      b: "Professor McGonagall ",
      c: "Professor Filch",
      d: "Professor Lockhart",
    },
    answer: "Professor Snape",
  },
  {
    title: "What position did Harry play in Quidditch?",
    choices: {
      a: "Defense",
      b: "Offence",
      c: "Seeker",
      d: "He didn't play Quiddtich",
    },
    answer: "Seeker",
  },
  {
    title: "What was the drink of choice in Hogsmeade?",
    choices: { a: "Cola", b: "Butterbeer", c: "Tea", d: "Polyjuice" },
    answer: "Butterbeer",
  },
  {
    title: "What was the name of the House Elf that Harry frees?",
    choices: { a: "Chuckles", b: "Fred", c: "Buzzer", d: "Dobby" },
    answer: "Dobby",
  },
  {
    title: "What was the name of Voldermorts followers?",
    choices: {
      a: "Death Eaters",
      b: "The Hallows",
      c: "The Voldermort Gang",
      d: "Dark Magicians",
    },
    answer: "Death Eaters",
  },
  {
    title: "WWhat platform did the Hogwarts Express leave from?",
    choices: { a: "2", b: "2 and 1/3", c: "9 and 3/4", d: "9" },
    answer: "9 and 3/4",
  },
  {
    title: "What creature makes a horrible screech when being removed from a plant pot?",
    choices: {
      a: "Boggarts",
      b: "Dementors",
      c: "Mandrakes",
      d: "Acromantula",
    },
    answer: "Mandrakes",
  },
];
console.log(questions);

function displayQuestions() {
  questionEl.textContent = questions[cursor].title;
  q1El.textContent = questions[cursor].choices.a;
  q2El.textContent = questions[cursor].choices.b;
  q3El.textContent = questions[cursor].choices.c;
  q4El.textContent = questions[cursor].choices.d;

  q1El.addEventListener("click", nextQuestion);
  q2El.addEventListener("click", nextQuestion);
  q3El.addEventListener("click", nextQuestion);
  q4El.addEventListener("click", nextQuestion);
}
displayQuestions();


function nextQuestion(event) {
  var selection = event.target.textContent;
  var correctAnswer = questions[cursor].answer;
  if (selection === correctAnswer) {
    alert("Congrats Muggle, that is correct!");
    score++;
  } else {
    alert("OHHHH SORRY, Incorrect!");
  }
  cursor++;
  console.log(score);

  // for(i = 0; i < questions.length; i++)
  if (cursor === questions.length) {
    endQuiz();
  } else {
    console.log("PURPLE");
    displayQuestions();
    showQuestions();
  }
}

function showQuestions() {
  quizEl.setAttribute("class", "");
  startEl.setAttribute("class", "hide");
  endEl.setAttribute("class", "hide");
}
function endQuiz() {
  quizEl.setAttribute("class", "hide");
  startEl.setAttribute("class", "hide");
  endEl.setAttribute("class", "");
  scoreEl.textContent = 'You got' + ' ' + score + ' out of' + ' ' + questions.length + ' correct!';
}


// var titleText = questions[cursor];
// quizEl.textContent = titleText;
// }

function startTimer() {
  var timeLeft = 100;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeEl.textContent = "Tempus: " + timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timeEl.textContent = "Tempus: " + timeLeft;
      timeLeft--;
    } else {
      timeEl.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);
}
startTimer();
startButton.addEventListener("click", function () {
  showQuestions();
  // displayState();
  startTimer();
});



function resetScore() {
  highScore = 0;
  
}
function reset() {
  quizEl.setAttribute("class", "hide");
  startEl.setAttribute("class", "");
  endEl.setAttribute("class", "hide");
  cursor = 0;
  // init();
}
resetEl.addEventListener("click",reset)
// resetButton.addEventListener("click", resetScore);
// init();
