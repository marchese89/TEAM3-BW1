const dataRecover = (difficulty, numQuestions) => {
  fetch(
    `https://opentdb.com/api.php?amount=${numQuestions}&category=18&difficulty=${difficulty}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore nella richiesta");
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("questions", JSON.stringify(data.results));
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

  let radioButtons2 = document.getElementsByName("num-quest");
  let selectedNumQ = null;

  // Loop attraverso gli input radio per trovare quello selezionato
  for (let i = 0; i < radioButtons2.length; i++) {
    if (radioButtons2[i].checked) {
      selectedNumQ = radioButtons2[i].value;
      break;
    }
  }

  dataRecover(selectedDiff, selectedNumQ);
});
