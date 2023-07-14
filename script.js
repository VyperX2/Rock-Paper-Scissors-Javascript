let computerPoints = 0
let playerPoints = 0
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const choices = ['🪨','📄','✂️']
let playerChoice = ''
let randomChoice = ''
const gameStatus = document.getElementById('emoji-game-status')
let aiChoice = ''
const computerPointsEl = document.getElementById('comp-points')
const playerPointsEl = document.getElementById('player-points')
const winner = document.getElementById('winner')


rockBtn.addEventListener('click',function(){
    function computerChoice(){
        let i = Math.floor(Math.random()*choices.length)
        let randomChoice = choices[i]
        return randomChoice
    }
    
    let aiChoice = computerChoice()
    playerChoice = '🪨'
    console.log(aiChoice)
    gameStatus.innerHTML = `${aiChoice} VS ${playerChoice}`
    //checkRock()
    if (aiChoice==='✂️'){
            playerPoints+=1
            playerPointsEl.textContent = playerPoints
            computerPointsEl.textContent = computerPoints
            winner.textContent = 'PLAYER WON!'
        }
    
        else if (aiChoice==='📄'){
                     computerPoints+=1
                     playerPointsEl.textContent = playerPoints
                    computerPointsEl.textContent = computerPoints
                    winner.textContent = 'COMPUTER WON!'
                }
    
        else if (aiChoice==='🪨'){
            winner.textContent = 'DRAW!'
            }
})










paperBtn.addEventListener('click',function(){
    function computerChoice(){
        let i = Math.floor(Math.random()*choices.length)
        let randomChoice = choices[i]
        return randomChoice
    }
    let aiChoice = computerChoice()
    playerChoice = '📄'
    console.log(aiChoice)
    gameStatus.innerHTML = `${aiChoice} VS ${playerChoice}`
    if (aiChoice==='🪨'){
        playerPoints+=1
        playerPointsEl.textContent = playerPoints
        computerPointsEl.textContent = computerPoints
        winner.textContent = 'PLAYER WON!'
    }
    else if (aiChoice==='✂️'){
        computerPoints+=1
        playerPointsEl.textContent = playerPoints
       computerPointsEl.textContent = computerPoints
       winner.textContent = 'COMPUTER WON!'
   }
   else if (aiChoice==='📄'){
    winner.textContent = 'DRAW!'
    }
})



scissorsBtn.addEventListener('click',function(){
    function computerChoice(){
        let i = Math.floor(Math.random()*choices.length)
        let randomChoice = choices[i]
        
        return randomChoice
        
    }
    let aiChoice = computerChoice()
    
    playerChoice = '✂️' 
    
    console.log(aiChoice)
    gameStatus.innerHTML = `${aiChoice} VS ${playerChoice}`

    if (aiChoice==='📄'){
        playerPoints+=1
        playerPointsEl.textContent = playerPoints
        computerPointsEl.textContent = computerPoints
        winner.textContent = 'PLAYER WON!'
    }
    else if (aiChoice==='🪨'){
        computerPoints+=1
        playerPointsEl.textContent = playerPoints
       computerPointsEl.textContent = computerPoints
       winner.textContent = 'COMPUTER WON!'
   }
   else if (aiChoice==='✂️'){
    winner.textContent = 'DRAW!'
    }
})


