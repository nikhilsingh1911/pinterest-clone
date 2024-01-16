let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const computerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock paper scissors
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
}

const drawGame = () => {
    console.log("Game was Draw!");
    msg.innerText = "Game was Draw. Try again.";
    msg.style.backgroundColor = "#081B31";
}

const showWinner = (userWin)=>{
    if(userWin){
        console.log("You win");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "Green";
    }
    else{
        console.log("You lost");
        msg.innerText = "You Lose.";
        msg.style.backgroundColor = "Red";
    }
}

const playaGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    // Generating computer choice
    const compChoice = computerChoice();
    console.log("Comp Choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else{
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("clicked", userChoice);
        playaGame(userChoice);
    })
});