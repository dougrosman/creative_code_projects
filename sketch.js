let x, y, dx, dy, hue, size, str, rate, rotRate;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200, 120, 120);
    x = random(width);
    y = random(height);
    dx = random(1, 2);
    dy = random(1, 2);
    rotRate = random(50, 150);
    hue = 0;
    // colorMode(HSB);
    str = "cool home page!"
    rate = floor(random(20, 80));
    //textAlign(CENTER);
}

function draw() {
    //ellipse(mouseX, mouseY, mouseX, mouseY)

    hue = frameCount % 360;
    size = map(sin(frameCount/rate), -1, 1, 20, 70);

    fill(hue, 100, 100);
    stroke(10);
    strokeWeight(2);
    textSize(size);
    push();
    translate(x, y);
    rotate(frameCount/rotRate)
    text(str, 0, 0)

    x+=dx;
    y+=dy;

    
    if(x > width ) {
        x = -textWidth(str);
        dx = random(1, 2);
        rate = floor(random(20, 80));
        rotRate = random(50, 150);
    }

    if(y > height + (textAscent() + textDescent())) {
        y = -(textAscent() + textDescent());
        dy = random(1, 2);
        rate = floor(random(20, 80));
        rotRate = random(50, 150);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    colorMode(RGB);
    background(200, 120, 120);
}