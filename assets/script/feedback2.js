const stellinespente = function () {
  const stelline = document.querySelectorAll(".stars a img");
  stelline.forEach((element) => {
    element.classList.add("star-not-filled");
  });
};

stellinespente();

const onMouseClick = (e) => {
  let id = e.target.parentElement.id;
  for (let i = 1; i <= 10; i++) {
    let elem = document.getElementById(i).getElementsByTagName("img")[0];
    if (i <= id) {
      elem.classList.remove("star-not-filled");
      elem.setAttribute("style", "");
    } else {
      elem.classList.add("star-not-filled");
    }
  }
};

for (let i = 1; i <= 10; i++) {
  let star = document.getElementById(i);
  star.addEventListener("click", onMouseClick);
}
