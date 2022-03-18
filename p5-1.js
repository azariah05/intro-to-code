///<reference path="lib/p5.global-mode.d.ts" />

var setup = function () {
  createCanvas(2000, 800);
  frameRate(20);
};

var draw = function () {
  background(0, 0, 255);
  fill("blue");
  // for (let x = 0; x < 50; x++) {
  //   fill(random(255));
  //   circle(x * 50, x * 50, 50);
  // }

  // cannon body
  fill("black");
  square(925, 200, 25);
  square(900, 200, 25);
  square(875, 200, 25);
  square(850, 200, 25);
  square(825, 200, 25);
  square(800, 200, 25);
  // cannon legs
  fill("gray");
  square(950, 225, 25);
  square(975, 250, 25);
  square(900, 225, 25);
  square(875, 250, 25);
  // filling in the legs
  square(925, 225, 25);
  square(925, 250, 25);
  square(900, 250, 25);
  square(950, 250, 25);
  //wooden under body
  fill("#a0522d");
  square(875, 275, 25);
  square(900, 275, 25);
  square(925, 275, 25);
  square(950, 275, 25);
  square(975, 275, 25);
  square(1000, 275, 25);
  square(1025, 275, 25);
  // american flag post

  square(1035, 260, 15);
  square(1035, 245, 15);
  square(1035, 230, 15);
  square(1035, 215, 15);
  square(1035, 200, 15);
  square(1035, 185, 15);
  square(1035, 170, 15);
  square(1035, 155, 15);
  square(1035, 140, 15);
  square(1035, 125, 15);
  square(1035, 110, 15);
  square(1035, 95, 15);
  square(1035, 80, 15);
  // actual flag
  fill("#1e90ff");
  square(1050, 80, 15);
  square(1050, 95, 15);
  square(1050, 110, 15);
  square(1065, 80, 15);
  square(1065, 95, 15);
  square(1065, 110, 15);
  square(1080, 80, 15);
  square(1080, 95, 15);
  square(1080, 110, 15);
  // first red stripe
  fill("red");
  square(1095, 80, 15);
  square(1110, 80, 15);
  square(1125, 80, 15);
  square(1140, 80, 15);
  square(1155, 80, 15);
  square(1095, 110, 15);
  square(1110, 110, 15);
  square(1125, 110, 15);
  square(1140, 110, 15);
  square(1155, 110, 15);
  square(1095, 140, 15);
  square(1110, 140, 15);
  square(1125, 140, 15);
  square(1140, 140, 15);
  square(1155, 140, 15);
  square(1080, 140, 15);
  square(1065, 140, 15);
  square(1050, 140, 15);
  // first white stripe
  fill("white");
  square(1095, 95, 15);
  square(1110, 95, 15);
  square(1125, 95, 15);
  square(1140, 95, 15);
  square(1155, 95, 15);
  square(1095, 125, 15);
  square(1110, 125, 15);
  square(1125, 125, 15);
  square(1140, 125, 15);
  square(1155, 125, 15);
  square(1080, 125, 15);
  square(1065, 125, 15);
  square(1050, 125, 15);
  // cannon ball
  fill(random(255));
  circle(300, 210, 25);
  // wall
  fill("#696969");
  square(275, 275, 25);
  square(275, 250, 25);
  square(270, 225, 25);
  square(260, 200, 25);
  square(265, 175, 25);
  // fuse
  fill("red");
  square(925, 190, 10);
  // sun
  fill("yellow");
  circle(1500, 10, 200);
  square(1300, 75, 25);
  square(1400, 150, 25);
  square(1275, -4, 25);
  // grass
  fill("green");
  square(1, 300, 1600);
};
