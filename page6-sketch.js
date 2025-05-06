var font;

function preload(){
  font= loadFont("Delius-Regular.ttf");
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}

function draw() {
  let ctx = drawingContext;
 
  
   let radius = max(width, height);
  let gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, radius);

  gradient.addColorStop(0, '#260401(0, 200, 10, 1)');
  gradient.addColorStop(1, '#B7BA49(0, 140, 4, 0)');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}