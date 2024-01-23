const btun = document.querySelector(".generator");
function rand(number) {
    const blar = Math.floor(Math.random() * (number + 1));
    return blar;
}
function generateRandomColor() {
    const rndclr = `rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`;
    document.body.style.backgroundColor = rndclr;
}

// btun.addEventListener("click", generateRandomColor);


// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function changeBackground() {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }

// btn.addEventListener("click", changeBackground);

// const btn = document.querySelector("button");
// const whole = document.querySelector(".container");
// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   whole.style.background =  rndCol;
// });


// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });

