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

//objects for dealer and player
const dealer = {
  total: 0,
  gamesWon: 0,
};

const player = {
  total: 0,
  gamesWon: 0,
};

//creating p tags for cards drawn



//generates card number for image
function randomCardNumber() {
  const numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  const ranNum = Math.floor(Math.random() * numbers.length);
  let cardNum = numbers[ranNum];
  return cardNum;
}
//generates card suit for image
function randomCardSuit() {
  const characters = ['C', 'D', 'H', 'S'];
  const ranChar = Math.floor(Math.random() * characters.length);
  let suit = characters[ranChar];
  return suit;
}

function convertString(card){
  switch (card){
    case 'K':
      card = 10;
      break
    case 'Q':
      card = 10;
      break
    case 'J':
      card = 10;
      break
    case 'A':
      card = 11;
      break
  }
  return card
}

//generates random card
function dealCards() {
  $('#dealer-total').text(``);
  //resets totals for dealer and player
  player.total = 0;
  dealer.total = 0;

  let dealer1stCardNum = randomCardNumber(); let dealer1stCardSuit = randomCardSuit();
  let dealer2ndCardNum = randomCardNumber(); let dealer2ndCardSuit = randomCardSuit();
  let player1stCardNum = randomCardNumber(); let player1stCardSuit = randomCardSuit();
  let player2ndCardNum = randomCardNumber(); let player2ndCardSuit = randomCardSuit();

  //resets total color
  $('#player-total').css('color', 'black');
  //changes img based on ranNum and ranChar
  $('#dealer-card-1').attr('src','cards/' + dealer1stCardNum + dealer1stCardSuit + '.jpg');
  $('#dealer-card-2').attr('src','cards/' + dealer2ndCardNum + dealer2ndCardSuit + '.jpg');

  $('#player-card-1').attr('src','cards/' + player1stCardNum + player1stCardSuit + '.jpg');
  $('#player-card-2').attr('src','cards/' + player2ndCardNum + player2ndCardSuit + '.jpg');

  //dealer total calc
  switch (dealer1stCardNum) {
    case 'K':
      dealer1stCardNum = 10;
      break;
    case 'J':
      dealer1stCardNum = 10;
      break;
    case 'Q':
      dealer1stCardNum = 10;
      break;
    case 'A':
      dealer1stCardNum = 11;
      break;
  }
  switch (dealer2ndCardNum) {
    case 'K':
      dealer2ndCardNum = 10;
      break;
    case 'J':
      dealer2ndCardNum = 10;
      break;
    case 'Q':
      dealer2ndCardNum = 10;
      break;
    case 'A':
      dealer2ndCardNum = 11;
      break;
  }
 
  //adds dealer total
  dealer.total = parseInt(dealer1stCardNum) + parseInt(dealer2ndCardNum);

  //player total calc
  // console.log('player card 1: ' + player1stCardNum);
  // console.log('player card 2: ' + player2ndCardNum);
  //converting string to int
  switch (player1stCardNum) {
    case 'K':
      player1stCardNum = 10;
      break;
    case 'Q':
      player1stCardNum = 10;
      break;
    case 'J':
      player1stCardNum = 10;
      break;
    case 'A':
      player1stCardNum = 11;
      break;
  }
  switch (player2ndCardNum) {
    case 'K':
      player2ndCardNum = 10;
      break;
    case 'Q':
      player2ndCardNum = 10;
      break;
    case 'J':
      player2ndCardNum = 10;
      break;
    case 'A':
      player2ndCardNum = 11;
      break;
  }

  //adding number together and parsing strings that arent face cards
  player.total = parseInt(player1stCardNum) + parseInt(player2ndCardNum);
  //changing total text
  $('#player-total').text(`Total: ${player.total}`);
  // $('#play-btn').hide();
}

//lets dealer make move
function dealersTurn() {
  while (true) {
    if (player.total > 21) {
      break;
    }
    //stops once >= 17
    if (dealer.total <= 16) {
      hitMeDealer();
    } else {
      break;
    }
  }
}

//generates new card and adds to total amount
function hitMeDealer() {
  const $dealerHitCards = $('<p>').appendTo('#dealer-hit-cards')
  let dealerHitCardNum = randomCardNumber();
  let dealerHitCardSuit = randomCardSuit();
  $('#dealer-card-1').attr('src','cards/' + dealerHitCardNum + dealerHitCardSuit + '.jpg');
  switch (dealerHitCardNum) {
    case 'K':
      dealerHitCardNum = 10;
      break;
    case 'Q':
      dealerHitCardNum = 10;
      break;
    case 'J':
      dealerHitCardNum = 10;
      break;
    case 'A':
      dealerHitCardNum = 11;
      break;
  }
  // player.total += dealerHitCardNum
  $('#dealer-total').text(`Total: ${(dealer.total += parseInt(dealerHitCardNum))}`);
  $dealerHitCards.text(`+${dealerHitCardNum}`)
}


//function to draw another card
function hitMe() {
  const $playerHitCards = $('<p>').appendTo('#player-hit-cards')
  let playerHitCardNum = randomCardNumber();
  let playerHitCardSuit = randomCardSuit();
  $('#player-card-1').attr('src','cards/' + playerHitCardNum + playerHitCardSuit + '.jpg');
  switch (playerHitCardNum) {
    case 'K':
      playerHitCardNum = 10;
      break;
    case 'Q':
      playerHitCardNum = 10;
      break;
    case 'J':
      playerHitCardNum = 10;
      break;
    case 'A':
      playerHitCardNum = 11;
      break;
  }
  // player.total += playerHitCardNum
  $('#player-total').text(`Total: ${(player.total += parseInt(playerHitCardNum))}`);
  
  $playerHitCards.text(`+${playerHitCardNum}`)
}

//decides who winner is
function gameLogic() {
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

//when user hits stand btn
function stand() {
  $('#hit-card-container').show();
  //flips dealer hidden card and hides back of card img
  $('#dealer-card-hidden').addClass('hiddenCard')
  $('#dealer-card-2').removeClass();
  $('#dealer-total').text(`Total: ${dealer.total}`);
  dealersTurn();
  //rehides btns
  $('#play-btn').show();
  $('#hit').hide();
  $('#stand').hide();
  //runs game logic to decide winner
  gameLogic();
}

//checks to see if user qualifies for a hit
function hitMeCheck() {
  if (player.total < 21) {
    hitMe();
  }
  if (player.total > 21) {
    $('#player-total').css('color', 'red');
    stand();
  }
  if (player.total === 21) {
    $('#player-total').css('color', 'green');
    stand();
  }
}

//opens rules modal
function openModal(){
  $('#modal').css('display', 'block');
}
//closes rules modal
function closeModal(){
  $('#modal').css('display', 'none');
}

$(() => {
  //hides btns at start
  $('#hit').hide();
  $('#stand').hide();
  //play-btn onClick call
  $('#play-btn').on('click', function () {
    $('#player-hit-cards').text('')
    $('#dealer-hit-cards').text('')
    $('#hit-card-container').hide();
    //switches card to flip back over
    $('#dealer-card-2').addClass('hiddenCard')
    $('#dealer-card-hidden').removeClass();
    $('#winner').text('');
    $('#play-btn').hide();
    $('#hit').show();
    $('#stand').show();
    dealCards();
  });

  $('#hit-card-container').hide();

  $('#hit').on('click', hitMeCheck);
  $('#stand').on('click', stand);

  // setTimeout(openModal, 1000)
  $('#rules-btn').on('click', openModal)
  $('#close-modal').on('click', closeModal)

  
});
