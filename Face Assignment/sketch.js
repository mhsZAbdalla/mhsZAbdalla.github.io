/* Face assignment, Mar 25, created by
Zubair, Nick, Maki, Kayden */

// Global variables
let scale=1; // The scale value can be changed to change the size of Spongebob proportionally
let eyeDiameter=150*scale // don't change
let bodyWidth=550*scale // don't change
let dimpleWidth=100*scale // don't change

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(135,206,235);
}

function draw() {
  // put drawing code here
  // body of spongebob made by Maki
  sponge();
  noStroke();
  fill(252,260,3);
  rectMode(CENTER);
  rect(width/2,height/2, bodyWidth, bodyWidth+100*scale);
  // Functions for drawing Spongebob's face
  eyeLashes();
  drawEyes();
  drawDimples();
  drawNose();
  drawTeeth();
  drawMouth();
  drawChin();
  drawPants();
  holes();
  // Put any other functions above the noFill() ^^^
  noFill();
  stroke(0);
  // eyeCurve function parameters
  let arcX=width/2+eyeDiameter/1.5;
  let arcY=height/2-bodyWidth/2.5;
  let arcW=100*scale;
  let arcH=80*scale;
  let arc1=PI + QUARTER_PI;
  let arc2=TWO_PI;
  eyeCurve(arcX,arcY,arcW,arcH,arc1,arc2);
  arcX=width/2-eyeDiameter/1.5
  arc1=PI
  arc2=7*PI/4
  eyeCurve(arcX,arcY,arcW,arcH,arc1,arc2);
}

// Function for drawing eye lashes, made by Zubair Abdalla
function eyeLashes() {
  // Left eye
  fill(0);
  rect(width/2-eyeDiameter/2,height/2-bodyWidth/3,bodyWidth/64,100*scale);
  rect(width/2-eyeDiameter/1.25,height/2-bodyWidth/3,bodyWidth/64,75*scale);
  rect(width/2-eyeDiameter/5,height/2-bodyWidth/3,bodyWidth/64,75*scale);
  // Right eye
  fill(0);
  rect(width/2+eyeDiameter/2,height/2-bodyWidth/3,bodyWidth/64,100*scale);
  rect(width/2+eyeDiameter/1.25,height/2-bodyWidth/3,bodyWidth/64,75*scale);
  rect(width/2+eyeDiameter/5,height/2-bodyWidth/3,bodyWidth/64,75*scale);

}

// Function for drawing eyes, created by Zubair Abdalla
function drawEyes() {
  fill(255);
  stroke(0);
  strokeWeight(1);
  // Left eye
  ellipse(width/2-eyeDiameter/2,height/2-bodyWidth/4,eyeDiameter,eyeDiameter);
  // Right eye
  ellipse(width/2+eyeDiameter/2,height/2-bodyWidth/4,eyeDiameter,eyeDiameter);
  // Left eye detail
  fill(153,204,255);
  ellipse(width/2-eyeDiameter/4,height/2-bodyWidth/4,eyeDiameter/3,eyeDiameter/3);
  fill(0);
  ellipse(width/2-eyeDiameter/4,height/2-bodyWidth/4,eyeDiameter/6,eyeDiameter/6);
  // Right eye detail
  fill(153,204,255);
  ellipse(width/2+eyeDiameter/4,height/2-bodyWidth/4,eyeDiameter/3,eyeDiameter/3);
  fill(0);
  ellipse(width/2+eyeDiameter/4,height/2-bodyWidth/4,eyeDiameter/6,eyeDiameter/6);

}

// Function for drawing eye curves (eye brows), made by Zubair Abdalla
function eyeCurve(arcX,arcY,arcW,arcH,arc1,arc2) {
  arc(arcX, arcY, arcW, arcH, arc1, arc2);

}


// Spongebob's dimples, made by Nick
function drawDimples () {
 stroke(235,64,64);
 strokeWeight(1);
 fill(252,260,3);
 ellipse(width/2-eyeDiameter,height/2-eyeDiameter/2,dimpleWidth/1.42,dimpleWidth/1.66);
 noStroke();
 ellipse(width/2-eyeDiameter/0.8,height/2-eyeDiameter/2,dimpleWidth/2.5,dimpleWidth/2.5);
 fill(235,64,64);
 ellipse(width/2-eyeDiameter/1.05,height/2-eyeDiameter/2,dimpleWidth/12,dimpleWidth/12);
 ellipse(width/2-eyeDiameter/1.15,height/2-eyeDiameter/1.75,dimpleWidth/12,dimpleWidth/12);
 ellipse(width/2-eyeDiameter/0.95,height/2-eyeDiameter/1.75,dimpleWidth/12,dimpleWidth/12);

 stroke(235,64,64);
 fill(252,260,3);
 ellipse(width/2+eyeDiameter,height/2-eyeDiameter/2,dimpleWidth/1.42,dimpleWidth/1.66);
 noStroke();
 ellipse(width/2+eyeDiameter/0.8,height/2-eyeDiameter/2,dimpleWidth/2.5,dimpleWidth/2.5);
 fill(235,64,64);
 ellipse(width/2+eyeDiameter/1.05,height/2-eyeDiameter/2,dimpleWidth/12,dimpleWidth/12);
 ellipse(width/2+eyeDiameter/1.15,height/2-eyeDiameter/1.75,dimpleWidth/12,dimpleWidth/12);
 ellipse(width/2+eyeDiameter/0.95,height/2-eyeDiameter/1.75,dimpleWidth/12,dimpleWidth/12);


}
// Spongebob's nose made by Nick
function drawNose () {
  stroke(0);
  strokeWeight(1);
  fill(252,260,3);
  ellipse(width/2,height/2-eyeDiameter/2,dimpleWidth/1.7,dimpleWidth/1.3);
  noStroke();
  fill(252,260,3);
  ellipse(width/2-eyeDiameter/8,height/2-eyeDiameter/3,dimpleWidth/3,dimpleWidth/3);
}

// Spongebob's teeth, made by Nick
function drawTeeth () {
fill(255);
stroke(0);
strokeWeight(1);
// Left tooth
rect(width/2-bodyWidth/18,height/2,bodyWidth/11,bodyWidth/8);
// Right tooth
rect(width/2+bodyWidth/18,height/2,bodyWidth/11,bodyWidth/8);
}

// Spongebob's mouth, made by Nick
function drawMouth () {
  stroke(0);
  strokeWeight(1);
  fill(252,260,3);
  arc(width/2,height/2-eyeDiameter/3.4,eyeDiameter*2,bodyWidth/6,2*PI,PI);

}

// Spongebob's chin, made by Nick
function drawChin() {

fill(252,260,3);
stroke(235,64,64);
strokeWeight(1);
// Left arc
arc(width/2-eyeDiameter/4,height/2+eyeDiameter/2,eyeDiameter/2,eyeDiameter/4,2*PI,PI);
// Right arc
arc(width/2+eyeDiameter/4,height/2+eyeDiameter/2,eyeDiameter/2,eyeDiameter/4,2*PI,PI);

}


// Spongebob's body made by Maki
function sponge()
{
  stroke(153, 153, 0);
  strokeWeight(8*scale);
  fill(252,260,3);

  //Sponge 'bumps'

  // Left side
  ellipse(width/2-bodyWidth/2.25,height/2+bodyWidth/3,eyeDiameter/1.5);
  ellipse(width/2-bodyWidth/2.25,height/2+bodyWidth/5.25,eyeDiameter/1.5);
  ellipse(width/2-bodyWidth/2.25,height/2+bodyWidth/24,eyeDiameter/1.5);
  ellipse(width/2-bodyWidth/2.25,height/2-bodyWidth/10,eyeDiameter/1.5);
  ellipse(width/2-bodyWidth/2.25,height/2-bodyWidth/4,eyeDiameter/1.5);
  ellipse(width/2-bodyWidth/2.25,height/2-bodyWidth/2.5,eyeDiameter/1.5);
  ellipse(width/2-bodyWidth/2.25,height/2-bodyWidth/1.9,eyeDiameter/1.5);
  // Right side
  ellipse(width/2+bodyWidth/2.25,height/2+bodyWidth/3,eyeDiameter/1.5);
  ellipse(width/2+bodyWidth/2.25,height/2+bodyWidth/5.25,eyeDiameter/1.5);
  ellipse(width/2+bodyWidth/2.25,height/2+bodyWidth/24,eyeDiameter/1.5);
  ellipse(width/2+bodyWidth/2.25,height/2-bodyWidth/10,eyeDiameter/1.5);
  ellipse(width/2+bodyWidth/2.25,height/2-bodyWidth/4,eyeDiameter/1.5);
  ellipse(width/2+bodyWidth/2.25,height/2-bodyWidth/2.5,eyeDiameter/1.5);
  ellipse(width/2+bodyWidth/2.25,height/2-bodyWidth/1.9,eyeDiameter/1.5);
  // Top
  ellipse(width/2-bodyWidth/3.15,height/2-bodyWidth/1.9,eyeDiameter/1.5);
  ellipse(width/2-bodyWidth/5.25,height/2-bodyWidth/1.9,eyeDiameter/1.5);
  ellipse(width/2-bodyWidth/17,height/2-bodyWidth/1.9,eyeDiameter/1.5);
  ellipse(width/2+bodyWidth/14,height/2-bodyWidth/1.9,eyeDiameter/1.5);
  ellipse(width/2+bodyWidth/5,height/2-bodyWidth/1.9,eyeDiameter/1.5);
  ellipse(width/2+bodyWidth/3.125,height/2-bodyWidth/1.9,eyeDiameter/1.5);

}

// Function for drawing pants, made by kayden jiwa
function drawPants() {
  // Pants
   fill (255);
   stroke(0);
   rect(width/2, height/2+bodyWidth/2.15, bodyWidth, bodyWidth/9);
   fill(172,115,57);
   rect(width/2, height/2+bodyWidth/1.8, bodyWidth, bodyWidth/9);
   fill(0);
   rect(width/2-bodyWidth/2.6, height/2+bodyWidth/1.85, 550*scale/6, 650*scale/25);

   rect(width/2-bodyWidth/6, height/2+bodyWidth/1.85, 550*scale/6, 650*scale/25);

   rect(width/2+bodyWidth/2.6, height/2+bodyWidth/1.85, 550*scale/6, 650*scale/25);

   rect(width/2+bodyWidth/6, height/2+bodyWidth/1.85, 550*scale/6, 650*scale/25);

   // Tie
   fill(255,0,0);
   rect(width/2,height/2+bodyWidth/2.3,28*scale,28*scale);
   stroke(0);
   fill(255);
   triangle(width/2-eyeDiameter/1.8,height/2+bodyWidth/2.45,width/2-bodyWidth/36,height/2+bodyWidth/2.45,width/2-bodyWidth/16,height/2+bodyWidth/2.15);
   triangle(width/2+bodyWidth/36,height/2+bodyWidth/2.45,width/2+eyeDiameter/1.8,height/2+bodyWidth/2.45,width/2+bodyWidth/16,height/2+bodyWidth/2.15);
   noStroke();
   fill(255,0,0);
   quad(width/2-bodyWidth/16,height/2+bodyWidth/1.81,width/2+bodyWidth/16,height/2+bodyWidth/1.81,width/2+14*scale,height/2+bodyWidth/2.2,width/2-14*scale,height/2+bodyWidth/2.2);
   triangle(width/2-bodyWidth/16,height/2+bodyWidth/1.81,width/2+bodyWidth/16,height/2+bodyWidth/1.81,width/2,height/2+bodyWidth/1.7);
 }

// Function for drawing sponge holes, made by Maki
function holes() {
  noStroke();
  fill(201, 190, 64);
  ellipse(width/2-eyeDiameter*1.4,height/2-eyeDiameter*1.65, 40*scale, 50*scale);
  ellipse(width/2-eyeDiameter*1.5,height/2-eyeDiameter*1.2, 25*scale, 30*scale);
  ellipse(width/2+eyeDiameter*1.4,height/2-eyeDiameter*1.8, 30*scale, 35*scale);
  ellipse(width/2-eyeDiameter*1.5,height/2+eyeDiameter/2, 25*scale, 35*scale);
  ellipse(width/2-eyeDiameter*1.3,height/2+eyeDiameter, 40*scale, 50*scale);
  ellipse(width/2+eyeDiameter*1.3,height/2+eyeDiameter/2, 40*scale, 50*scale);
  ellipse(width/2+eyeDiameter,height/2+eyeDiameter, 25*scale, 35*scale);
}
