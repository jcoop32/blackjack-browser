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

//generates random card
function ranCardNum() {
  $('#player-total').css('color', 'black');
  const numbersD = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  const ranNumD = Math.floor(Math.random() * numbersD.length);
  const charactersD = ['C', 'D', 'H', 'S'];
  const ranCharD = Math.floor(Math.random() * charactersD.length);
  
  const numbers2 = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  const ranNum2 = Math.floor(Math.random() * numbers2.length);
  const characters2 = ['C', 'D', 'H', 'S'];
  const ranChar2 = Math.floor(Math.random() * characters2.length);
  
  const numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  const ranNum = Math.floor(Math.random() * numbers.length);
  const characters = ['C', 'D', 'H', 'S'];
  const ranChar = Math.floor(Math.random() * characters.length);
  // console.log(numbers[ranNum]);
  //changes img based on ranNum and ranChar
  $('#dealer-card-1').attr(
    'src',
    'cards/' + numbersD[ranNumD] + charactersD[ranCharD] + '.jpg')
    console.log(`char: ${characters[ranChar]}`
  );
  $('#player-card-1').attr(
    'src',
    'cards/' + numbers[ranNum] + characters[ranChar] + '.jpg'
  );
  $('#player-card-2').attr(
    'src',
    'cards/' + numbers2[ranNum2] + characters2[ranChar2] + '.jpg'
  );

  //dealer total calc
  let dealerCard1 = numbersD[ranNumD]
  switch (dealerCard1) {
    case 'K':
      dealerCard1 = 10;
      break;
    case 'J':
      dealerCard1 = 10;
      break;
    case 'Q':
      dealerCard1 = 10;
      break;
    case 'A':
      dealerCard1 = 11;
      break;
  }
  dealer.total += parseInt(dealerCard1);
  $('#dealer-total').text(`Total: ${dealer.total}`)
  

  //player total calc
  let playerCard1 = numbers[ranNum];
  let playerCard2 = numbers2[ranNum2];
  console.log('player card 1: ' + numbers[ranNum]);
  console.log('player card 2: ' + numbers2[ranNum2]);
  //converting string to int
  switch (playerCard1) {
    case 'K':
      playerCard1 = 10;
      break;
    case 'J':
      playerCard1 = 10;
      break;
    case 'Q':
      playerCard1 = 10;
      break;
    case 'A':
      playerCard1 = 11;
      break;
  }
  switch (playerCard2) {
    case 'K':
      playerCard2 = 10;
      break;
    case 'Q':
      playerCard2 = 10;
      break;
    case 'J':
      playerCard2 = 10;
      break;
    case 'A':
      playerCard2 = 11;
      break;
  }
  //adding number together and parsing strings that arent face cards
  player.total = parseInt(playerCard1) + parseInt(playerCard2);
  console.log('player card 1 after: ' + playerCard1);
  console.log('player card 2 after: ' + playerCard2);
  //changing total text
  $('#player-total').text(`Total: ${player.total}`);
  // $('#play-btn').hide();
}

function hitMe(){
  const numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  const ranNum = Math.floor(Math.random() * numbers.length);
  const characters = ['C', 'D', 'H', 'S'];
  const ranChar = Math.floor(Math.random() * characters.length);
  $('#player-card-1').attr(
    'src',
    'cards/' + numbers[ranNum] + characters[ranChar] + '.jpg'
  );
  let playerCard = numbers[ranNum]
  switch (playerCard) {
    case 'K':
      playerCard = 10;
      break;
    case 'Q':
      playerCard = 10;
      break;
    case 'J':
      playerCard = 10;
      break;
    case 'A':
      playerCard = 11;
      break;
  }
  // player.total += playerCard
  $('#player-total').text(`Total: ${player.total += parseInt(playerCard)}`);
}


function gameLogic(){
  if (player.total < 21 && dealer.total < 21 && player.total > dealer.total) {
    $('#player-total').css('color', 'green');
    $('#winner').text('Player wins');
  }
  if (player.total === 21) {
    $('#player-total').css('color', 'green');
    $('#winner').text('Player Wins with 21!');
  }
  if (dealer.total > 21) {
    $('#player-total').css('color', 'green');
    $('#winner').text('Player Wins, dealer busted');
  }
  if (dealer.total === 21) {
    $('#winner').text(`Dealer has 21:(`);
  }
  if (player.total > 21) {
    $('#winner').text(`Dealer Wins, player busted`);
  }
  if (dealer.total < 21 && player.total < 21 && dealer.total > player.total) {
    $('#winner').text('Dealer Wins');
  }
  if (player.total === dealer.total) {
    $('#winner').text('Its a Draw!');
  }
}


function stand(){
  gameLogic();
}

$(() => {
  //play-btn onClick call
  $('#play-btn').on('click', ranCardNum);
  $('#hit').on('click', function (){
    if (player.total < 21){
      hitMe()
    } 
    if (player.total > 21){
      $('#player-total').css('color', 'red');
      stand();
    }
  })
  $('#stand').on('click', stand)
});
