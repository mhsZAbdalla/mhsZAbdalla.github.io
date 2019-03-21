/*
House Assignment
Created by Zubair Abdalla
Mar 18 2019
*/
function setup() {
  // put setup code here
  var canv = createCanvas(800, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canv.position(x, y);

}

function draw() {
  // variables for house width and height
  let houseWidth=100;
  /*
  The scale value can be changed to make the entire house bigger or smaller
  This should be the only variable that needs to be changed
  */
  let scale=1;

  rectMode(CENTER);
  // Sky
  fill(51,102,255);
  rect(400,300,800,600);
  // Sky detail (Sun)
  fill(255,255,102);
  ellipse(0,0,100,100)
  // Ground
  fill(0,51,0);
  rect(400,600,800,600);
  // Base of the house
  fill(230,242,255);
  rect(width/2,height/2-houseWidth/4*scale,houseWidth*scale,houseWidth/2*scale);
  // Window of the house
  fill(255,255,255);
  rect(width/2-25*scale,height/2-10*scale-houseWidth/4*scale,houseWidth*scale/4,houseWidth/2*scale/4);
  // Door of the house
  fill(153,102,51);
  rect(width/2,height/2+10*scale-houseWidth/4*scale,houseWidth/8*scale,25*scale);
  // Chimney
  rect(width/2-30*scale,height/2-40*scale-houseWidth/4*scale,houseWidth/8*scale,houseWidth/4*scale);
  // Door Knob
  fill(255,204,0);
  ellipse(width/2-2*scale,height/2+10*scale-houseWidth/4*scale,houseWidth/32*scale,houseWidth/32*scale);
  // Roof of the house
  fill(0,51,102);
  triangle(width/2-50*scale,height/2-25*scale-houseWidth/4*scale,width/2+50*scale,height/2-25*scale-houseWidth/4*scale,width/2,height/2-50*scale-houseWidth/4*scale);
  // Roof Window
  fill(255,255,255);
  ellipse(width/2,height/2-60*scale,houseWidth/8*scale,houseWidth/6*scale);

}
