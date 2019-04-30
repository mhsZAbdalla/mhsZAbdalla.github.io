//Global Variables
var time = 0
var balls = []

//Ball Class
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


function setup() {
  // put setup code here
  createCanvas(800,600)
  frameRate(60)
  for (var i = 0; i < 1; i++) {
    balls[i] = new Ball(random(700),random(500),random(100),random(10),random(10))
  }

}

function draw() {
  // put drawing code here

  background(0)
  for (var i = 0; i < balls.length; i++) {
    balls[i].move()
    balls[i].display()

  }

  if (frameCount % 60 == 0) {
    time ++
    //Displays the current time in the console
    print(time)
  }



  //Checks to see if time is divisible by 4
  if (time % 4 == 0) {
    newBall()

  }


}

function newBall() {
  var createBall = new Ball(random(700),random(500),random(100),random(10),random(10))
  //Pushes a new Ball class to the end of the array
  balls.push(createBall)
}
