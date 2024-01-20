let userScore = 0;
let compScore = 0;
let userPara = document.querySelector("#user-score");
let compPara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const computerChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    //rock paper scissors
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
}

const drawGame = () => {
    console.log("Game was Draw!");
    msg.innerText = "Game was Draw. Try again.";
    msg.style.backgroundColor = "#081B31";
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userPara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win!  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        console.log("You lost");
        compScore++;
        compPara.innerText = compScore;
        msg.innerText = `You Lose.  ${compChoice} beats ${userChoice}`;
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
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true;
        } else{
            userWin = compChoice ==="Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("clicked", userChoice);
        playaGame(userChoice);
    })
});