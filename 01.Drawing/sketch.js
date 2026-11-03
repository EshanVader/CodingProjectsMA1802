//Drawing the Flash

function setup() {
  createCanvas(1100, 1100);
}

function draw() {
  background(220);
  fill(200,0,0)
  strokeWeight(10)
  ellipse(500,300, 500)
  
  //SMILE
  strokeWeight(30);
arc(500, 450, 300, 100 , 0, PI);
  
  //EYES
  strokeWeight(2);
   fill(255,255,255)
ellipse(400, 220, 160, 100);
ellipse(600, 220, 160, 100);
  

ellipse(400, 220, 150, 100);
ellipse(600, 220, 150, 100);

fill(0)
ellipse(400, 220, 50, 50);
ellipse(600, 220, 50, 50);

 //Lightning Bolts
  strokeWeight(8);

  fill(250,200,0)
  beginShape();
  vertex(900, 70);
  vertex(730, 220);
  vertex(780, 220);
  vertex(700, 340);
  vertex(865, 190);
  vertex(810, 190);
  endShape(CLOSE);
  
strokeWeight(8);

  fill(250,200,0)
translate(0, 400);
  scale(1, -1);

  beginShape();
  vertex(300, 70);
  vertex(130, 220);
  vertex(180, 220);
  vertex(100, 340);
  vertex(265, 190);
  vertex(210, 190);
  endShape(CLOSE);


}