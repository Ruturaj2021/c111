
var trex ,trex_running;
function preload(){
 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,180)
  trex.addAnimation("running",trex_running);
  trex.scale= 0.5;

  ground=createSprite(300,180,600,10)
 ground.addImage(groundImage);
 
}

function draw(){
  background("yellow")

  if(keyDown("space")){
    trex.velocityY= -12;
  }
  trex.velocityY = trex.velocityY+0.5;

  trex.collide(ground)
 drawSprites()
}
