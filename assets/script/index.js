const dataRecover = (difficulty, numQuestions) => {
  fetch(
    `https://opentdb.com/api.php?amount=${numQuestions}&category=18&difficulty=${difficulty}`
  )
    .then((response) => {
      // Verifica se la richiesta è andata a buon fine
      if (!response.ok) {
        throw new Error("Errore nella richiesta");
      }
      // Parsifica i dati JSON dalla risposta
      return response.json();
    })
    .then((data) => {
      // Ora puoi utilizzare i dati JSON nella variabile "data"
      console.log(data);
      // Puoi anche assegnarli a una variabile globale se desideri
      localStorage.setItem("questions", JSON.stringify(data.results));
      // window.questions = data.results;
      window.location.href = "Question page.html";
    })
    .catch((error) => {
      console.error("Si è verificato un errore:", error);
    });
};

//dataRecover();

document.getElementById("diff-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let radioButtons = document.getElementsByName("diff-questions");
  let selectedDiff = null;

  // Loop attraverso gli input radio per trovare quello selezionato
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedDiff = radioButtons[i].value;
      break;
    }
  }
  // console.log("difficoltà: " + selectedDiff);

  let radioButtons2 = document.getElementsByName("num-quest");
  let selectedNumQ = null;

  // Loop attraverso gli input radio per trovare quello selezionato
  for (let i = 0; i < radioButtons2.length; i++) {
    if (radioButtons2[i].checked) {
      selectedNumQ = radioButtons2[i].value;
      break;
    }
  }
  // console.log("n domande: " + selectedNumQ);

  dataRecover(selectedDiff, selectedNumQ);
});
