// Player class
class Player {
  constructor(x,y,xvel,yvel) {
    this.x = x
    this.y = y
    this.xvel = xvel
    this.yvel = yvel
  }
  update() {
    //print(this.yvel)
    this.y += this.yvel
    this.yvel += gravity
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.xvel
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.xvel
    }
    if (this.x <= 0) {
      this.x = 0
    }
//    else if (this.x + 25 >= width) {
//      this.x = width - 25
//    }
    if (this.y + 50 >= height) {
      touchingGround = true
      this.y = height - 50
      this.yvel = 10
    }
    else {
      touchingGround = false
    }
    // Jump
    if (keyIsDown(UP_ARROW) && touchingGround) {
      this.yvel *= -1
    }
  }
  display() {
    rectMode(CORNER)
    fill(255)
    noStroke()
    smooth()
    rect(this.x,this.y,25,50)
  }
}

// Global Variables
var level = 1
var gravity = 0.4
var touchingGround = false

function setup() {
  // put setup code here
  frameRate(60)
  createCanvas(800,600)
  player1 = new Player(width/2,height/2,3,3)
}

function draw() {
  // put drawing code here

  if (level === 1) {
    background(0)
    translate(player1.x*(-1)+width/2-25,0)
    fill(127)
    rectMode(CORNER)
    rect(700,500,50,100)
    rect(-100,0,100,height)
  }
  player1.display()
  player1.update()
}
