function preload() {
  // Loads assets before the game starts
  menuMusic = loadSound('menumusic.mp3')
  gameMusic = loadSound('gamemusic.mp3')
  menuArt = loadImage('menuart.png')
  myFont = loadFont('japanese.otf')
} // end function

// Object class
class Fruit {
  constructor(x,y,xvel,yvel) {
    this.x = x
    this.y = y
    this.xvel = xvel
    this.yvel = yvel
    this.lifespan = 255
    this.falling = false
    this.texture = random('place textures here')
  }
  move() {
    this.x += this.xvel
    this.y += this.yvel
    // Adds gravity to the fruits, as well as random falling speeds
    this.yvel += gravity*random(0.75,1)

    if (this.y >= 650 && this.falling === false) {
      this.yvel *= -1
      this.falling = true
    }

  }
  display() {
    noStroke()
    fill(255, this.lifespan)
    ellipse(this.x,this.y,50)
  }
  death() {
    var d = dist(mouseX,mouseY,this.x,this.y)
    if (this.lifespan === 255 && d < 25) {
      this.lifespan = 0
      score ++
    }
  }
} // end class

// Object class (bomb)
class Bomb {
  constructor(x,y,xvel,yvel) {
    this.x = x
    this.y = y
    this.xvel = xvel
    this.yvel = yvel
    this.falling = false
  }
  move() {
    this.x += this.xvel
    this.y += this.yvel
    // Adds gravity to the bombs, as well as random falling speeds
    this.yvel += gravity*(random(0.75,1))

    if (this.y >= 650 && this.falling === false) {
      this.yvel *= -1
      this.falling = true
    }
  }
  display() {
    noStroke()
    fill(127)
    ellipse(this.x,this.y,50)
    fill(0)
  }
  death() {
    var d = dist(mouseX,mouseY,this.x,this.y)
    if (d < 25) {
      clear()
      level = 2
    }
  }
} // end class

// Global Variables

var trailtype = 1
var buttonX = 400
var buttonY = 300
var buttonX1 = 400
var buttonY1 = 425
var buttonX2 = 25
var buttonY2 = 25
var canv
var level = 0
var score = 0
var score2 = 0
var time = 0
var coins = 0
var looping = true
var fruits = []
var bombs = []
var gravity = 0.4

//Centers the canvas onscreen, rather than in the corner
function centerCanvas() {
  var x = (windowWidth - width) / 2
  var y = (windowHeight - height) / 2
  canv.position(x, y)
} // end function

function setup() {
  // put setup code here
  canv = createCanvas(800,600)
  centerCanvas()
  frameRate(60)
  noCursor()
  trail1 = new Trail()
  trail2 = new Trail2()
} // end function

//Re-centers the screen when the window is resized
function windowResized() {
  centerCanvas()
} // end function

function draw() {
  // put drawing code here
  print(score)
  // High Score system
  if (score > score2) {
    score2 = score
  }
  // Menu Screen
  if (level === 0) {
    menuScreen()
    trail()
  // Actual game screen
  }
  if (level === 1) {
    gameScreen()
    trail()
  }
  // Logic for music playing/pausing
  if (level === 1 && gameMusic.isPlaying() === false) {
    gameMusic.loop()
    gameMusic.setVolume(0.05)
    menuMusic.stop()
  }
  else if (level === 0 && menuMusic.isPlaying() === false) {
    menuMusic.loop()
    menuMusic.setVolume(0.05)
    gameMusic.stop()
  }
  // Checks if the frame is divisible by 60
  if (frameCount % 60 == 0 && level === 1) {
    time ++
    //Displays the current time in the console
    print(time)
    //Checks to see if time is divisible by 1
    if (time % 1 == 0) {
      newFruit()
      newBomb()
    }
  }
  // Gameover screen
  if (level === 2) {
    gameOver()
    trail()
  }
  // Shop screen
  if (level === 3) {
    gameShop()
    trail()
  }

} // end draw

// Function for mouse trail, aesthetic purposes only
// All trail types can be found in the trail.js file
function trail() {
  if (trailtype === 1) {
    stroke(255)
    strokeWeight(5)
    line(mouseX,mouseY,pmouseX,pmouseY)
  }
  if (trailtype === 2) {
    trail1.update()
    trail1.display()
  }
  if (trailtype === 3) {
    trail2.update()
    trail2.display()
  }

}


// Function for the main menu
function menuScreen() {
  // We redefine fruits and bombs in order to clear the array
  fruits = []
  bombs = []
  score = 0
  background(196, 187, 166)
  image(menuArt,0,0)
  menuArt.resize(500,0)
  textFont(myFont)
  textSize(92)
  textAlign(CENTER)
  fill(255)
  fill(81, 61, 35)
  text('HONOR', width/2, 200)
  fill(255)
  rectMode(CENTER)
  rect(buttonX,buttonY,100,100)
  rect(buttonX1,buttonY1,100,100)
  fill(81, 61, 35)
  textSize(32)
  text('PLAY',width/2,310)
  text('SHOP',width/2,435)
  highScore()
  text('COINS ' + coins,width/2,590)
} // end function

// Events to be executed when the mouse is clicked
function mouseClicked() {
  var d = dist(mouseX,mouseY,buttonX,buttonY)
  if (level === 0 && d < 50) {
    level = 1
  }
  var d1 = dist(mouseX,mouseY,buttonX1,buttonY1)
  if (level === 0 && d1 < 50) {
    level = 3
  }
  var d2 = dist(mouseX,mouseY,buttonX2,buttonY2)
  if (level === 3 && d2 < 25) {
    level = 0
  }
} // end function

// Actual game screen
function gameScreen() {
  background(0)
  gamescore()
  coinsDisplay()
  for (let i = 0; i < fruits.length; i++) {
    fruits[i].display()
    fruits[i].move()
    fruits[i].death()
  }
  for (let i = 0; i < bombs.length; i++) {
    bombs[i].display()
    bombs[i].move()
    bombs[i].death()
  }


} // end function

// Creates a new fruit object and adds it to the array
function newFruit() {
  var createFruit = new Fruit(random(600), 650, random(-5,5), random(15,20))
  fruits.push(createFruit)
} // end function

// Creates a new bomb object and adds it to the array
function newBomb() {
  var createBomb = new Bomb(random(600), 650, random(-5,5), random(15,20))
  bombs.push(createBomb)
} // end function

// Displays current score
function gamescore() {
  noStroke()
  fill(255)
  textSize(36)
  text('SCORE: ' + score,width/2,50)
} // end function

// Displays coins
function coinsDisplay() {
  if (score % 10 == 0 && score != 0) {
    coins ++
  }
    noStroke()
    fill(255)
    textSize(36)
    text('COINS: ' + coins,100,50)

} // end function

function keyPressed() {
  // pauses the game if 'p' is pressed
  if (keyCode === 80 && looping === true) {
    looping = false
    gameMusic.setVolume(0.025)
    noLoop()
  }
  else if (keyCode === 80 && looping === false){
    looping = true
    gameMusic.setVolume(0.05)
    loop()
  }
  if (level === 2 && keyCode === 32) {
    clear()
    level = 0
  }
} // end function

// To be executed when the player loses
function gameOver() {
  background(0)
  textAlign(CENTER)
  fill(255)
  noStroke()
  text('YOU SCORED ' + score + ' POINTS',width/2,height/2)
  text('PRESS SPACE',width/2,400)

} // end function

// Displays highscore
function highScore() {
  stroke(255)
  fill(81, 61, 35)
  textAlign(CENTER)
  textSize(36)
  text('HIGHSCORE ' + score2,width/2,550)
} // end function

function gameShop() {
  background(196, 187, 166)
  noStroke()
  fill(255,0,0)
  rectMode(CENTER)
  rect(buttonX2,buttonY2,50,50)
  stroke(255)
  line(0,0,45,45)
  line(45,0,0,45)
  shopItem(200,200,'Fire Trail','20 Coins',2)
  coinsDisplay()
} // end function

// Function to create new items in the shop easily
function shopItem(x,y,sign,cost,newtrail) {
  noStroke()
  fill(81, 61, 35)
  rectMode(CENTER)
  rect(x,y,200,200)
  stroke(255)
  text(sign,x,y/1.5)
  text(cost,x,y/1.2)
  var d = dist(mouseX,mouseY,x,y)
  if (d < 100 && mouseIsPressed && coins>=20) {
    trailtype = newtrail
    coins -= 20
  }
} // end function
