///<reference path="lib/p5.global-mode.d.ts" />

var setup = function () {
  createCanvas(600, 400);
  frameRate(5);
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
  square(325, 200, 25);
  square(300, 200, 25);
  square(275, 200, 25);
  square(250, 200, 25);
  square(225, 200, 25);
  square(200, 200, 25);
  // cannon legs
  fill("gray");
  square(350, 225, 25);
  square(375, 250, 25);
  square(300, 225, 25);
  square(275, 250, 25);
  // filling in the legs
  square(325, 225, 25);
  square(325, 250, 25);
  square(300, 250, 25);
  square(350, 250, 25);
  //wooden under body
  fill("#a0522d");
  square(275, 275, 25);
  square(300, 275, 25);
  square(325, 275, 25);
  square(350, 275, 25);
  square(375, 275, 25);
  square(400, 275, 25);
  square(425, 275, 25);
  // cannon ball
  fill(random(255));
  circle(100, 210, 25);
  // fuse
  fill("red");
  square(325, 190, 10);
  // sun
  fill("yellow");
  circle(550, 10, 200);
  square(400, 75, 25);
  square(500, 150, 25);
  square(375, -4, 25);
  // grass
  fill("green");
  square(1, 300, 600);
};
