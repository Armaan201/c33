var bg

function preload(){
bg = loadImage("snow3.jpg")
snimg = loadImage("snow4.webp")
snimg2 = loadImage("snow4.webp")
snimg3 = loadImage("snow4.webp")
snimg4 = loadImage("snow4.webp")
snimg5 = loadImage("snow4.webp")
snimg6 = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  sn = createSprite(400, 100, 50, 50);
  sn2 = createSprite(350, 100, 50, 50);
  sn3 = createSprite(300, 100, 50, 50);
  sn4 = createSprite(250, 100, 50, 50);
  sn5 = createSprite(200, 100, 50, 50);
  sn6 = createSprite(150, 100, 50, 50);
  sn.addImage(snimg)
  sn2.addImage(snimg)
  sn3.addImage(snimg)
  sn4.addImage(snimg)
  sn5.addImage(snimg)
  sn6.addImage(snimg)
  
  sn.scale = 0.1
  sn2.scale = 0.1
  sn3.scale = 0.1
  sn4.scale = 0.1
  sn5.scale = 0.1
  sn6.scale = 0.1
  sn.velocityY = 3
  sn2.velocityY = 3
  sn3.velocityY = 3
  sn4.velocityY = 3
  sn5.velocityY = 3
  sn6.velocityY = 3
}

if(sn.position.y>350){
  sn.visible = false
}

function draw() {
  background(bg)  
  drawSprites();
}