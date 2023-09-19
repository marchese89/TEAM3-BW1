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
