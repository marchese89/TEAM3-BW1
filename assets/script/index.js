const dataRecover = () => {
  fetch("https://opentdb.com/api.php?amount=20&category=18&difficulty=easy")
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
      window.jsonData = data;
    })
    .catch((error) => {
      console.error("Si è verificato un errore:", error);
    });
};

dataRecover();
