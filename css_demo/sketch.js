let numParticles = 1000
let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    for(let i = 0; i < numParticles; i++) {
        particles.push(new Particle())
    }
}

function draw() {
    //background(255);
    particles.forEach((p) => {
        p.update();
        p.display();
    })
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


class Particle {

    constructor() {
        this.pos = createVector(width/2, height/2);
        this.vel = createVector(random(-.1, .1), -3)
        this.acc = createVector(0, 0.1)
        this.size = random(2, 6)
        this.color = [random(255), random(100), random(100)]
    }

    update() {
        this.pos.add(this.vel)
        this.vel.add(this.acc)
        if(this.pos.y > height+this.size || this.pos.x < -this.size || this.pos.x > width + this.size) {
            this.pos = createVector(width/2, height/2);
            this.vel = createVector(random(-5, 5), -8)
            this.size = random(2, 6)
        }
    }

    display() {
        noStroke()
        fill(this.color)
        circle(this.pos.x, this.pos.y, this.size)
    }
}