// Using the mouse Assignment 2 created by Zubair Abdalla on April 15 2019
function setup() {
  // put setup code here
  createCanvas(800,600)
  background(255)
}

function draw() {
  fill(255,255,255)
  line(width/2,height/2,mouseX,mouseY)
  // put drawing code here
  ellipseMode(CENTER)
  if (mouseIsPressed) {
    fill(random(255),random(255),random(255))
    ellipse(mouseX,mouseY,50,50)

  }
  fill(0)
  text('Press R to refresh the canvas',width/2,500)

}

function keyPressed() {
  if (keyCode === 82)
  clear()
}
