
let rectY = [0, 50, 100, 150, 200, 250, 300, 350];
let speeds = [2, 2, 2, 2, 2, 2, 2, 2];

let rectX = [0, 50, 100, 150, 200, 250, 300, 350];
let horizontalSpeeds = [2, 2, 2, 2, 2, 2, 2, 2];

let colours = [
  'red', 'orange', 'yellow', 'green',
  'blue', 'purple', 'pink', 'cyan'
];

function setup() {
  createCanvas(500, 500);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(0);

  // Vertical rectangles
  for (let i = 0; i < rectY.length; i++) {
    let x = (i + 1) * 45 - 20;
    let y = rectY[i] + speeds[i];

    fill(colours[i]);
    rect(x, y, 25, 25);

    if (y >= height + 25) {
      y = -25;
    }

    rectY[i] = y;
  }

  // Horizontal rectangles
  for (let i = 0; i < rectX.length; i++) {
    let x = rectX[i] + horizontalSpeeds[i];
    let y = (i + 1) * 45 - 20;

    fill(colours[i]);
    rect(x, y, 25, 25);

    if (x >= width + 25) {
      x = -25;
    }

    rectX[i] = x;
  }
}
