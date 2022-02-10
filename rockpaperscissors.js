let cl = console.log;

let getRPS = function () {
  let rps = ["rock", "paper", "scissors"];
  return rps[Math.floor(Math.random() * rps.length)];
};

let getUserRPS = function () {
  let userrps = process.argv[2];
  return userrps || getRPS();
};

let getWinner = function (userrps, computerImput) {
  if (userrps === computerImput) {
    return "tie";
  } else if (
    (userrps === "rock" && computerImput === "scissors") ||
    (userrps === "scissors" && computerImput === "paper") ||
    (userrps === "paper" && computerImput === "rock")
  ) {
    return "you win";
  } else {
    return "you loose";
  }
};

let congradulate = function (result) {
  if (result === "tie") {
    cl("no one wins");
  } else if (result === "you win") {
    cl("congradulations");
  } else {
    cl("to bad better luck next time");
  }
};
let wins = 0;
let losses = 0;
let ties = 0;

for (let index = 0; index < 100; index++) {
  let userrps = getUserRPS();
  let computerImput = getRPS();
  cl("you picked", userrps);
  cl("computer picked", computerImput);
  congradulate(getWinner(userrps, computerImput));
  cl(getWinner(userrps, computerImput));
  if (getWinner(userrps, computerImput) === "you win") {
    wins += 1;
  } else if (getWinner(userrps, computerImput) === "you loose") {
    losses += 1;
  } else {
    ties += 1;
  }
}
cl("you tied this many times " + ties);
cl("you lost this many times " + losses);
cl("you won this many times " + wins);
