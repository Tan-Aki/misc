/////////////////////////
// Blackjack game
/////////////////////////

// Card variables
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two',
];

// DOM variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

// Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];


// Functions

let createDeck = function () {
    let deck = [];
    for (let i = 0; i < suits.length; i++) {
        for (y = 0; y < values.length; y++) {
            // let card = {};
            // card.suit = suits[i];
            // card.value = values[y];
            let card = {
                suit: suits[i],
                value: values[y],
            }
            deck.push(card);
        }
    }
    return deck;
};

let shuffleDeck = function (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};


let getCardString = function (card) {
    return card.value + ' of ' + card.suit;
}

let getNextCard = function () {
    return deck.shift();
};

let getCardNumericValue = function (card) {
    switch (card.value) {
        case 'Ace':
            return 1;
            break;
        case 'Two':
            return 2;
            break;
        case 'Three':
            return 3;
            break;
        case 'Four':
            return 4;
            break;
        case 'Five':
            return 5;
            break;
        case 'Six':
            return 6;
            break;
        case 'Seven':
            return 7;
            break;
        case 'Eight':
            return 8;
            break;
        case 'Nine':
            return 9;
            break;
        default:
            return 10;
            break;
    }
};

let getScore = function (cardArray) {
    // let score = 0;
    // let hasAce = false;
    // for (let i = 0; i < cardArray.length; i++) {
    //     let card = cardArray[i];
    //     score += getCardNumericValue(card);
    //     if (card.value === 'Ace') {
    //         hasAce = true;
    //     }
    // }
    // if (hasAce && score +10 <= 21){
    //     return score += 10;
    // }
    // return score;
    let score = cardArray.reduce((score, card) => score + getCardNumericValue(card), 0);
    let hasAce = (cardArray.filter(card => card.value === "Ace").length > 0);
    // return hasAce ? Math.min(score + 10, 21) : score;
    if (hasAce && score + 10 <= 21) {
        return score += 10;
    }
    return score;
};



let updateScores = function () {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
};

let checkForEndOfGame = function () {
    
    updateScores();

    // (playerScore == 21 || dealerScore == 21 ? gameOver = true : gameOver);
    if (playerScore == 21 || dealerScore == 21)
        gameOver = true;

    if (gameOver) {
        //let dealer take cards
        while (dealerScore < playerScore
            && dealerScore <= 21) {
            dealerCards.push(getNextCard());
            updateScores();
        }
        if (playerScore > dealerScore){
            playerWon = true;
        }
        else {
            playerWon = false;
        }
    }

    if (playerScore > 21){
        playerWon = false;
        gameOver = true;
    }
    else if (dealerScore > 21){
        playerWon = true;
        gameOver = true;
    }
};

let showStatus = function () {
    if (!gameStarted) {
        textArea.innerText = 'Welcome  to BlackJack !! '
        return;
    }
    
    
    updateScores();
    checkForEndOfGame();
    //////////////// methode 1 old school
    // let dealerCardStrings = '';
    // for (let i = 0; i < dealerCards.length; i++) {
    //     dealerCardStrings += getCardString(dealerCards[i]) + '\n';
    // }

    //////////////// methode 2, avec reduce mais qui donne moins de contexte 
    // let dealerCardStrings = dealerCards.reduce((dealerCardStrings, card) => dealerCardStrings + getCardString(card) + '\n', ''); 

    //////////////// methode 3, si tu vois map join, tu sais que tu as un tableau, transformé, puis transformé en string, ça donne plus de contexte
    //////////////// attention, cette méthode est slightly différente des 2 autres car elle n'ajoute pas de \n à la fin de la string
    let dealerCardStrings = dealerCards.map(card => getCardString(card)).join("\n");


    // let playerCardStrings = '';
    // for (let i = 0; i < playerCards.length; i++) {
    //     playerCardStrings += getCardString(playerCards[i]) + '\n';
    // }
    let playerCardStrings = playerCards.map(card => getCardString(card)).join("\n");

    textArea.innerText =
        `Dealer has : \n`
        + `${dealerCardStrings}\n`
        + `(score : ${dealerScore})\n`
        + `\n`
        + `Player has:\n`
        + `${playerCardStrings}\n`
        + `(score : ${playerScore})\n`;


    if (gameOver) {
        if (playerWon) {
            textArea.innerText += '\n' + 'You Win ! '
        }
        else {
            textArea.innerText += '\n' + 'Dealer Wins ! '
        }
        newGameButton.style.display = 'inline';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
    };

};

// Event listeners 
newGameButton.addEventListener('click', function () {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];

    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    showStatus();
});

hitButton.addEventListener('click', function () {
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
});

stayButton.addEventListener('click', function () {
    gameOver = true;
    checkForEndOfGame();
    showStatus();
});



// main 
hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();


// console.log('Welcome to Blackjack !');

// console.log('You are dealt :');

// console.log(deck.length);

















