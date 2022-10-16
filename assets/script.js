var state = 'start';
var resetButton = document.querySelector(".reset-button");
var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector(".timer-count");
var startEl = document.querySelector(".start");
var quizEl = document.querySelector(".quiz");
var endEl = document.querySelector(".end");
var quizTitle = document.querySelector(".title .quiz");
var questionEl = document.querySelector(".questions");

function displayState () {
  if (state === 'start') {
    startEl.style,display = 'block';
    quizEl.style.display = 'none';
    endEl.style.display = 'none';
  }
  if (state === 'quiz') {
    startEl.style,display = 'none';
    quizEl.style.display = 'block';
    endEl.style.display = 'none';
    showQuestions();
  }
  if (state === 'end') {
    startEl.style,display = 'none';
    quizEl.style.display = 'none';
    endEl.style.display = 'block';
  }
  
}
function init() {
  displayState ();
}

function showQuestions(){
  state = 'quiz';
  var titleText = questions[cursor];
  quizEl.textContent = titleText;
}
var cursor = 0;

var questions = [
  {
    title: "What house did the sorting hat place Harry Potter in?",
    choices: ["Hufflepuff", "Ravenclaw", "Gryffindor", "Slytherin"],
    answer: "Gryffindor",
  },
  {
    title: "What was the name of the main villian throughout the series?",
    choices: ["Jack", "Voldermort", "Kai", "Draco"],
    answer: "Voldermort",
  },
  {
    title: "What was Harry Potters Patronus Charm?",
    choices: ["Elephant", "Rabbit", "Stag", "Bear"],
    answer: "Stag",
  },
  {
    title: "Who was the potions professor?",
    choices: ["Professor Snape", "Professor McGonagall ", "Professor Filch", "Professor Lockhart"],
    answer: "Professor Snape",
  },
  {
    title: "What position did Harry play in Quidditch?",
    choices: ["Defense", "Offence", "Seeker", "He didn't play Quiddtich"],
    answer: "Seeker",
  },
  {
    title: "What was the drink of choice in Hogsmeade?",
    choices: ["Cola", "Butterbeer", "Tea", "Polyjuice"],
    answer: "Butterbeer",
  },
  {
    title: "What was the name of the House Elf that Harry frees?",
    choices: ["Chuckles", "Fred", "Buzzer", "Dobby"],
    answer: "Dobby",
  },
  {
    title: "What was the name of Voldermorts followers?",
    choices: ["Death Eaters", "The Hallows", "The Voldermort Gang", "Dark Magicians"],
    answer: "Death Eaters",
  },
  {
    title: "WWhat platform did the Hogwarts Express leave from?",
    choices: ["2", "2 and 1/3", "9 and 3/4", "9"],
    answer: "9 and 3/4",
  },
  {
    title: "What creature makes a horrible screech when being removed from a plant pot?",
    choices: ["Boggarts", "Dementors", "Mandrakes", "Acromantula"],
    answer: "Mandrakes",
  },
  
];


function startTimer() {
  var timeLeft = 300;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timeEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timeEl.textContent = '';
      clearInterval(timeInterval);
    }
    
  }, 1000);
}
startTimer();
startButton.addEventListener("click", function() {
  showQuestions();
  displayState();
  startTimer();
})

function resetScore() {
  highScore = 0;
  setHighScore()
}
function reset() {
  state = 'start';
  cursor = 0;
  init();
}
// resetButton.addEventListener("click", resetScore);
init();