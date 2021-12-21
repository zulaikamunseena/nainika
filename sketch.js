var wondergirl;
var earth, bg, alien;

function preload() {
  wondergirlImg = loadImage("assets/standW.png");
  wondergirlShooting = loadImage("assets/Shoot_3.png");
  bgImg = loadImage("assets/bg.jpg");
  alienImg = loadImage("assets/standA.PNG");
  asteroidImg = loadImage("assets/asteroid.png")
  heart1Img = loadImage("assets/heart_1.png");
  heart2Img = loadImage("assets/heart_2.png");
  heart3Img = loadImage("assets/heart_3.png");

}

function setup() {
  createCanvas(1366, 643);

  bg = createSprite(683, 321, 20, 20);
  bg.addImage("bg", bgImg);
  bg.scale = 2.5

  wondergirl = createSprite(200, 380, 20, 20);
  wondergirl.addImage("stand", wondergirlImg);
  wondergirl.scale = .40;

  invisibleTop = createSprite(700, 5, 1366, 10);
  invisibleBottom = createSprite(700, 638, 1366, 10);
  invisibleTop.visible = false;
  invisibleBottom.visible = false;

  heart1 = createSprite(displayWidth - 150, 40, 20, 20)
  heart1.visible = false
  heart1.addImage("heart1", heart1Img)
  heart1.scale = 0.4

  heart2 = createSprite(displayWidth - 100, 40, 20, 20)
  heart2.visible = false
  heart2.addImage("heart2", heart2Img)
  heart2.scale = 0.4

  heart3 = createSprite(displayWidth - 150, 40, 20, 20)
  heart3.addImage("heart3", heart3Img)
  heart3.scale = 0.4

  score = 0;

  alienGroup = new Group();
  asteroidGroup = new Group();
}

function draw() {

  background(225, 225, 225);

  score = score + Math.round(getFrameRate() / 60);
  stroke("white");
  fill("white");
  textSize(50)
  text("Score: " + score, 500, 100);


  if (keyDown("UP_ARROW")) {
    wondergirl.y = wondergirl.y - 30
  }
  if (keyDown("DOWN_ARROW")) {
    wondergirl.y = wondergirl.y + 30
  }

  wondergirl.collide(invisibleTop);
  wondergirl.collide(invisibleBottom);

  spawnAlien();
  spawnAsteroids();
  
  if(keyWentDown("space")){
    wondergirl.addImage(wondergirlShooting)
  }
  else if(keyWentUp("space")){
    wondergirl.addImage(wondergirlImg)
  }
  


  drawSprites();
}

function spawnAlien() {
  if (frameCount % 50 === 0) {

    alien = createSprite(random(1800, 1000), random(100, 400), 500, 500, 40, 40)

    alien.addImage(alienImg);
    alien.scale = 0.15
    alien.velocityX = -3
    alien.setCollider("rectangle", 0, 0, 100, 100)
    alien.scale = .5

    alien.lifetime = 500
    alienGroup.add(alien)
  }
}

function spawnAsteroids() {
  if (frameCount % 80 === 0) {

    asteroid = createSprite(random(1800, 1000), random(100, 400), 500, 500, 40, 40)

    asteroid.addImage(asteroidImg);
    asteroid.scale = 0.15
    asteroid.velocityX = -3
    asteroid.velocityY = 5
    asteroid.setCollider("rectangle", 0, 0, 100, 100)
    asteroid.scale = .15

    asteroid.lifetime = 500
    asteroidGroup.add(asteroid)
  }
}