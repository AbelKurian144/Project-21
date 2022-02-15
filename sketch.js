
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundOjb;
var leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);

	var ball_options ={isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2} 
		
    
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ball = Bodies.circle(250,100,50,ball_options)
	 World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  groundOjb= new Ground(width/2,670,width,20)
  leftSidde= new Ground(1100,600,20,120)
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,50,50)
  groundOjb.display();
  drawSprites();
 
}



