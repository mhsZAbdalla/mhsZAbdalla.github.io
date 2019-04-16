//Using the keyboard assingment by Zubair Abdalla created on April 15 2019
//Character Class
class Player1 {
  constructor(x,y,xvel,yvel) {
    this.x = x
    this.y = y
    this.xvel = xvel
    this.yvel = yvel
  }
  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x = this.x - this.xvel
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x = this.x + this.xvel
    }
    if (keyIsDown(UP_ARROW)) {
      this.y = this.y - this.yvel
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y = this.y + this.yvel
    }

  }
  display() {
    fill(0)
    rectMode(CENTER)
    rect(this.x,this.y,50,50)
  }

}
// Character class for player 2
class Player2 {
  constructor(x,y,xvel,yvel) {
    this.x = x
    this.y = y
    this.xvel = xvel
    this.yvel = yvel
  }
  move() {
    if (keyIsDown(65)) {
      this.x = this.x - this.xvel
    }
    if (keyIsDown(68)) {
      this.x = this.x + this.xvel
    }
    if (keyIsDown(87)) {
      this.y = this.y - this.yvel
    }
    if (keyIsDown(83)) {
      this.y = this.y + this.yvel
    }

  }
  display() {
    fill(0)
    rectMode(CENTER)
    rect(this.x,this.y,50,50)
  }

}

var player1 = new Player1(100,100,3,3)
var player2 = new Player2(500,100,3,3)

function setup() {
  // put setup code here
  createCanvas(800,600)
}

function draw() {
  background(255)
  // put drawing code here
  player1.move()
  player1.display()
  player2.move()
  player2.display()
  text('Player 1 moves using the Arrow Keys, Player 2 moves using WASD',width/2-width/6,500)
}
