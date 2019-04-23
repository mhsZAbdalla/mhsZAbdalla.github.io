//Sounds and Images by Zubair Abdalla created April 16 2019
//Global Variables
var x = 5
var xvel = 10
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
  mySound.play()
  


}

function draw() {
  // put drawing code here
  image(myImage,0,0)
  fill(255,0,0)
  rectMode(CENTER)
  rect(x,height/2,100,25)
  x = x + xvel

}

