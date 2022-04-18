///<reference path="lib/p5.global-mode.d.ts" />
let shapes = [];
var setup = function () {
  createCanvas(1500, 800);
  frameRate(30);
  for (let i = 0; i < 50; i++) {
    shapes.push(new Circle());
    shapes.push(new Square());
    // shape.push(new rect());
  }
};
//

class Shape {
  constructor() {
    (this.x = random(0, 300)),
      (this.y = random(0, 200)),
      (this.vx = random(0, 10)),
      (this.vy = random(0, 10)),
      (this.color = [random(255), random(255), random(255)]);
  }
  draw() {
    fill(this.color);

    if (this.x < 0 || this.x > 1500) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > 800) {
      this.vy = -this.vy;
    }
  }
}
class Circle extends Shape {
  draw() {
    super.draw();
    circle((this.x += this.vx), (this.y += this.vy), 75);
  }
}
class Square extends Shape {
  draw() {
    super.draw();
    square((this.x += this.vx), (this.y += this.vy), 75);
  }
}
// class Triangle extends Shape {
//   draw() {
//     super.draw();
//     triangle((this.x += this.vx), (this.y += this.vy), 75);
//   }
// }
// class Rect extends Shape {
//   draw() {
//     super.draw();
//     rect((this.x += this.vx), (this.y += this.vy), 75, 100);
//   }
// }

// class Square {
//   constructor() {
//     (this.x = random(0, 300)),
//       (this.y = random(0, 200)),
//       (this.vx = random(0, 10)),
//       (this.vy = random(0, 10)),
//       (this.color = random(255));
//   }
//   draw() {
//     fill(this.color);

//     square((this.x += this.vx), (this.y += this.vy), 75);

//     if (this.x < 0 || this.x > 1500) {
//       this.vx = -this.vx;
//     }
//     if (this.y < 0 || this.y > 800) {
//       this.vy = -this.vy;
//     }
//   }
// }

var draw = function () {
  background(100);
  background(0, 0, 255);
  fill("blue");
  // for (let x = 0; x < 50; x++) {
  //   fill(random(255));
  //   circle(x * 50, x * 50, 50);
  // }

  for (let index = 0; index < shapes.length; index++) {
    const shape = shapes[index];
    shape.draw();
  }
};
