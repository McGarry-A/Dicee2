let playerLabel = document.querySelector('.player');
let scoreLabel = document.querySelector('.score');
let diceImage = document.getElementById('dice-image');
let rollbutton = document.getElementById('roll-button');

let totalScore;
let playerScore = [];
let newRoll;

let player1 = true;

rollbutton.addEventListener('click',()=>{
    
    if (player1){ 
        playerLabel.innerText = 'Player 1'
    } else {
        playerLabel.innerText = 'Player 2'
    }
    
    rollDice();
    findImage(newRoll)
    console.log(newRoll)
    playerScore.push(Number(newRoll))  

    if (playerScore.length == 0) {
        scoreLabel.innerText = newRoll
    } else {
        reduceArrayForTotal();
    }

    checkLossCondition(newRoll)
    checkWinCondition(totalScore)
    
})
const rollDice = () => {
    newRoll = Math.floor(Math.random()* 6 + 1);
    return newRoll
}

const findImage = (newRoll) => { 
    let imagePath = `/images/${newRoll}.png`
    diceImage.src = imagePath
}

const reduceArrayForTotal = () => {
    totalScore = playerScore.reduce((x,y)=> x+y)
    scoreLabel.innerText = totalScore
}

const checkLossCondition = (newRoll) => {
    if (newRoll == 1){
        playerLabel.innerText = "You Lost! Press Roll to play again!"
        player1 = !player1
        playerScore = [];
        return
    }
}

const checkWinCondition = (totalScore) => {
    if (totalScore >= 20){
        playerLabel.innerText = "Winner"
        player1 = !player1
        playerScore = [];
        return
    }
}



