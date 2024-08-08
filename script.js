let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let player = {
     name : "Jesse",
     chips : 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
/* console.log(cards) */
function getRandomCard(){
let randomNumber =  Math.floor(Math.random()*14)
if (randomNumber < 10){
    return 10
}
else if (randomNumber === 1){
    return 11
}
else{
    return randomNumber
}
}
function renderGame(){
if (sum < 21){
    message = " Do you want to draw a new card? "
}
else if (sum === 21){
    message = "Yes! You won"
    hasBlackJack = true
}
else {
    message = " Sorry try again!"
    isAlive = false
}
console.log (message)
messageEl.textContent = message
sumEl.textContent = " Sum : " +  sum
cardEl.textContent = " Cards : " 
for ( i = 0; i < cards.length; i++){
    cardEl.textContent += cards[i] + " " 
} 
}
function newCard(){
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum+=card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
   
}

/* let hasSolvedChallenge = false
let hasHintLeft =  false

if (hasSolvedChallenge ===  false && hasHintLeft === false){
    showSolution()
}
function showSolution(){
    console.log("Showing the solution")
}

let likesDocumentaries = false
let likesStartups = true
if(likesDocumentaries === true || likesStartups === true){
    recommendMovie()
}
function recommendMovie(){
    console.log("Hey chcek out this new film think you will like it")
} */

/* let airBnb = {
    Image :"castle",
    isFree : false,
    header : "Live like a king",
    starRate : 4.9,
    guest : ["friends","family","Co-workers"]

}

console.log(airBnb.guest)
console.log(airBnb.starRate)
 */

