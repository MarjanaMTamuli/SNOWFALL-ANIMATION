var snow, snow_img
var bgImg
var girl, girl_img

function setup() {
  createCanvas(800,400);
  girl=createSprite(500, 200, 50, 50);
  girl.addAnimation("jump",girl_img);
  girl.scale= 0.3;
}
function preload(){
  snow_img = loadImage("snow6.jpg");
  bgImg= loadImage("snow1.jpg");
  girl_img= loadAnimation("girlJumping1.gif");
}
function draw() {
  background(bgImg);  
  drawSprites();
  createSnow();
}

function createSnow(){
  if(frameCount%10===0){
  snow = createSprite(random(0,800), 0, 50, 50);
  snow.velocityX = -2;
  snow.velocityY = 4;
  snow.addImage(snow_img);
  snow.scale = 0.1;
  }
}