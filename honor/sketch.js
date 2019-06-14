function preload() {
  // Loads assets before the game starts
  menuMusic = loadSound('menumusic.mp3')
  gameMusic = loadSound('gamemusic.mp3')
  sword = loadSound('sword.wav')
  menuArt = loadImage('menuart.png')
  myFont = loadFont('japanese.otf')
  gameArt = loadImage('textures/background.jpg')
  apple = loadImage('textures/apple.png')
  melon = loadImage('textures/melon.png')
  pineapple = loadImage('textures/pineapple.png')
  splatter1 = loadImage('textures/splatter1.png')
  splatter2 = loadImage('textures/splatter2.png')
  splatter3 = loadImage('textures/splatter3.png')
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
    this.texture = random([apple,melon,pineapple])
    this.texture.onDeath = random([splatter1,splatter2,splatter3])
    this.gravity = 0.4
  }
  move() {
    this.x += this.xvel
    this.y += this.yvel
    // Adds gravity to the fruits, as well as random falling speeds
    this.yvel += this.gravity*random(0.75,1)

    if (this.y <= 750 && this.falling === false) {
      this.yvel *= -1
      this.falling = true
    }

  }
  display() {
    noStroke()
    fill(255, this.lifespan)
    image(this.texture,this.x-50,this.y-50)

  }
  death() {
    // This event is triggered upon the 'death' of the fruit
    var mouseVel = abs(mouseX - pmouseX || mouseY - pmouseY)
    var d = dist(mouseX,mouseY,this.x,this.y)
    if (this.lifespan === 255 && d < 40 && mouseVel >= 2 && mouseInCanvas === true) {
      this.lifespan = 0
      score ++
      this.texture = this.texture.onDeath
      this.yvel = 0
      this.xvel = 0
      this.gravity = 0
      fruitsSliced ++
      sword.play()
    }
    // Gives the player a 'fruits missed' counter, when this reaches 3, the game ends.
    // Instead of detecting when the fruit leaves the canvas, we can use time to guess when it has fell.
    if (this.y >= 800 && this.lifespan === 255) {
      fruitsMissed ++
      this.lifespan = 0
    }
  } // end class
}

// Object class (bomb)
class Bomb {
  constructor(x,y,xvel,yvel) {
    this.x = x
    this.y = y
    this.xvel = xvel
    this.yvel = yvel
    this.falling = false
    this.gravity = 0.4
  }
  move() {
    this.x += this.xvel
    this.y += this.yvel
    // Adds gravity to the bombs, as well as random falling speeds
    this.yvel += this.gravity*(random(0.75,1))

    if (this.y >= 650 && this.falling === false) {
      this.yvel *= -1
      this.falling = true
    }
  }
  display() {
    // Texturing of the bomb
    noStroke()
    fill(0)
    ellipse(this.x,this.y,50)
    stroke(255,0,0)
    line(this.x-15,this.y-15,this.x+15,this.y+15)
    line(this.x+15,this.y-15,this.x-15,this.y+15)
  }
  death() {
    // This event is triggered upon the 'death' of the bomb
    var mouseVel = abs(mouseX - pmouseX || mouseY - pmouseY)
    var d = dist(mouseX,mouseY,this.x,this.y)
    if (d < 25 && mouseVel >= 2 && mouseInCanvas === true) {
      clear()
      level = 2
    }
  }
} // end class

// Global Variables
var mouseInCanvas
var difficulty = 1
var trailtype = 1
var buttonX = 400
var buttonY = 300
var buttonX1 = 400
var buttonY1 = 425
var buttonX2 = 25
var buttonY2 = 25
var buttonX3 = 100
var buttonY3 = 100
var canv
var level = 0
var score = 0
var score2 = 0
var time = 0
var coins = 0
var looping = true
var fruits = []
var bombs = []
var fruitsMissed = 0
var fruitsSliced = 0

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
  trail3 = new Trail3()
} // end function

//Re-centers the screen when the window is resized
function windowResized() {
  centerCanvas()
} // end function

function draw() {
  // Defining mouseInCanvas, this is avoid gameplay outside of the canvas
  if (mouseX<=width && mouseX>=0 && mouseY<=height && mouseY>=0) {
    mouseInCanvas = true
  }
  else {
    mouseInCanvas = false
  }
  // High Score system
  if (score > score2) {
    score2 = score
  }
  // Menu Screen
  if (level === 0) {
    menuScreen()
    trail()
  }
  // Actual game screen
  if (level === 1) {
    gameScreen()
    trail()
  }
  // Help screen
  if (level === 4) {
    helpScreen()
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
    if (time % 2 == 0 && difficulty === 1) {
      newFruit()
    }
    if (time === 10) {
      difficulty = 2
    }
    if (time % 2 == 0 && difficulty === 2) {
      newFruit()
      newBomb()
    }
    if (time === 20) {
      difficulty = 3
    }
    if (time % 1 == 0 && difficulty === 3) {
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
  fill(255)
  noStroke()
  ellipse(mouseX,mouseY,5,5)
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
  if (trailtype === 4) {
    trail3.update()
    trail3.display()
  }
}

// Function for the main menu
function menuScreen() {
  // We redefine fruits and bombs in order to clear the array
  fruits = []
  bombs = []
  // Resets the difficulty
  time = 0
  difficulty = 1
  score = 0
  fruitsMissed = 0
  fruitsSliced = 0
  // Menu Screen
  background(196, 187, 166)
  image(menuArt,0,0)
  menuArt.resize(500,0)
  textFont(myFont)
  textSize(92)
  textAlign(CENTER)
  stroke(255)
  strokeWeight(5)
  fill(81, 61, 35)
  text('HONOR', width/2, 200)
  fill(255)
  rectMode(CENTER)
  rect(buttonX,buttonY,100,100)
  rect(buttonX1,buttonY1,100,100)
  rect(buttonX3,buttonY3,100,100)
  fill(81, 61, 35)
  textSize(32)
  text('PLAY',width/2,310)
  text('SHOP',width/2,435)
  text('HELP',buttonX3,buttonY3)
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
  var d3 = dist(mouseX,mouseY,buttonX3,buttonY3)
  if (level === 0 && d3 < 50) {
    level = 4
  }
} // end function

// Help Screen
function helpScreen() {
  var t =
  background(196, 187, 166)
  textSize(32)
  textAlign(CENTER)
  stroke(255)
  fill(81, 61, 35)
  text('To play, swipe your cursor over the fruit to gain points, you cannot just hover your mouse over the fruit. You lose by either missing 3 fruits, or by slicing a bomb. Every 5 points will earn you a coin to spend in the shop.',width/2,height/2,600,400)
  text('Press enter to return to the home screen',width/2,height/2 + 200)
}

// Actual game screen
function gameScreen() {
  background(0)
  image(gameArt,0,0)
  gamescore()
  coinsDisplay(100,50)
  missedFruits()
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
  if (fruitsMissed === 3) {
    level = 2
  }
} // end function

// Creates a new fruit object and adds it to the array
function newFruit() {
  var createFruit = new Fruit(random(350,450), 650, random(-4,4), random(15,18))
  fruits.push(createFruit)
} // end function

// Creates a new bomb object and adds it to the array
function newBomb() {
  var createBomb = new Bomb(random(350,450), 650, random(-4,4), random(15,18))
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
function coinsDisplay(x,y) {
  // Gives the player a coin if 5 fruits are sliced
  if (fruitsSliced === 5) {
    coins ++
    fruitsSliced = 0
  }
    noStroke()
    fill(255)
    textSize(36)
    text('COINS: ' + coins,x,y)

} // end function

// Displays fruits missed, when this reaches 3, the game ends
function missedFruits() {
  noStroke()
  fill(255)
  textSize(36)
  text('MISSED: ' + fruitsMissed,700,50)
}

// Events to be executed when a certain key is pressed
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
  if (level === 4 && keyCode === 13) {
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

// Game shop screen
function gameShop() {
  background(196, 187, 166)
  noStroke()
  fill(255,0,0)
  rectMode(CENTER)
  rect(buttonX2,buttonY2,50,50)
  stroke(255)
  line(0,0,45,45)
  line(45,0,0,45)
  shopItem(200,200,'Fire Trail','10 Coins',2)
  shopDisplay(255,185,81,200,130,25)
  shopItem(600,200,'Big Blade','10 Coins',3)
  shopDisplay(255,255,255,600,130,50)
  shopItem(200,450,'Electric Trail','10 Coins',4)
  shopDisplay(110,215,250,200,380,25)
  coinsDisplay(width/2,50)
} // end function

// Function to create new items in the shop
function shopItem(x,y,sign,cost,newtrail) {
  noStroke()
  fill(81, 61, 35)
  rectMode(CENTER)
  rect(x,y,200,200)
  stroke(255)
  text(sign,x,y)
  text(cost,x,y+50)
  var d = dist(mouseX,mouseY,x,y)
  if (d < 100 && mouseIsPressed && coins>=10 && trailtype != newtrail) {
    trailtype = newtrail
    coins -= 10
  }
} // end function

// Displays the trail in the shop
function shopDisplay(r,g,b,x,y,s) {
  fill(r,g,b)
  noStroke()
  ellipse(x,y,s)
}
