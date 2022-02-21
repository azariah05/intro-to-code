const cl = console.log;
const ct = console.table;
// function card(value, name, suit) {
//   this.value = value;
//   this.name = name;
//   this.suit = suit;
// }

// function deck() {
//   this.names = [
//     "ace",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "Jack",
//     "Queen",
//     "King",
//   ];
//   this.suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
//   let cards = [];

//   for (let s = 0; s < this.suits.length; s++) {
//     for (let n = 0; n < this.names.length; n++) {
//       cards.push(new card(n + 1, this.names[n], this.suits[s]));
//     }
//   }
//   return cards;
// }
// let myDeck = new deck();

// function shuffle(o) {
//   for (
//     let j, x, i = o.length;
//     i;
//     j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
//   );
//   return o;
// }

// myDeck = shuffle(myDeck);
// cl(myDeck);

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

let hitCpu1 = function () {
  if (handValue1 < 21) {
    players.cpu1.push(dealCard());
  }
};
let hitCpu2 = function () {
  if (handValue2 < 19) {
    players.cpu2.push(dealCard());
  }
};
let hitCpu3 = function () {
  if (handValue3 < 18) {
    players.cpu3.push(dealCard());
  }
};
let hitCpu4 = function () {
  if (handValue4 < 17) {
    players.cpu4.push(dealCard());
  }
};
let hitCpu5 = function () {
  if (handValue5 < 16) {
    players.cpu5.push(dealCard());
  }
};
let hitCpu6 = function () {
  if (handValue6 < 15) {
    players.cpu6.push(dealCard());
  }
};
let hitCpu7 = function () {
  if (handValue7 < 14) {
    players.cpu7.push(dealCard());
  }
};
let hitCpu8 = function () {
  if (handValue8 < 14) {
    players.cpu8.push(dealCard());
  }
};
let hitCpu9 = function () {
  if (handValue9 < 13) {
    players.cpu9.push(dealCard());
  }
};

let hitallCpu = function () {
  hitCpu1();
  hitCpu2();
  hitCpu3();
  hitCpu4();
  hitCpu5();
  hitCpu6();
  hitCpu7();
  hitCpu8();
};

hitallCpu();

cl(handValue1);
// cl(deck.length);
ct(players.player);
let handValue = 0;
for (let i = 0; i < players.player.length; i++) {
  handValue += players.player[i].rank;
}

const hitMe = function () {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`do you want another card?`, (name) => {
    switch (name) {
      case "yes":
        players.player.push(dealCard());
        ct(players.player);
        cl(handValue);
        readline.close();
        break;
      case "no":
        cl("ok");
        cl(handValue);
        readline.close();
        break;
      default:
        cl("Not an option");
    }
  });
};
hitMe();
