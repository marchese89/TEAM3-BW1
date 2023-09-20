const Stelline = document.querySelectorAll("#stars div img");
console.log(Stelline);

const Stellinespente = function () {
  Stelline.forEach((element) => {
    element.classList.add("star-not-filled");
  });
};

Stellinespente();


