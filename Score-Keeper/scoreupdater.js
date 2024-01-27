const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const reset = document.getElementById("reset");
let score = document.getElementById("scoreDisplay");
const toPlaySelect = document.querySelector('#toplay');
let player1score = 0;
let player2score = 0;
let isGameOver = false;
let numbers = 3;
const span1 = document.querySelector("#one");
const span2 = document.querySelector("#two");
toPlaySelect.addEventListener('change', function () {
    numbers = parseInt(this.value);
    clear();
})
player1.addEventListener('click', () => {
    if (!isGameOver) {
        player1score += 1;
        if (player1score === numbers) {
            isGameOver = true;
            span1.style.color = 'green';
            span2.style.color = 'red';
        }
        // console.log(numberOfPlayer)
        span1.innerText = player1score;
    }
})
player2.addEventListener('click', () => {
    if (!isGameOver) {
        player2score += 1;
        if (player2score === numbers) {
            isGameOver = true;
            span1.style.color = 'red';
            span2.style.color = 'green';
        }
        // console.log(numberOfPlayer)
        span2.innerText = player2score;
    }
})
function clear() {

    isGameOver = false;
    player1score = 0;
    player2score = 0;
    span1.innerText = player1score;
    span2.innerText = player2score;
    span1.style.color = 'black';
    span2.style.color = 'black';
}
reset.addEventListener('click', clear)
