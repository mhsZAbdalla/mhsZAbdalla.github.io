function setup() {
  // put setup code here
  createCanvas(800,600);
}

function draw() {
  // variables for house width and height
  let houseWidth=100;
  let height=50;
  let scale=1; // The scale value can be changed to make the entire house bigger or smaller. This should be the only variable that needs to be changed.
  let x=400;
  let y=300;

  rectMode(CENTER);
  // Sky
  fill(51,102,255);
  rect(400,300,800,600);
  // Ground
  fill(0,51,0);
  rect(400,600,800,600);
  // Base of the house
  fill(230,242,255);
  rect(x,y,houseWidth*scale,height*scale);
  // Window of the house
  fill(255,255,255);
  rect(x-25*scale,y-10*scale,houseWidth*scale/4,height*scale/4);
  // Door of the house
  fill(153,102,51);
  rect(x,y+10*scale,houseWidth/8*scale,25*scale);
  // Roof of the house
  fill(0,51,102);
  triangle(x-50*scale,y-25*scale,x+50*scale,y-25*scale,x,y-50*scale);

}
