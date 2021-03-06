var bg, bgImg;
var player,playerImg;
var spike,spikeImg;
var spikeGroup;
var score = 0;
var invisibleground;
function preload(){
    bgImg = loadImage("gdashbg.jpg");
    playerImg = loadImage("gdashplayer.png");
    spikeImg = loadImage("gdashspike.png")
    
}

function setup(){
    createCanvas(700,600)

    bg = createSprite(450,300,700);
    bg.addImage(bgImg);
    bg.velocityX = -3;
    bg.scale = 1.7;

    player = createSprite(100,455);
    player.addImage(playerImg);
    player.scale = 0.2;

    invisibleground = createSprite(200,600,1000,10);
    invisibleground.visible = false;

    spikeGroup = new Group;

    score = 0;
    stroke("red");
    fill("red")
    textSize(20);
    
}

function draw(){
    background(0);
    
    if(bg.x < 230){
        bg.x = bg.width/2;
    }
    
    if(keyDown("space") && player.y >=550){
        player.velocityY = -12;
    }

    player.velocityY = player.velocityY +0.8;
    //score = score + Math.round(getFrameRate()/150);
if(player.y >= 500){
    score = score+1;
}
   player.collide(invisibleground);
    if(player.isTouching(spikeGroup)){
        spikeGroup.destroyEach();
        text("GAME OVER,",350,300);
        //score = 0;
    }


    spawnspike();
    drawSprites();
    text("Score:"+score,300,50);
}

function spawnspike(){
    if(World.frameCount % 150 === 0){
        spike = createSprite(600,580,40,10);
        //spike.y = Math/round(random(80,420));
        //spike = createSprite(350,300);
        //spike.y = 455;
        //spike.x = 700;

        
        spike.addImage(spikeImg);
        spike.velocityX = -5;
        spike.scale = 0.3
        spikeGroup.add(spike);
        spike.lifetime = 233;
      
    }
}