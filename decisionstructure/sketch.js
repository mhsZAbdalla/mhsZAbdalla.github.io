//Global Variables
new p5 // Allows the use of undefined functions outside of setup and draw
var userIn
var comIn = ['rock','paper','scissors']
var comOut = random(comIn)
var score = 0


function setup() {
  // put setup code here
  createCanvas(800,600)
  frameRate(60)
}

function draw() {
  // put drawing code here
  background(0,200,0)
  textAlign(CENTER)
  text('Press r to choose rock, p for paper and s for scissors',width/2,height/2)
  text('score ' + score,width/2,100)
  print(userIn)
  if (comOut === 'paper' && userIn === 'scissors' || comOut === 'rock' && userIn === 'paper' || comOut === 'scissors' && userIn === 'rock') {
    gameWin()
  }
  if (comOut === 'paper' && userIn === 'rock' || comOut === 'rock' && userIn === 'scissors' || comOut === 'scissors' && userIn === 'paper') {
    gameOver()
  }
  if (comOut === userIn) {
    tieGame()
  }

}

function keyPressed() {
  if (keyCode === 82) {
    userIn = 'rock'
  }
  if (keyCode === 80) {
    userIn = 'paper'
  }
  if (keyCode === 83) {
    userIn = 'scissors'
  }
  if (keyCode === 32) {
    resetGame()
  }
}

function gameWin() {
  background(0,200,0)
  text('Computer chose ' + comOut,width/2,100)
  text('You chose ' + userIn,width/2,500)
  text('Press Space to Play Again', width/2,400)
  text('Win!',width/2,height/2)
  score ++
  noLoop()
}


function gameOver() {
  background(255,0,0)
  text('Computer chose ' + comOut,width/2,100)
  text('You chose ' + userIn,width/2,500)
  text('Press Space to Play Again', width/2,400)
  text('Lose',width/2,height/2)
  noLoop()
}

function tieGame() {
  background(127)
  text('Computer chose ' + comOut,width/2,100)
  text('You chose ' + userIn,width/2,500)
  text('Press Space to Play Again', width/2,400)
  text('Draw',width/2,height/2)
  noLoop()
}

function resetGame() {
  background(0,200,0)
  text(comOut,width/2,height/2)
  comOut = random(comIn)
  userIn = 'userIn'
  loop()
}
