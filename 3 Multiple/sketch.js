function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

 
for(let i=0; i<=100; i++){
	circle(i, i, 30);
}
let i=1;

while(i<=100){
	circle(i, i, i, 30);
	i++;
}
}
