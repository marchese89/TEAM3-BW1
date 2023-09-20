// const questions = [
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question: "What does CPU stand for?",
//     correct_answer: "Central Processing Unit",
//     incorrect_answers: [
//       "Central Process Unit",
//       "Computer Personal Unit",
//       "Central Processor Unit",
//     ],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question:
//       "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
//     correct_answer: "Final",
//     incorrect_answers: ["Static", "Private", "Public"],
//   },
//   {
//     category: "Science: Computers",
//     type: "boolean",
//     difficulty: "easy",
//     question: "The logo for Snapchat is a Bell.",
//     correct_answer: "False",
//     incorrect_answers: ["True"],
//   },
//   {
//     category: "Science: Computers",
//     type: "boolean",
//     difficulty: "easy",
//     question:
//       "Pointers were not used in the original C programming language; they were added later on in C++.",
//     correct_answer: "False",
//     incorrect_answers: ["True"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question:
//       "What is the most preferred image format used for logos in the Wikimedia database?",
//     correct_answer: ".svg",
//     incorrect_answers: [".png", ".jpeg", ".gif"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question: "In web design, what does CSS stand for?",
//     correct_answer: "Cascading Style Sheet",
//     incorrect_answers: [
//       "Counter Strike: Source",
//       "Corrective Style Sheet",
//       "Computer Style Sheet",
//     ],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question:
//       "What is the code name for the mobile operating system Android 7.0?",
//     correct_answer: "Nougat",
//     incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question: "On Twitter, what is the character limit for a Tweet?",
//     correct_answer: "140",
//     incorrect_answers: ["120", "160", "100"],
//   },
//   {
//     category: "Science: Computers",
//     type: "boolean",
//     difficulty: "easy",
//     question: "Linux was first created as an alternative to Windows XP.",
//     correct_answer: "False",
//     incorrect_answers: ["True"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question:
//       "Which programming language shares its name with an island in Indonesia?",
//     correct_answer: "Java",
//     incorrect_answers: ["Python", "C", "Jakarta"],
//   },
// ];

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Scambio gli elementi
  }
  return array;
};

const questions = JSON.parse(localStorage.getItem("questions"));

const addOption1 = function (answers) {
  const questionForm = document.getElementById("question-form");
  const newOption = document.createElement("div");
  newOption.innerHTML = `
  <div class="option">
  <button class="tasto" type="radio">${answers[0]}</button>
</div>
<div class="option">
  <button class="tasto" type="radio">${answers[1]}</button>
</div>
<br />
<div>
  <button class="filled-button">PROSSIMA</button>
</div>
  `;
  questionForm.appendChild(newOption);
  // questionForm.appendChild(newOption);
};

const addOption2 = function (answers) {
  const questionForm = document.getElementById("question-form");
  const newOption = document.createElement("div");
  newOption.innerHTML = `
  <div class="option">
  <button class="tasto" type="radio">${answers[0]}</button>
</div>
<div class="option">
  <button class="tasto" type="radio">${answers[1]}</button>
</div>
<br />
<div class="option">
<button class="tasto" type="radio">${answers[2]}</button>
</div>
<div class="option">
<button class="tasto" type="radio">${answers[3]}</button>
</div>
<br />
<div>
  <button class="filled-button">PROSSIMA</button>
</div>
  `;
  questionForm.appendChild(newOption);
  newOption.classList.add = "chosen";
};

//inseriamo la prima domanda nella pagina

let firstQuestion = questions[0];
console.log("risposte sbagliate", firstQuestion["incorrect_answers"]);
console.log("risposta corretta", firstQuestion.correct_answer);
console.log("risposte", [
  ...firstQuestion.incorrect_answers,
  firstQuestion.correct_answer,
]);
document.getElementById("titolo").innerText = questions[0].question;
if (firstQuestion.type === "multiple") {
  //domanda multipla
  addOption2(
    shuffle([...firstQuestion.incorrect_answers, firstQuestion.correct_answer])
  );
} else {
  //domanda booleana
  addOption1(
    shuffle([...firstQuestion.incorrect_answers, firstQuestion.correct_answer])
  );
}
console.log(firstQuestion);

// addOption2();

// manca qualcosa per azzerare l option o il cambio di domanda azzera?

const checkAndAdd = function () {
  for (let i = 0; i < questions.length; i++);
  {
    if (questions[i].type === "boolean") {
      return addOption1();
    } else {
      return addOption2();
    }
  }
};
// checkAndAdd();

let currentQuestion = 0;
let correctAnswares = 0;
let wrongAnswares = 0;

const nextQuestion = () => {
  currentQuestion++;
};

const answererdQuestion = (e) => {
  e.preventDefault();
  const chosen = document.getElementsByClassName("chosen")[0];
  const value = chosen.value;
  let res;
  if (questions[currentQuestion]["correct_answer"] === value) {
    //risposta corretta
    chosen.classList.add("correct");
    correctAnswares++;
    res = true;
  } else {
    //risposta sbagliata
    chosen.classList.add("wrong");
    wrongAnswares++;
    res = false;
  }
  setTimeout(function () {
    nextQuestion();
  }, 1500);
};

const form = document.getElementById("question-form");
form.addEventListener("submit", answererdQuestion);

// console.log("domande estratte", );
