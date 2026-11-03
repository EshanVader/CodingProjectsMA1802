let hum; 
let img; 

function preload(){
  hum = loadSound("spino sounds.wav");
  img = loadImage('spino.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  tint(250, 70, 70);
  img.filter(POSTERIZE, 3);
  image(img,500, windowHeight-700, 800, 600);
  noTint();
}

function mouseClicked(){
  hum.loop();
  hum.amp(0.2); 
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
