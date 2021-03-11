const quizData = [
  {
    question: "Who is the current President of Pakistan?",
    a: "Mamnoon Hussain",
    b: "Nawaz Sharif",
    c: "Arif Alvi",
    d: "Asad Umar",
    correct: "c",
  },
  {
    question: "Which is the tallest mountain peak in Pakistan?",
    a: "Himalayas",
    b: "K-2",
    c: "NangaParbat",
    d: "Karakoram",
    correct: "b",
  },
  {
    question: "What is the capital of Pakistan?",
    a: "Lahore",
    b: "Multan",
    c: "Islamabad",
    d: "Karachi",
    correct: "c",
  },
  {
    question: "What is the independance year of Pakistan?",
    a: "1947",
    b: "1950",
    c: "1857",
    d: "1971",
    correct: "a",
  },
  {
    question: "Which is the biggest city of Pakistan?",
    a: "Islamabad",
    b: "Multan",
    c: "Karachi",
    d: "Lahore",
    correct: "c",
  },
];

const quizEl = document.getElementById("quiz");
const answersEl = document.querySelectorAll(".answers");
const questionEl = document.getElementById("question");
const optionAEl = document.getElementById("a-text");
const optionBEl = document.getElementById("b-text");
const optionCEl = document.getElementById("c-text");
const optionDEl = document.getElementById("d-text");
const buttonEl = document.getElementById("submit");

let currentQ = 0;
let score = 0;
nextQ();
function nextQ() {
  deselectAll();

  questionEl.innerText = quizData[currentQ].question;

  optionAEl.innerText = quizData[currentQ].a;
  optionBEl.innerText = quizData[currentQ].b;
  optionCEl.innerText = quizData[currentQ].c;
  optionDEl.innerText = quizData[currentQ].d;
}

function deselectAll() {
  answersEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function selectedAns() {
  let answer = undefined;

  answersEl.forEach((answerEl) => {
    if (answerEl.checked === true) {
      answer = answerEl.id;
    }
  });

  return answer;
}

buttonEl.addEventListener("click", () => {
  const answer = selectedAns();

  if (answer) {
    if (answer === quizData[currentQ].correct) {
      score++;
    }

    currentQ++;

    if (currentQ < quizData.length) {
      nextQ();
    } else {
      quizEl.innerHTML = `<h2>You completed the quiz. You answered ${score} questions correctly out of ${quizData.length}.</h2>
        <button onclick="location.reload()">Reload</button>`;
    }
  }
});
