//wen weng
//start the sketch to draw, and press mouse to stamp a blue
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  frameRate(80)
}
function draw() {
  strokeWeight(0);
  fill(5, 30);
  circle(mouseX, mouseY, 10);
  strokeWeight(0.3);
  fill(10, 10);
  circle(mouseX, mouseY, 30);
  strokeWeight(0);
  fill(0, 20);
  circle(mouseX, mouseY, random(5, 60));
  stroke(150, 166, 218,60);
  strokeWeight(3);
  line(mouseX - 10, mouseY - 10, mouseX + 10, mouseY + 10);
  line(mouseX + 10, mouseY - 10, mouseX - 10, mouseY + 10);
}
 function mousePressed() {
  fill('blue')
  strokeWeight(0)
  circle(mouseX,mouseY,60)
}

