///<reference path="lib/p5.global-mode.d.ts" />

function setup() {
  createCanvas(1500, 800);
  background("grey");
  frameRate(30);
}

function draw() {
  drawFlower(random(width), random(height), random(10, 100));
}

function drawFlower(flowerX, flowerY, petalSize) {
  let petalDistance = petalSize / 2;

  fill(random(255), random(255), random(255));

  square(flowerX - petalDistance, flowerY - petalDistance, petalSize);

  circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);

  circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);

  circle(flowerX + petalDistance, flowerY + petalDistance, petalSize);

  fill(random(255));
  circle(flowerX, flowerY, petalSize);
}
