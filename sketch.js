var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	//fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	star.x = starBody.position.x;
	starBody.position.x = star.x;
	star.y = starBody.position.y;
	starBody.position.y = star.y;
	
	Engine.run(engine);
}


function draw() {
  background(bgImg);

  catchStars();
  
  keyPressed();

  drawSprites();

  //Engine.update(engine);
  //ellipseMode(RADIUS);
  //ellipse(starBody.position.x, starBody.position.y, 20, 20);
}

function keyPressed() {	
	if(keyDown("right_arrow")) {
		fairy.x = fairy.x + 4;
	}

	if(keyDown("left_arrow")) {
		fairy.x = fairy.x - 4;
	}

	if(keyDown("down_arrow")) {
		star.velocityY = 5;
	}
}

function catchStars() {
	if(star.y > 470) {
		//Matter.Body.setStatic(starBody, false);
		star.y = 470;
	}
}