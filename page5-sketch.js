var font;

function preload(){
  font= loadFont("Delius-Regular.ttf");
} 

function setup() {
  createCanvas(2304, 1440);
  
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}

function draw() {
  background(1000);
  triangle(2304, 0, 0, 1440, 0, 0);
  fill('#E06E25');
  stroke('#E06E25');
  
  triangle(2304, 0, 0, 1440, 2304, 2304);
  fill('#FCAD36');
  
}