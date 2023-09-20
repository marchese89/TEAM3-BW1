const Stellinespente = function () {
  const stelline = document.querySelectorAll("#stars div img");
  stelline.forEach((element) => {
    element.classList.add("star-not-filled");
  });
};

Stellinespente();

const onMouseOver = (e) => {
  if (e === null || e === undefined || e.target.id === "") {
    return;
  }
  let id = e.target.id;
  console.log("id", id);
  for (let i = 1; i <= 10; i++) {
    // console.log("entro nel for");
    let elem = document.getElementById(i).getElementsByTagName("img")[0];
    // console.log(elem);
    if (i <= id) {
      elem.classList.remove("star-not-filled");
    } else {
      elem.classList.add("star-not-filled");
    }
  }
  // console.log("entro in " + id);
};

const onMouseOut = (e) => {
  if (e === null || e === undefined || e.target.id === "") {
    return;
  }

  // Stellinespente();
};

for (let i = 1; i <= 10; i++) {
  // let star = document.getElementById(i);
  let star = document.getElementById(i);
  star.addEventListener("mouseover", onMouseOver);
  // star.addEventListener("mouseout", onMouseOut);
}
