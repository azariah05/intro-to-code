const cl = console.log;

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
  players.cpu1.push(dealCard);
  players.cpu2.push(dealCard);
  players.cpu3.push(dealCard);
  players.cpu4.push(dealCard);
  players.cpu5.push(dealCard);
  players.cpu6.push(dealCard);
  players.cpu7.push(dealCard);
  players.cpu8.push(dealCard);
  players.cpu9.push(dealCard);
}
cl(deck.length);
console.table(players.player);
// console.table(deck);
let userrps = process.argv[2];
