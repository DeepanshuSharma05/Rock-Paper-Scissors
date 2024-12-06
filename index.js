let circles = document.querySelectorAll('.main');
let messages = document.querySelector('.msg');
let score=document.querySelector(".compare")
circles.forEach(circle => {
    circle.addEventListener('click', () => {

        //input player choice
        const playerChoice = circle.getAttribute('data-choice'); // Get the choice from a custom attribute
        console.log(`Player: ${playerChoice}`);
        compC(playerChoice); // Pass the player's choice to the function
    });
});


function compC(playerChoice) { // passing player choice in function

    const choice=["rock","paper","scissors"];
    console.log(choice);
    const compChoice= choice[Math.floor(Math.random()*3)]; //using math.floor to choose from choice
    console.log(`compChoice : ${compChoice}`);
    console.log(`Player: ${playerChoice}`);
    score.innerText = `Computer = ${compChoice} , you = ${playerChoice}`;


    //main logic
    if (playerChoice === compChoice) {
        console.log("It's a tie!");
        messages.innerText = "It's a tie!";
    } else if (
        (playerChoice === "rock" && compChoice === "scissors") ||
        (playerChoice === "scissors" && compChoice === "paper") ||
        (playerChoice === "paper" && compChoice === "rock")
    ) {
        console.log("You win!");
        messages.innerText = "You won!";
    } else {
        console.log("You lose!");
        messages.innerText = "You lost!";
    }


}












