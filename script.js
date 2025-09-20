let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissor");
let your_score = document.getElementById("you_score");
let comp_score = document.getElementById("comp_score");
let result = document.getElementById("result");


let user = "";
score_yours = 0 , score_computer = 0;

function getComputerChoice() {
    const choices_comp = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices_comp.length);
    return choices_comp[randomIndex];
}

const choices = document.querySelectorAll(".choices");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if (choice === rock) {
            user = "rock"
            console.log("rock")
        } else if (choice === paper) {
            user = "paper"
            console.log("paper")
        } else if (choice === scissors) {
            user = "scissors"
            console.log("scissors")
        }
        const comp = getComputerChoice(); // 🎯 get computer’s choice
        console.log("You:", user, "Comp:", comp);

        if (user === comp) {
            result.innerText = "It's a Draw ! Taniya JI"
            result.style.backgroundColor = "#0A2239"
            result.style.color = "white"
        }
        
        else if( user === "rock" && comp === "paper"){
            result.innerText = "You Lose ! But Try Again Taniya JI"
            result.style.backgroundColor = "#e74c3c"
            result.style.color = "white" 
            result.style.fontSize = "1.4rem"
            score_computer++
            comp_score.innerText = score_computer
        }
        
        else if( user === "rock" && comp === "scissors"){
            result.innerText = "You Win ! Taniya JI Great "
            result.style.backgroundColor = "#2ecc71"
            result.style.color = "white" 
            result.style.fontSize = "1.7rem"
            score_yours++
            your_score.innerText = score_yours
        }
        
        else if( user === "paper" && comp === "scissors"){
            result.innerText = "You Lose ! But Try Again Taniya JI"
            result.style.backgroundColor = "#e74c3c"
            result.style.color = "white" 
            result.style.fontSize = "1.4rem"
            score_computer++
            comp_score.innerText = score_computer
        }
        
        else if( user === "paper" && comp === "rock"){
            result.innerText = "You Win ! Taniya JI Great "
            result.style.backgroundColor = "#2ecc71"
            result.style.color = "white" 
            result.style.fontSize = "1.7rem"
            score_yours++
            your_score.innerText = score_yours
        }
        
        else if( user === "scissors" && comp === "rock"){
            result.innerText = "You Lose ! But Try Again Taniya JI"
            result.style.backgroundColor = "#e74c3c"
            result.style.color = "white" 
            result.style.fontSize = "1.4rem"
            score_computer++
            comp_score.innerText = score_computer
        }
        
        else if( user === "scissors" && comp === "paper"){
            result.innerText = "You Win ! Taniya JI Great "
            result.style.backgroundColor = "#2ecc71"
            result.style.color = "white" 
            result.style.fontSize = "1.7rem"
            score_yours++
            your_score.innerText = score_yours
        }else{
            console.log("Error")
            result.innerText = "something error"
        }

        

    })
})

console.log(getComputerChoice())

