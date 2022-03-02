const cl = console.log;
const ct = console.table;

let buildDeck = function () {
  let deck = [];
  for (let rank = 2; rank < 12; rank++) {
    if (rank > 10) {
      deck.push(createCard("hearts", 10, "king"));
      deck.push(createCard("spades", 10, "king"));
      deck.push(createCard("diamonds", 10, "king"));
      deck.push(createCard("clubs", 10, "king"));
      deck.push(createCard("hearts", 10, "queen"));
      deck.push(createCard("spades", 10, "queen"));
      deck.push(createCard("diamonds", 10, "queen"));
      deck.push(createCard("clubs", 10, "queen"));
      deck.push(createCard("hearts", 10, "jack"));
      deck.push(createCard("spades", 10, "jack"));
      deck.push(createCard("diamonds", 10, "jack"));
      deck.push(createCard("clubs", 10, "jack"));
      deck.push(createCard("hearts", 11, "ace"));
      deck.push(createCard("spades", 11, "ace"));
      deck.push(createCard("diamonds", 11, "ace"));
      deck.push(createCard("clubs", 11, "ace"));
    } else {
      deck.push(createCard("hearts", rank, rank));
      deck.push(createCard("spades", rank, rank));
      deck.push(createCard("diamonds", rank, rank));
      deck.push(createCard("clubs", rank, rank));
    }
  }
  return deck;
};

let createCard = function (suit, rank, title) {
  let name = title.toString();
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

  if (input === "yes") {
    players.player.push(dealCard());
    for (let i = 0; i < players.player.length; i++) {
      handValue += players.player[i].rank;
    }
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
    let finalResultCheck = function () {
      let pS = handValue;
      let dS = getHandValue(1);
      let dS2 = getHandValue(2);
      let dS3 = getHandValue(3);
      let dS4 = getHandValue(4);
      let dS5 = getHandValue(5);
      let dS6 = getHandValue(6);
      let dS7 = getHandValue(7);
      let dS8 = getHandValue(8);
      let dS9 = getHandValue(9);
      if (pS > 21) {
        if (dS > 21) {
          if (dS2 > 21) {
            if (dS3 > 21) {
              if (dS4 > 21) {
                if (dS5 > 21) {
                  if (dS6 > 21) {
                    if (dS7 > 21) {
                      if (dS8 > 21) {
                        if (dS9 > 21) {
                          return "Tide";
                          //   rl.close();
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          return "you lose sucker pay up";
          //   rl.close();
        }
      } else if (
        dS > 21 &&
        dS2 > 21 &&
        dS3 > 21 &&
        dS4 > 21 &&
        dS5 > 21 &&
        dS6 > 21 &&
        dS7 > 21 &&
        dS9 > 21 &&
        dS9 > 21
      ) {
        return "you Win way to go champ";
        // rl.close();
      } else if (
        pS > dS &&
        pS > dS2 &&
        pS > dS3 &&
        pS > dS4 &&
        pS > dS5 &&
        pS > dS6 &&
        pS > dS7 &&
        pS > dS9 &&
        pS > dS9
      ) {
        return "you Win way to go champ";
        // rl.close();
      } else if (
        pS === dS &&
        pS === dS2 &&
        pS === dS3 &&
        pS === dS4 &&
        pS === dS5 &&
        pS === dS6 &&
        pS === dS7 &&
        pS === dS9 &&
        pS === dS9
      ) {
        return "Tide";
        // rl.close();
      } else {
        return "you lose sucker pay up";
        // rl.close();
      }
    };
    cl(finalResultCheck());
  } else {
    cl("Not an option");
  }

  rl.resume();
};
