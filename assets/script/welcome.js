document
  .getElementsByClassName("checkmark")[0]
  .addEventListener("click", function () {
    this.classList = "checkmark";
  });
document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const check = document.getElementById("check");
    if (check.checked) {
      window.location.href = "Difficulty selection.html";
    } else {
      document
        .getElementsByClassName("checkmark")[0]
        .classList.add("wrong-ans");
    }
  });
