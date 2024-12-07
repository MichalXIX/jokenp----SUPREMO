const textResult = document.getElementById("text-result")
const spanOne = document.querySelector(".span-one")
const spanTwo = document.querySelector(".span-two")

let resultPlayer = 0
let resultMachine = 0


const playHuman = (humanChoice)=> {
    playTheGame(humanChoice, playMachine()) 
}

function playMachine(){
    const machineChoices = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * machineChoices.length)
    return machineChoices[random]
}

function playTheGame(human, machine) {
    console.log (`Humano: ${human}, Maquina: ${machine} `)

    if (human === machine) {
        textResult.innerHTML = "&#x1F610; Deu Empate!"
    } else if ((human === 'rock' && machine === 'scissors') ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')) {
        resultPlayer ++    
        spanOne.innerHTML = resultPlayer
        textResult.innerHTML = " &#x263A;&#xFE0F; Você venceu!"
    } else {
        resultMachine ++
        spanTwo.innerHTML = resultMachine
        textResult.innerHTML = "&#x1F916; A maquina venceu!"
    }
}



