//Sounds and Images by Zubair Abdalla created April 16 2019
//Global Variables
var sound
var myImage

//function preload() {
  sound = loadSound('laser.mp3')
  myImage = loadImage('space.jpg')
//}

function setup() {
  // put setup code here
  createCanvas(800,600)
  frameRate(60)
  myImage = loadImage('space.jpg')


}

function draw() {
  // put drawing code here
  image(myImage,0,0)
}
