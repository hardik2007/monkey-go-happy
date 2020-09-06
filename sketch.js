var PLAY
var END
var gameState
var monkey,monkeyimg;
var banana,bananaGroup,bananaimg
var obstacle,obstacleGroup,obstacleimg
var count=0;
var ground,invisibleGround;
function preload() {
monkeyimg=
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
bananaimg=loadImage("banana.png")
  
backgroundimg=loadImage("jungle.jpg")
  
  obstacleimg.loadImage("stone.png")
  
}
function setup() {
  createCanvas(400, 400);
  monkey = createSprite(50,320,200,200);
  monkey.addAnimation("monkey",monkeyimg);
  monkey.scale=0.1
  
   ground = createSprite(200,380,400,20);
  //ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  //ground.velocityX = -(4-(3*score/100));
  
  invisibleGround = createSprite(200,380,400,10);
  invisibleGround.visible = false;
  
    bananaGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
  
}


function draw() {
   background("white");
  
 score = score + Math.round(getFrameRate()/60);
  text("Score: "+ score, 500,50);
  
if(gameState===PLAY){
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
monkey.velocityY = monkey.velocityY + 0.9;
    
    if (ground.x < 0){
    ground.x = ground.width/2;
    }
  
  if(obstaclesGroup.isTouching(monkey)){
      gameState = END;
  }
  }
  
  else if(gameState === END) {
    ground.velocityX = 0;
    trex.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
  }
 monkey.collide(invisibleGround);
  
  spawnbananas();
  spawnObstacles();
  
  drawSprites();
}


function spawnbananas() {
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,320,40,10);
    banana.y = Math.round(random(250,280));
    banana.addImage(bananaimg);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    bananaGroup.add(banana);
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,360,10,40);
    obstacle.addImage(obstacleimg)
    obstacle.velocityX = -4;
  }
}