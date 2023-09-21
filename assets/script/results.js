// conta domande
const questions = JSON.parse(localStorage.getItem("questions"));
console.log(questions.length);

// correct Anwers (esempio)
let correctAnswers = localStorage.getItem("correctAnsweres");
// correct Anwers

// RESULT
function numberOfQuestionsC() {
  let allQuestionsR = document.querySelector(".cAnwers");
  if (
    questions.length === 10 ||
    questions.length === 20 ||
    questions.length === 25
  ) {
    allQuestionsR.innerText = correctAnswers + " / " + questions.length;
    allQuestionsR.classList.add("niceFont");
  }
}
function numberOfQuestionsW() {
  let allQuestionsW = document.querySelector(".wAnwers");
  if (
    questions.length === 10 ||
    questions.length === 20 ||
    questions.length === 25
  ) {
    allQuestionsW.innerText =
      questions.length - correctAnswers + " / " + questions.length;
    allQuestionsW.classList.add("niceFont");
  }
}
numberOfQuestionsC();
numberOfQuestionsW();
// RESULT
// PERCENT
const totalQuestions = questions.length;
function calculatePercentage(correctAnswers, totalQuestions) {
  const percentage = (correctAnswers / totalQuestions) * 100;
  return percentage;
}
const percentage = calculatePercentage(correctAnswers, totalQuestions);
console.log(`Hai risposto giusto a ${percentage}% delle domande`);
// PERCENT
// valori da cambiare
// correctR e wrongR
let lungDomande = parseInt(questions.length);
console.log(lungDomande);
let giusteDomande = parseInt(correctAnswers);
console.log(giusteDomande);
// v abbiamo la percentuale delle domande giuste
let percentuale = (giusteDomande * 100) / lungDomande;
console.log(percentuale);
// v qua abbiamo il offset da inserire nell'animazione
let offset = (850 * percentuale) / 100;
console.log(offset);
// v qua abbiamo la percentuale delle domande sbagliate
let sbagliateDomande = 100 - percentuale;
console.log(sbagliateDomande);
// v per il offset pero dobbiamo invertire i valori, quindi il valore del nostro cerchio
// 850 - offset
let animationOffset = 850 - offset;
console.log(animationOffset);
//
//
//
const percGiuste = document.getElementById("correctR");
percGiuste.textContent = percentuale;

const percSbagliate = document.getElementById("wrongR");
percSbagliate.textContent = 100 - percentuale;
//
//
let styleElement = document.getElementById("keyframes");
let cssRule = document.createTextNode(
  "@keyframes anim {" +
    "100% { stroke-dashoffset: " +
    animationOffset +
    " ; }" +
    "}"
);
styleElement.appendChild(cssRule);
//
//

if (percentuale < 60) {
  const Sorry = document.getElementsByClassName("congratulations");
  const tryAgain = document.getElementsByClassName("send-cert");
  for (let i = 0; i < Sorry.length; i++) {
    Sorry[i].innerText = "Sorry... \nyou didnt pass";
    tryAgain[i].innerText = "Try again next time";
    Sorry[i].style.fontSize = "15px";
    tryAgain[i].style.fontSize = "20px";
  }
}
