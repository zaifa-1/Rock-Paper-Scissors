let computer;
function computerPlay(){
  let move = Math.floor(Math.random()*3)
  if(move==0){
    computer ='rock'
  }
  else if(move==1){
    computer = 'paper'
  }
  else{
    computer = 'scissors'
  }
  return move
} 
let player;
let result;
let playerScores= 0;
let computerScores= 0

let choice= document.querySelectorAll('.choice');
let output= document.querySelector('.output');
let playerScore = document.querySelector('.left');
let computerScore = document.querySelector('.right');
let main = document.querySelector('.main')
function playRound(){
  if (player == 'rock' && computer=='scissors' ||
      player == 'paper' && computer=='rock' ||
      player == 'scissors' && computer=='paper'){
        output.textContent= `${player}  beats ${ computer}`
        playerScores ++
        playerScore.textContent= `player: ${playerScores}`
        main.textContent= 'you win this round'
  }
  else if (player == 'rock' && computer == 'paper' ||
           player == 'paper' && computer == 'scissors'||
           player == 'scissors' && computer == 'rock'){
            output.textContent= `${computer}  beats ${player}`
            computerScores ++
            computerScore.textContent= `computer: ${computerScores}`
            main.textContent= 'You Lose this round'
            }
  else if (player == computer){
    output.textContent = 'it\'s a draw'
  }
}
choice.forEach(button => button.addEventListener('click', () => {
  if (playerScores<5 && computerScores<5){
  player= `${button.textContent}`
  computerPlay();
  computer= `${computer}`
  playRound()
  }
  if(playerScores==5){
    main.textContent= 'you won this match!';
  }
  if(computerScores==5){
    main.textContent= 'you lost this match';
  }

} ))

const restart = document.querySelector('.restart');
restart.addEventListener('click', () =>{
   main.textContent= 'First to 5 wins!'
   output.textContent= 'your move'
   playerScore.textContent= ' player: '
   computerScore.textContent= 'computer: '
   playerScores=0
   computerScores=0} )