var img;
var font; 

function preload(){
  img = loadImage("trees_small.png");
  font= loadFont("IrishGrover-Regular.ttf");
  
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#76B3D4');
  textFont(font);
  textSize(96);
  fill('#E06E25');
  text('Redwoods', 300, 370);


}

function draw() {
  
  image(img, 210, 140, 200, 200);
   
   
}