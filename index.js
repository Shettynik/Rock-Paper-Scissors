var playerScore = 0;
var computerScore = 0;

const playBtn = document.querySelector(".intro button");
const intro = document.querySelector(".intro");
const match = document.querySelector(".match");

playBtn.addEventListener("click", ()=>{
    intro.classList.add("fadeOut");
    match.classList.remove("fadeOut");
});

const startMatch = (playerSelection ,computerSelection)=>{

    switch(playerSelection){
        case "rock":
            if(computerSelection=="scissors"){
                playerScore++
            }
            else if(computerSelection=="paper"){
                computerScore++
            }
            else if(computerSelection=="rock"){
                console.log("Nobody gets a point");
            }
            break;
        case "paper":
            if(computerSelection=="scissors"){
                computerScore++
            }
            else if(computerSelection=="paper"){
                console.log("Nobody gets a point");
            }
            else if(computerSelection=="rock"){
                playerScore++
            }
            break;
        case "scissors":
            if(computerSelection=="scissors"){
                console.log("Nobody gets a point");
            }
            else if(computerSelection=="paper"){
                playerScore++
            }
            else if(computerSelection=="rock"){
                computerScore++
            }
            break;            
    }
    document.querySelector(".player-score p").innerText = playerScore;
    document.querySelector(".computer-score p").innerText = computerScore;

}

const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
        option.addEventListener("click", function(){
            const computerNumber = Math.floor(Math.random()*3);
            const computerChoice =  computerOptions[computerNumber];
            const playerChoice = this.classList[0];
            playerHand.src = "./assets/"+playerChoice+".png";
            computerHand.src = "./assets/"+computerChoice+".png";

            startMatch(playerChoice, computerChoice);
        });
    });
}
playMatch();

const endBtn = document.querySelector(".end-game button");
const display = document.querySelector(".display-winner");
const winner = document.querySelector(".display-winner h2");
const score = document.querySelector(".score");
endBtn.addEventListener("click", function(){
    match.classList.add("fadeOut");
    score.classList.add("fadeOut");
    display.classList.remove("fadeOut");
    if(playerScore>computerScore){
        winner.innerText = "Player Wins !!";
    }
    else if(computerScore> playerScore){
        winner.innerText = "Computer Wins !!";
    }
    else{
        winner.innerText = "Match Draw !!";
    }
});

const playAgain = document.querySelector(".display-winner button");
playAgain.addEventListener("click", function(){
    document.querySelector(".player-score p").innerText = 0;
    document.querySelector(".computer-score p").innerText = 0;
    display.classList.add("fadeOut");
    score.classList.remove("fadeOut");
    intro.classList.remove("fadeOut");
})
