/*
Moving Things Mini Assignment created by Zubair Abdalla April 4 2019
*/
//Creating a ball object
class Ball {
  constructor(x, y, s, xvel, yvel) {
    this.x = x
    this.y = y
    this.s = s
    this.xvel = xvel
    this.yvel = yvel
  }
  move() {
    this.x = this.x + this.xvel
    this.y = this.y + this.yvel
  }
  display() {
    ellipseMode(CENTER)
    noStroke()
    fill(255)
    ellipse(this.x, this.y, this.s)
  }
}
//Creating a new object
var ball1 = new Ball(100,100,50,5,5)
var ball2 = new Ball(400,150,100,3,3)

function setup() {
  // put setup code here
  createCanvas(800,600)
  frameRate(60)
}

function draw() {
  // put drawing code here
  background(0)
  //Variable to check the distance between the two balls
  var d = dist(ball1.x,ball1.y,ball2.x,ball2.y)
  //Collision event
  if (d <= ball1.s/2+ball2.s/2) {
    background(0,0,255)

  }
  //Functions for ball1
  ball1.display()
  ball1.move()
  //Functions for ball2
  ball2.display()
  ball2.move()

  //Ball wall bounce (ball1)
  if (ball1.x+ball1.s/2>=width || ball1.x-ball1.s/2<=0) {
    ball1.xvel = ball1.xvel*(-1)
  }
  if (ball1.y+ball1.s/2>=height || ball1.y-ball1.s/2<=0) {
    ball1.yvel = ball1.yvel*(-1)
  }

  //Ball wall bounce (ball2)
  if (ball2.x+ball2.s/2>=width || ball2.x-ball2.s/2<=0) {
    ball2.xvel = ball2.xvel*(-1)
  }
  if (ball2.y+ball2.s/2>=height || ball2.y-ball2.s/2<=0) {
    ball2.yvel = ball2.yvel*(-1)
  }




}
