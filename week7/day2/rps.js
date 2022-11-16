//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d")


var rock = new Image();
var paper = new Image();
var scissors = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();

rock.src = "images/rock.jpg"
paper.src = "images/paper.jpg"
scissors.src = "images/scissors.jpg"

hrock.src = "images/rock2.jpg"
hpaper.src = "images/paper2.jpg"
hscissors.src = "images/scissors2.jpg"

hscissors.onLoad = function () {
    draw(rock, paper, scissors, rock, paper, scissors);
}

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

var gameOver = true;
var results = "Select rock, paper, scissors above";

function onKeyDown(e) {
    console.log(e.keyCode);
}

function onKeyUp(e) {
    if (e.keyCode == 32) {
        console.log("You pressed the spacebar");
        gameOver = false;
        draw(rock, paper, scissors, rock, paper, scissors);
    }
}



function draw(rock, paper, scissors, crock, cpaper, cscissors) {
    if (gameOver == true) {
        //Drawing the Fonts
        ctx.font = "40px Ariel";
        ctx.fillStyle = "blue";
        ctx.strokeStyle = "green";
        ctx.textAlign = "center"
        ctx.fillText("Welcome to the RPS Game!", canvas.width / 2, 280);
        ctx.fillText("Press Space to Start", canvas.width / 2, 330);
        ctx.strokeText("Welcome to the RPS Game!", canvas.width / 2, 280);
    }
    else {

        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillstyle = "red"
        ctx.fillText("Player Choice", canvas.width / 2, 100);
        ctx.drawImage(rock, canvas.width / 2 - rock.width / 2 - 100, 150);
        ctx.drawImage(paper, canvas.width / 2 - paper.width / 2, 150);
        ctx.drawImage(scissors, canvas.width / 2 - scissors.width / 2 + 100, 150);
        //computer Choices
        ctx.fillText("Computer Choice", canvas.width / 2, 325);
        ctx.drawImage(crock, canvas.width / 2 - crock.width / 2 - 100, 375);
        ctx.drawImage(cpaper, canvas.width / 2 - cpaper.width / 2, 375);
        ctx.drawImage(cscissors, canvas.width / 2 - cscissors.width / 2 + 100, 375);

        ctx.fillText(results, canvas.width / 2, 525);
        ctx.restore();
    }

}


//alert("select rock, paper, or scissors!");
var rps = ["rock", "paper", "scissors"];
//console.log(rps[0]);

document.getElementById("rock").addEventListener('click', function (e) { playGame(rps[0]) });
document.getElementById("paper").addEventListener('click', function (e) { playGame(rps[1]) });
document.getElementById("scissors").addEventListener('click', function (e) { playGame(rps[2]) });

function playGame(playerChoice) {
    if (gameOver == true) {
        return;
    } else {
        var cpuChoice = Math.floor(Math.random() * 2.99);
        console.log(cpuChoice, playerChoice);

        switch (playerChoice) {
            case "rock":
                if (cpuChoice == 0) {
                    //rock
                    //alert("cpu chows rock. It is a tie");
                    results = "CPU chose Rock. It's a tie."
                    draw(hrock, paper ,scissors, hrock, paper, scissors)
                }
                else if (cpuChoice == 1) {
                    //paper
                    //alert("cpu chose paper, you lose")
                    results = "CPU chose paper, you lose."
                    draw(hrock, paper ,scissors, rock, hpaper, scissors)
                }
                else {
                    //alert("cpu chose scissors, you win")
                    results = "CPU chose scissors, you win!"
                    draw(hrock, paper ,scissors, hrock, paper, hscissors)
                }

                break;

            case "paper":
                if (cpuChoice == 0) {
                    //rock
                    //alert("cpu chows rock. you win");
                    results = "CPU chose Rock. You win!"
                    draw(rock, hpaper ,scissors, hrock, paper, scissors)
                }
                else if (cpuChoice == 1) {
                    //paper
                    //alert("cpu chose paper, it is a tie")
                    results = "CPU chose paper. It's a tie."
                    draw( rock, hpaper ,scissors, rock, hpaper, scissors)
                }
                else {
                    //alert("cpu chose scissors, you lose")
                    results = "CPU chose scissors. You lose."
                    draw(rock, hpaper ,scissors, hrock, paper, hscissors)
                }

                break;

            case "scissors":
                if (cpuChoice == 0) {
                    //rock
                    //alert("cpu chows rock. you lose");
                    results = "CPU chose Rock. You lose"
                    draw(rock, paper , hscissors, hrock, paper, scissors)
                }
                else if (cpuChoice == 1) {
                    //paper
                    //alert("cpu chose paper, you win")
                    results = "CPU chose paper. You win!"
                    draw(rock, paper , hscissors, rock, hpaper, scissors)
                }
                else {
                    //alert("cpu chose scissors, it is a tie")
                    results = "CPU chose scissors. It's a tie."
                    draw(rock, paper , hscissors, rock, paper, hscissors)
                }

                break;

        }
    }

}

