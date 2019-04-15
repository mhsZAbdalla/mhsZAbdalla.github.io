// Using the mouse Assignment 1 created by Zubair Abdalla on April 15 2019
//Global variables
var size = 100

function setup() {
  // put setup code here
  createCanvas(800,600)
  frameRate(60)
}

function draw() {
  // put drawing code here
  background(255)
  fill(0)
  myShape(mouseX,mouseY)
  if (mouseIsPressed) {
    size = size + 2
  }

}

function myShape(x,y) {
  fill(0)
  ellipseMode(CENTER)
  ellipse(x,y,size/2,size)
  ellipse(x,y,size,size/2)

}
