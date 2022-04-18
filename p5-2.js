///<reference path="lib/p5.global-mode.d.ts" />

var setup = function () {
  createCanvas(1500, 800);
  frameRate(60);
};

let shape = {
  x: 700,
  y: 400,
  vx: -15,
  vy: 15,
  draw: function () {
    fill("blue");

    circle((this.x += this.vx), (this.y += this.vy), 100);

    if (this.x < 0 || this.x > 1500) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > 800) {
      this.vy = -this.vy;
    }
  },
};

let shape2 = {
  x: 100,
  y: 200,
  vx: -20,
  vy: 20,
  draw: function () {
    fill("orange");

    circle((this.x += this.vx), (this.y += this.vy), 50);

    if (this.x < 0 || this.x > 1500) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > 800) {
      this.vy = -this.vy;
    }
  },
};
let shape3 = {
  x: 1000,
  y: 700,
  vx: -50,
  vy: 50,
  draw: function () {
    fill("neon");

    circle((this.x += this.vx), (this.y += this.vy), 75);

    if (this.x < 0 || this.x > 1500) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > 800) {
      this.vy = -this.vy;
    }
  },
};
var draw = function () {
  background(random(0, 255), random(0, 255), random(0, 225));
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape2.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  shape3.draw();
  fill("yellow");
  //   main outside
  circle(700, 100, 100);
  circle(500, 300, 100);
  circle(700, 500, 100);
  circle(900, 300, 100);
  // small outside
  fill("red");
  circle(800, 400, 200);
  circle(600, 200, 200);
  circle(800, 200, 200);
  circle(600, 400, 200);

  fill("brown");
  circle(700, 300, 400);
};
alert("if you have epilepsy or can not take flashing lights don't watch");
