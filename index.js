const quizData = [
  {
    question: "In which year was the Microsoft XP operating system released?",
    a: "2011",
    b: "2000",
    c: "2001",
    d: "1996",
    correct: "2021",
  },
  {
    question: "Elon Musk is the CEO of which global brand",
    a: "Apple",
    b: "Microsoft",
    c: "Amazon",
    d: "Tesla",
    correct: "Tesla",
  },
  {
    question: "Which operating system does a Google Pixel phone use?",
    a: "Android",
    b: "ios",
    c: "Windows",
    d: "None the Above",
    correct: "Android",
  },

  {
    question: "Who killed Tony Stark’s parents?",
    a: "Winter",
    b: "The Winter Soldier",
    c: "Summer",
    d: "All of the Above",
    correct: "The Winter Soldier",
  },
  {
    question: "Natasha Romanova is the real name of which superhero?",
    a: "Widow",
    b: "Panther",
    c: "Black Widow",
    d: "None the Above",
    correct: "Black Widow",
  },
  {
    question:
      "Which English Football League team holds the nickname The Cobblers?",
    a: "Manchester",
    b: "Northampton Town",
    c: "town",
    d: "None the Above",
    correct: "Northampton Town",
  },
  {
    question:
      "Who is the only batsman to record 400 runs in an international Test match?",
    a: "Sachin",
    b: "Rohit Sharma",
    c: "Joe Root’s",
    d: "Brian Lara ",
    correct: "Brian Lara ",
  },
  {
    question: "What is Joe Root’s ODI shirt number?",
    a: "56",
    b: "66",
    c: "15",
    d: "7 ",
    correct: "66 ",
  },
  {
    question: "Which England bowler earned the nickname ’The Burnley Express’?",
    a: "James “Jimmy” Anderson",
    b: "Joe Root’s",
    c: "Ben Stokes",
    d: "ollie Robinson ",
    correct: "James “Jimmy” Anderson ",
  },
  {
    question: "Which operating system does a Google Pixel phone use?",
    a: "Android",
    b: "ios",
    c: "Windows",
    d: "None the Above",
    correct: "Android",
  },
];
const questionEl = document.querySelector("#question");
const a_Text = document.querySelector("#a_text");
const b_Text = document.querySelector("#b_text");
const c_Text = document.querySelector("#c_text");
const d_Text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#btn");
const answers = document.querySelectorAll(".answer");
const Quiz = document.querySelector("#quiz");
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
  deSelector();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_Text.innerHTML = currentQuizData.a;
  b_Text.innerHTML = currentQuizData.b;
  c_Text.innerHTML = currentQuizData.c;
  d_Text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answers.forEach((elem) => {
    console.log(elem.checked);
    if (elem.checked) {
      answer = elem.id;
    }
  });
  return answer;
}
function deSelector() {
  answers.forEach((elem) => {
    elem.checked = false;
  });
}
function submitHandler() {
  console.log(score++);
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
      console.log(score);
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      Quiz.innerHTML = `
      <h2>You answered Correctly at ${score}/${quizData.length} questions</h2>
      <button onClick="location.reload()">Reload</button>
      `;
      // location.reload();
    }
  }
}
submitBtn.addEventListener("click", submitHandler);
