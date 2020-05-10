import lineBrickBlock from './linebricks/linebricks.mjs'

document.addEventListener('DOMContentLoaded', lineBrickBlock)
document.addEventListener('DOMContentLoaded', shuffle)

const cards = document.querySelectorAll('.memory-card');

cards.forEach(card => card.addEventListener('click', flipCard));

// Carte retourné
let hasFlippedCard = false;
// Verouillage pour ne pas cliquer pendant que deux image sont cliqué
let lockBoard = false;
let firstCard
let secondCard
let win = 0

function flipCard() {
  if (lockBoard === true) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards()
        win++
        console.log(win)
    } else {
        unflipCards();
    }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function resetBoard() {
    hasFlippedCard = false
    lockBoard = false
    firstCard = null
    secondCard = null
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}


function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  })
}
