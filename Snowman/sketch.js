// Snowman sketch, Zubair Abdalla, Mar 6 2019
function setup() {
  // setting a 400x400 px canvas
  createCanvas(400, 400);
}

function draw() {
  // Sky
  fill(153, 204, 255);
  rect(0, 0, 400, 400);
  // bottom ground
  fill(255, 255, 255);
  rect(0, 350, 399, 49);
  // Large boulder
  ellipse(200, 300, 150, 150);
  // Medium boulder
  ellipse(200, 200, 100, 100);
  // Small boulder
  ellipse(200, 120, 75, 75);
  // Arm 1
  line(175, 200, 50, 100);
  // Arm 2
  line(225, 200, 350, 100);
}
