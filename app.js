let userScore = 0;
let pcScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const pcScorePara = document.querySelector("#PC-score");

const genpcChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const ranIdx= Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const playGame = (userChoice) =>{
    //console.log("Your choice = ", userChoice);
    const pcChoice = genpcChoice();
    //console.log("PC choice = ", pcChoice);

    if (userChoice === pcChoice){
        drawGame();
    } 
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = pcChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = pcChoice === "scissors" ? false : true;
        }
        else{
            userWin = pcChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, pcChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
}
)

const drawGame = () =>{
    //console.log("It was a draw.");
    msg.innerText = "It was a draw! Play again.";        
    msg.style.backgroundColor = "rgb(233, 108, 156)";
};

const showWinner = (userWin, userChoice, pcChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!  The ${userChoice} beat ${pcChoice}.`;
        msg.style.backgroundColor = "green";
    }
    else{
        pcScore++;
        pcScorePara.innerText = pcScore;
        msg.innerText = `You lose! The ${pcChoice} beat ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
}