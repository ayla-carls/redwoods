var img;
var font;

function preload(){
  img = loadImage("page_fourtree.png");
  font= loadFont("Delius-Regular.ttf");
  
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#76B3D4');
}

function draw() {
  image(img, 100, 100);
}