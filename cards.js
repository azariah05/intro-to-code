const cl = console.log;
const ct = console.table;

let buildDeck = function () {
  let deck = [];
  for (let rank = 2; rank < 15; rank++) {
    deck.push(createCard("hearts", rank));
    deck.push(createCard("spades", rank));
    deck.push(createCard("diamonds", rank));
    deck.push(createCard("clubs", rank));
  }
  return deck;
};
let createCard = function (suit, rank) {
  let name = getRankName(rank);
  let color = getSuitColor(suit);
  let card = {
    rank: rank,
    suit: suit,
    name: name,
    color: color,
  };
  return card;
};
let getSuitColor = function (suit) {
  if (suit === "clubs" || suit === "spades") {
    return "black";
  } else {
    return "red";
  }
};
let getRankName = function (rank) {
  switch (rank) {
    case 11:
      return "jack";
    case 12:
      return "queen";
    case 13:
      return "king";
    case 14:
      return "ace";

    default:
      return rank.toString();
  }
};

let dealCard = function () {
  let i = Math.floor(Math.random() * deck.length);
  let card = deck.splice(i, 1)[0];
  return card;
};

let deck = buildDeck();
let players = {
  player: [],
  cpu1: [],
  cpu2: [],
  cpu3: [],
  cpu4: [],
  cpu5: [],
  cpu6: [],
  cpu7: [],
  cpu8: [],
  cpu9: [],
};
for (let i = 0; i < 2; i++) {
  players.player.push(dealCard());
  players.cpu1.push(dealCard());
  players.cpu2.push(dealCard());
  players.cpu3.push(dealCard());
  players.cpu4.push(dealCard());
  players.cpu5.push(dealCard());
  players.cpu6.push(dealCard());
  players.cpu7.push(dealCard());
  players.cpu8.push(dealCard());
  players.cpu9.push(dealCard());
}

let getHandValue = function (cpu) {
  let handValue1 = 0;
  for (let i = 0; i < players.cpu1.length; i++) {
    handValue1 += players.cpu1[i].rank;
  }
  let handValue2 = 0;
  for (let i = 0; i < players.cpu2.length; i++) {
    handValue2 += players.cpu2[i].rank;
  }
  let handValue3 = 0;
  for (let i = 0; i < players.cpu3.length; i++) {
    handValue3 += players.cpu3[i].rank;
  }
  let handValue4 = 0;
  for (let i = 0; i < players.cpu4.length; i++) {
    handValue4 += players.cpu4[i].rank;
  }
  let handValue5 = 0;
  for (let i = 0; i < players.cpu5.length; i++) {
    handValue5 += players.cpu5[i].rank;
  }
  let handValue6 = 0;
  for (let i = 0; i < players.cpu6.length; i++) {
    handValue6 += players.cpu6[i].rank;
  }
  let handValue7 = 0;
  for (let i = 0; i < players.cpu7.length; i++) {
    handValue7 += players.cpu7[i].rank;
  }
  let handValue8 = 0;
  for (let i = 0; i < players.cpu8.length; i++) {
    handValue8 += players.cpu8[i].rank;
  }
  let handValue9 = 0;
  for (let i = 0; i < players.cpu9.length; i++) {
    handValue9 += players.cpu9[i].rank;
  }
  switch (cpu) {
    case 1:
      return handValue1;
    case 2:
      return handValue2;
    case 3:
      return handValue3;
    case 4:
      return handValue4;
    case 5:
      return handValue5;
    case 6:
      return handValue6;
    case 7:
      return handValue7;
    case 8:
      return handValue8;
    case 9:
      return handValue9;
    default:
      break;
  }
};
let hitCpu = function (cpu) {
  switch (cpu) {
    case 1:
      if (getHandValue(1) < 21) {
        players.cpu1.push(dealCard());
      }
      break;
    case 2:
      if (getHandValue(2) < 19) {
        players.cpu2.push(dealCard());
      }
      break;
    case 3:
      if (getHandValue(3) < 18) {
        players.cpu3.push(dealCard());
      }
      break;
    case 4:
      if (getHandValue(4) < 17) {
        players.cpu4.push(dealCard());
      }
      break;
    case 5:
      if (getHandValue(5) < 16) {
        players.cpu5.push(dealCard());
      }
      break;
    case 6:
      if (getHandValue(6) < 15) {
        players.cpu6.push(dealCard());
      }
      break;
    case 7:
      if (getHandValue(7) < 14) {
        players.cpu7.push(dealCard());
      }
      break;
    case 8:
      if (getHandValue(8) < 14) {
        players.cpu8.push(dealCard());
      }
      break;
    case 9:
      if (getHandValue(9) < 13) {
        players.cpu9.push(dealCard());
      }
      break;
    default:
      return;
  }
};

let hitAllCpu = function () {
  for (let i = 1; i <= 9; i++) {
    hitCpu(i);
  }
};

getHandValue();
cl(getHandValue(9));
// cl(deck.length);

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  fullGame(input);
});
ct(players.player);
rl.setPrompt("Do you want another card (yes, no)?");
rl.prompt();

const fullGame = function (input) {
  let handValue = 0;
  for (let i = 0; i < players.player.length; i++) {
    handValue += players.player[i].rank;
  }
  if (input === "yes") {
    players.player.push(dealCard());
    ct(players.player);
    cl(handValue);
    rl.pause();
    rl.prompt();
  } else if (input === "no") {
    console.clear();
    cl("ok");
    ct(players.player);
    cl(handValue);
    rl.pause();
    hitAllCpu();
  } else {
    cl("Not an option");
  }

  rl.resume();
};

let getWinner = function () {};
