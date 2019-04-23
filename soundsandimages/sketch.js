//Sounds and Images by Zubair Abdalla created April 16 2019
//Global Variables
var xvel = 5
var mySound
var myImage

function preload() {
  mySound = loadSound('laser.mp3')
  //mySound = loadSound('http://www.sa-matra.net/sounds/starwars/ISD-Laser2.wav')
  
  myImage = loadImage('space.jpg')
}

function setup() {
  // put setup code here
  createCanvas(800,600)
  frameRate(60)
  myImage = loadImage('space.jpg')
  //mySound.setVolume(0.5)



}

function draw() {
  // put drawing code here
  image(myImage,0,0)
  fill(255)
  rectMode(CENTER)
  rect(width/2,height/2,100,100)

}

function mouseIsClicked() {
  if (value === 0) {
     mySound.play
  }

}

