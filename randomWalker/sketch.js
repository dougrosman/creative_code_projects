let w;

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(200, 80, 0)

  w = new RandomWalker()
}

function draw() {

  w.step();
  w.show();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(200, 80, 0)
}

class RandomWalker {

  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.prevX = this.x;
    this.prevY = this.y;
    this.color = color(70, 70, 255)
  }

  step() {

    this.prevX = this.x;
    this.prevY = this.y;
    this.speed = random(2, 10)

    let rX = random(-this.speed, this.speed);
    let rY = random(-this.speed, this.speed);

    this.x+=rX;
    this.y+=rY;

  }

  show() {
    stroke(this.color)
    strokeWeight(2);
    line(this.x, this.y, this.prevX, this.prevY)
  }

}