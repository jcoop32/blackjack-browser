/*
game flow:
1. player is greeted with black jack rules, then closes the modal
2. player presses start button
3. cards are drawn
4. player can either hit or stand
5. once 21 or stand, dealer draws if needed
6. game results displayed
7. user can press start and we go back to 1.

 */

const cards = [
  11, 11, 11, 11, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7,
  7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10,
];

//objects for dealer and player
const dealer = {
  total: 0,
  gamesWon: 0,
};

const player = {
  total: 0,
  gamesWon: 0,
};

let tieGame = 0;
let exitGame = false;

function startingCards() {
  //resets total before each game starts
  dealer.total = 0;
  player.total = 0;
  //generates 4 random numbers
  for (let i = 0; i < 4; i++) {
    const ranNum = Math.floor(Math.random() * cards.length);
    let dealerCards = cards[ranNum];
    let playerCards = cards[ranNum];
    //random card selection for dealer
    if (i < 1) {
      console.log(`\nDealer Card #${i + 1}: ${dealerCards}\n`); //total text
      //adds current value of card to dealers total
      dealer.total += dealerCards;
      //checks for ace (11)
      if (dealerCards === 11 && dealer.total > 21) {
        dealerCards = 1;
      }
    }
    if (i === 1) {
      console.log(`Dealer Card #2: Hidden\n`);
      dealer.total += dealerCards;
      //checks for ace (11)
      if (dealerCards === 11 && dealer.total > 21) {
        dealerCards = 1;
      }
    }
    //random card selection for player
    if (i > 1 && i < 4) {
      console.log(`Player card #${i - 1} ${playerCards}\n`); //total text
      //adds current value of card to players total
      player.total += playerCards;
      //checks for ace (11)
      if (playerCards === 11 && player.total > 21) {
        playerCards = 1;
      }
    }
  }
  // console.log(`Dealer Total: ${dealer.total}\n`);
  console.log(`Player Total: ${player.total}`);
}

$(() => {});
