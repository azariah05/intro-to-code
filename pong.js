///<reference path="lib/p5.global-mode.d.ts" />

class Pong {
  constructor() {
    this.leftScore = 0;
    this.rightScore = 0;

    this.table = new Table();
    this.leftPadle = leftPadle;
    this.rightPadle = new rightPadle();
    this.ball = new Ball();
  }
  draw() {
    this.table.draw();
    this.leftPadle.draw();
    this.rightPadle.draw();
    this.ball.draw();
  }
}
class Table {
  draw() {
    background("blue");
    let midPoint = windowWidth / 2;
    for (let y = 0; y < windowHeight; y++) {
      fill(50);
      rect(midPoint - 5, y, 10, 20);
      y += 40;
    }
  }
}
class Padle {
  constructor() {
    this.x = 10;
    this.y = windowHeight / 2;
    this.width = 10;
    this.hight = 100;
  }
  draw() {
    fill("black");
    rect(this.x, this.y, this.width, this.hight);
  }
}
class leftPadle extends Padle {
  x = 40;
  draw() {
    super.draw();
  }
}
class rightPadle extends Padle {
  x = windowWidth - 50;
  draw() {
    this.y = mouseY;
    super.draw();
  }
}
class Ball {
  constructor() {
    (this.x = random(windowWidth)),
      (this.y = random(windowHeight)),
      (this.vx = 6),
      (this.vy = 4),
      (this.color = [random(255), random(255), random(255)]);
  }
  draw() {
    fill(this.color);

    if (this.x < 0 || this.x > windowWidth) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > windowHeight) {
      this.vy = -this.vy;
    }
    square(this.x, this.y, 10);
    this.x += this.vx;
    this.y += this.vy;
  }

  draw() {}
}
