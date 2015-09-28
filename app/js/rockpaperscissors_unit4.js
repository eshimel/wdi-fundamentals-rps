////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


    function getPlayerMove(move) {
    move || getInput();
    return;
}
   function getComputerMove(move) {
    move || randomPlay();
    return;
}


    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    /* Your Expression */




    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
     /* Your Expression */


function getWinner(playerMove,computerMove) {
    var winner =(playerMove,computerMove);

if(playerMove === computerMove) {
return "The result is a tie!";

}


    else if(playerMove === 'rock') {

        if(computerMove === 'scissors')
        return "player wins";

    else {
        return "computer wins";
    }
}
      else if(playerMove === 'paper') {
                if(computerMove === 'rock')
        return "player wins";

else
    return 'computer wins';
}

    else if(playerMove === 'scissors') {
        if(computerMove === 'paper')
        return "player wins";

else {
    return "computer wins";
}
}
}


  var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner();


    while ((playerWins <= 5) || (computerWins <= 5)) {
        getPlayerMove();
        getComputerMove();
        getWinner();
    }

    if (winner === "player") {
        playerWins += 1;
    }
    else if (winner === "computer")  {
        computerWins +=1;
    }

    console.log('Player chose ' + playerMove + 'while Computer chose ' + computerMove);
    console.log(winner + 'is the winner!');
    console.log('The score is currently ' + playerWins + ' for the player and ' + computerWins + ' for the computer.' );

    return [playerWins, computerWins];
}
playToFive();
