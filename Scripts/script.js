let result
let playerScore = 0
let computerScore = 0
      
function computerPlay() {
  const randomDecimal = Math.random()
  const randomNumToThree = randomDecimal * 3
  const roundedNum = Math.floor(randomNumToThree)

  const weapons = ['rock', 'paper', 'scissors']
  const computerWeapon = weapons[roundedNum]

  return computerWeapon
}
      
const buttons = document.querySelectorAll("input[data-behavior='playerSelection']")

  buttons.forEach((input) => {
    input.addEventListener('click', (e) => {
      playRound(e.target.value, computerPlay())
    })
  })
        
function playRound(playerSelection, computerSelection) {  
        
  if (playerSelection === computerSelection) {
    result = `Draw! you both have ${playerSelection}.`
  } else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
            (playerSelection === 'paper' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'rock')) {
          result = `Computer Wins! ${computerSelection} beats ${playerSelection}.`
          computerScore++
  } else if ((playerSelection === 'paper' && computerSelection === 'rock') || 
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'rock' && computerSelection === 'scissors')) {
          result = `Player Wins! ${playerSelection} beats ${computerSelection}.`
          playerScore++
  } else {
          result = 'You must choose rock, paper or scissors'
        }

  const resultsText = document.querySelector("p[data-behavior='resultsText1']")
        resultsText.textContent = `${result} `

  const currentScores = document.querySelector("p[data-behavior='resultsText2']")
        currentScores.textContent = `Current Scores: Player = ${playerScore}, Computer = ${computerScore}`

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
        resultsText.textContent = `${result}`
        currentScores.textContent = `Final Scores: Player = ${playerScore}, Computer = ${computerScore}. Game over you are the first to 5. Congratulations!`
    } else {
        resultsText.textContent = `${result}`
        currentScores.textContent = `Final Scores: Player = ${playerScore}, Computer = ${computerScore}. Game over the Computer is the first to 5. Commiserations!`
      }
      const imagesHidden = document.querySelector("div[data-behavior='boxHolder']")
            imagesHidden.style.display = 'none'   

    document.querySelector("button[data-behavior='resetGame']").style.display = "block"
        
    playerScore = 0
    computerScore = 0
  }
}
        
const gameReset = document.querySelector("button[data-behavior='resetGame']")
      gameReset.addEventListener('click', () => {
        location.reload()
      })
      
      