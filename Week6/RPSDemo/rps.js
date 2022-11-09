//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d")

//Drawing the Fonts
ctx.font = "40px Ariel";
ctx.fillStyle = "blue";
ctx.strokeStyle = "green";
ctx.fillText("Welcome to the RPS Game!", 125, 280);
ctx.strokeText("Welcome to the RPS Game!", 125, 280);

//alert("select rock, paper, or scissors!");
var rps = ["rock", "paper", "scissors"];
//console.log(rps[0]);

document.getElementById("rock").addEventListener('click', function (e) { alert("you picked " + rps[0]); playGame(rps[0]) });
document.getElementById("paper").addEventListener('click', function (e) { alert("you picked " + rps[1]); playGame(rps[1]) });
document.getElementById("scissors").addEventListener('click', function (e) { alert("you picked " + rps[2]); playGame(rps[2]) });

function playGame(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        case "rock":
            if (cpuChoice == 0) {
                //rock
                alert("cpu chows rock. It is a tie");
            }
            else if (cpuChoice == 1) {
                //paper
                alert("cpu chose paper, you lose")
            }
            else {
                alert("cpu chose scissors, you win")
            }

            break;

        case "paper":
            if (cpuChoice == 0) {
                //rock
                alert("cpu chows rock. you win");
            }
            else if (cpuChoice == 1) {
                //paper
                alert("cpu chose paper, it is a tie")
            }
            else {
                alert("cpu chose scissors, you lose")
            }

            break;

        case "scissors":
            if (cpuChoice == 0) {
                //rock
                alert("cpu chows rock. you lose");
            }
            else if (cpuChoice == 1) {
                //paper
                alert("cpu chose paper, you win")
            }
            else {
                alert("cpu chose scissors, it is a tie")
            }

            break;

    }
}

