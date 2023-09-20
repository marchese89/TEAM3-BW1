const markStars = function (scope, num) {
  const eachStar = scope.querySelectorAll("svg");
  //const lineStars=document.querySelector("#stars");
  // const someStar lineStars.querySelectorAll("svg");

  let j = 0;

  for (j = 0; j <= num; j++) {
    eachStar[j].classList.add("stars-filled");
  }

  for (let k = j; k < 10; k++) {
    eachStar[k].classList.remove("stars-filled");

    eachStar[k].classList.add("stars-not-filled");
  }
};

let divStars = document.querySelector("#stars");
let clicked = false;

// simulate 10 stars in the div #stars

for (let i = 0; i < 10; i++) {
  const star = document.createElement("div");

  star.classList.add("stars-inline");

  star.innerHTML = (
    <svg
      width="53"
      height="53"
      viewBox="0 0 47 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2844 1.55551C22.6143 8.569963 24.8184 8.569964 24.4283 1.55552129.9874 14.9402C30.1682 15.3557 30.5509 15.6396 30.9994 15.6756L45.4494 16.834C46.5134 16.9193 46.9448 18.2471 46.1341 18.9415135.1248 28.3722C34.7831 28.6649 34.6338 29.1242 34.738 2/29.5619L38.1018 43.6626C38.3494 44.7889 37.2199 45.5215 36.389 44.9651123.9379 37.40 89023.5538 37.1743 23.0789 37.1743 22.6868 37.4089L18.3157 44.9651c9.40478 45.5215 8.2 7528 44.7009 8.52295 43.6626L11.8865 29.5619C11.9909 29.1242 11.8416 28.6649 11.4999 2 8.3722L0.490575 18.9415C-0.320869 18.2471 0.111362 16.9193 1.17535 16.834L15.6253 15.6 756C16.0738 15.6396 16.4645 15.3557 16.6374 14.9402L22.2044 1.55551Z" />
    </svg>
  );

  //append each star to the div
  divStars.appendChild(star);

  // on handle mouseover event until user not click on any star
  star.addEventListener("mouseover", () => {
    if (!clicked) {
      markStars(divStars, i);
    }
  });

  // if user click on any star color all the stars before and disable mouseover even

  star.addEventListener("click", () => {
    console.log("where is my click on: ", 1);
    markStars(divStars, i);
    clicked = true;
  });

  // default color of the stars are't filled (a sort of blue: #0b113b)
  star.childNodes[0].classList.add("stars-not-filled");
}

/* commento */
