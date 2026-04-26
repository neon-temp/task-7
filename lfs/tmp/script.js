const questions = [
  {
    question: "If const y=2 , and let z=5, what is x when const x = z%y",
    options: ["a) 2.5", "b) 1", "c) 5", "d) 2"],
    answer: 1,
  },
  {
    question:
      "When using and/or operators, it is possible to use the word instead of the sign",
    options: ["a) True", "b) False", "c) Maybe", "d) None"],
    answer: 1,
  },
  {
    question: "Among the variable types which is not recommended",
    options: ["a) Const", "b) Var", "c) Let", "d) All of the above"],
    answer: 1,
  },
  {
    question:
      "What is defined as a container or label you assign to values or data you want to store?",
    options: ["a) Variable", "b) Data-type", "c) Data-set", "d) Box-model"],
    answer: 2,
  },
  {
    question: "What does the 'b' in BODMAS mean?",
    options: ["a) Boat", "b) Broad", "c) Basic", "d) Bracket"],
    answer: 3,
  },
  {
    question: "What type of language is HTML?",
    options: ["a) Computer", "b) Programming", "c) Markup", "d) Machine"],
    answer: 2,
  },
  {
    question: "All these are programming languages except?",
    options: ["a) Typescript", "b) JavaScript", "c) C++", "d) Vs code"],
    answer: 3,
  },
];

let currentIndex = 0;
let score = 0;
let selectedAnswer = null;

const startEl = document.getElementById("start");
const startBtn = document.getElementById("startBtn");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

startBtn.addEventListener("click", () => {
  startEl.style.display = "none";
  progressEl.style.display = "block";
  quizBox.style.display = "block";
  startQuiz(); // Function to load first question
});

function loadQuestion() {
  selectedAnswer = null;

  const current = questions[currentIndex];

  questionEl.textContent = current.question;
  progressEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;

  optionsEl.innerHTML = "";

  current.options.forEach((option, index) => {
    const btn = document.createElement("div");
    btn.classList.add("option");
    btn.textContent = option;

    btn.onclick = () => {
      selectedAnswer = index;
      document
        .querySelectorAll(".option")
        .forEach((o) => (o.style.background = "#f6f4f4"));
      btn.style.background = "#cce5ff";
    };

    optionsEl.appendChild(btn);
  });
}
previousBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--; // Move to the previous index
    loadQuestion();
  }
  //   previousBtn.disabled = (currentIndex === 0);
});

nextBtn.onclick = () => {
  if (selectedAnswer === null) return alert("Select an answer!");

  if (selectedAnswer === questions[currentIndex].answer) {
    score++;
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  quizBox.style.display = "none";
  resultBox.style.display = "block";
  progressEl.style.display = "none";
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreEl.textContent = `Your score: ${score} / ${questions.length}`;
}

// Initialize quiz
loadQuestion();
