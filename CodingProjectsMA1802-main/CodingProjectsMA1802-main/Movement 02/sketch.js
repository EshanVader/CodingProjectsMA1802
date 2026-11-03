let i = 0;

// Star Wars "Revenge of the Sith"
const starWarsText = "Let her go, Anakin! Anakin... Let her go! You turned her against me! You have done that yourself! YOU WILL NOT TAKE HER FROM ME! Your anger and your lust for power have already done that. You have allowed this Dark Lord to twist your mind until you have become the very thing you swore to destroy. Don't lecture me, Obi-Wan. I see through the lies of the Jedi. I do not fear the dark side as you do! I have brought peace, justice, freedom, and security to my new Empire! Your new Empire?! Don't make me kill you. Anakin, my allegiance is to the Republic, to democracy! If you're not with me, then you're my enemy! Only a Sith Lord deals in absolutes. I will do what I must. You will try.";
const textArray = starWarsText.split(" ");


function setup(){
  createCanvas(1300, 1000);
  background(0);
  frameRate(5);
}


function draw(){
  let x = random(width)
  let y = random(height);

  if (i < textArray.length) {

    fill(255,255,0);
    stroke(50);
    console.log(i);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y); 
    i++;
  }else{
    i=0;
    background(0);
  }
  
}