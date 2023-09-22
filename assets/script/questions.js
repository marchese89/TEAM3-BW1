var intervalId;

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
  // const newOption = document.createElement("div");
  questionForm.innerHTML = `
  <div class="option">
  <button class="tasto" type="radio" onclick="selectAnswere(this)">${answers[0]}</button>
</div>
<div class="option">
  <button class="tasto" type="radio" onclick="selectAnswere(this)">${answers[1]}</button>
</div>
<br />
<div>
<br />
<div class="option">
<button class="tasto hidden" type="radio" onclick="selectAnswere(this)"></button>
</div>
<div class="option">
<button class="tasto hidden" type="radio" onclick="selectAnswere(this)"></button>
</div>
<br />
  <button class="filled-button next-q">NEXT</button>
</div>
  `;
};

const addOption2 = function (answers) {
  const questionForm = document.getElementById("question-form");
  questionForm.innerHTML = `
  <div class="option">
  <button class="tasto" type="radio" onclick="selectAnswere(this)">${answers[0]}</button>
</div>
<div class="option">
  <button class="tasto" type="radio" onclick="selectAnswere(this)">${answers[1]}</button>
</div>
<br />
<div class="option">
<button class="tasto" type="radio" onclick="selectAnswere(this)">${answers[2]}</button>
</div>
<div class="option">
<button class="tasto" type="radio" onclick="selectAnswere(this)">${answers[3]}</button>
</div>
<br />
<div>
  <button class="filled-button next-q">NEXT</button>
</div>
  `;
};

//inseriamo la prima domanda nella pagina

let firstQuestion = questions[0];

document.getElementById("tot-quest").innerText = questions.length;

document.getElementById("titolo").innerHTML = questions[0].question;
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

let currentQuestion = 0;
let correctAnsweres = 0;
let wrongAnsweres = 0;

const nextQuestion = () => {
  currentQuestion++;
  if (currentQuestion === questions.length) {
    //domande finite
    localStorage.setItem("correctAnsweres", correctAnsweres);
    localStorage.setItem("wrongAnsweres", wrongAnsweres);
    window.location.href = "Results page.html";
  }
  let question = questions[currentQuestion];
  document.getElementById("titolo").innerHTML =
    questions[currentQuestion].question;
  if (question.type === "multiple") {
    //domanda multipla
    addOption2(
      shuffle([...question.incorrect_answers, question.correct_answer])
    );
  } else {
    //domanda booleana
    addOption1(
      shuffle([...question.incorrect_answers, question.correct_answer])
    );
  }
  document.getElementById("current-quest").innerText = currentQuestion + 1;
  document
    .getElementsByClassName("next-q")[0]
    .addEventListener("click", answererdQuestion);
};

const answererdQuestion = (e) => {
  e.target.disabled = true;
  //mettiamo il verde sulla risposta corretta
  const buttons = document.getElementsByClassName("tasto");
  const buttonsArray = Array.from(buttons);
  buttonsArray.forEach((btn) => {
    if (btn.innerText === questions[currentQuestion]["correct_answer"]) {
      btn.disabled = true;
      btn.classList.add("correct-ans");
    }
  });
  clearInterval(intervalId);
  startTimer(time);

  // console.log("entro in answered question");
  const chosen = document.getElementsByClassName("chosen")[0];
  console.log("scelta", chosen);
  const value = chosen.innerText;
  if (questions[currentQuestion]["correct_answer"] === value) {
    //risposta corretta
    chosen.classList.add("correct-ans");
    correctAnsweres++;
  } else {
    //risposta sbagliata
    chosen.classList.add("wrong-ans");
    wrongAnsweres++;
  }

  setTimeout(function () {
    nextQuestion();
  }, 1000);
};

const answererdQuestionTimer = () => {
  const chosen = document.getElementsByClassName("chosen")[0];

  //mettiamo il verde sulla risposta corretta
  const buttons = document.getElementsByClassName("tasto");
  const buttonsArray = Array.from(buttons);
  buttonsArray.forEach((e) => {
    if (e.innerText === questions[currentQuestion]["correct_answer"]) {
      e.disabled = true;
      e.classList.add("correct-ans");
    }
  });

  if (chosen === undefined) {
    wrongAnsweres++;
    const buttons = document.getElementsByClassName("tasto");
    const buttonsArray = Array.from(buttons);
    buttonsArray.forEach((e) => {
      if (e.innerText === questions[currentQuestion]["correct_answer"]) {
        e.classList.add("correct-ans");
      }
    });
    setTimeout(function () {
      nextQuestion();
    }, 1000);
  } else {
    // console.log("scelta", chosen);
    const value = chosen.innerText;
    if (questions[currentQuestion]["correct_answer"] === value) {
      //risposta corretta
      chosen.classList.add("correct-ans");
      correctAnsweres++;
    } else {
      //risposta sbagliata
      chosen.classList.add("wrong-ans");
      wrongAnsweres++;
    }

    setTimeout(function () {
      nextQuestion();
    }, 1000);
  }
};

const selectAnswere = (obj) => {
  const key = document.getElementsByClassName("chosen")[0];
  if (key !== undefined) {
    key.classList.remove("chosen");
  }
  obj.classList.add("chosen");
  document
    .getElementsByClassName("next-q")[0]
    .setAttribute("style", "opacity: 1");
};

document
  .getElementsByClassName("next-q")[0]
  .addEventListener("click", answererdQuestion);

const stampa = () => {
  console.log("stampa");
};
