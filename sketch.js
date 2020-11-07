const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var slingshot, slingshot2, slingshot3, slingshot4,ball1,ball2,ball3,ball4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	slingShot = new Slingshot(ball1,{x:200,y:100});
	slingshot2 = new Slingshot(ball2,{x:200,y:100});
	slingshot3 = new Slingshot(ball3,{x:200,y:100});
	slingshot4 = new Slingshot(ball4,{x:200,y:100});
	ball1=new paper(100,width-90,10);
	ball2=new paper(150,width-90,10);
	ball3=new paper(200,width-90,10);
	ball4=new paper(250,width-90,10);



	
roof= createSprite(400,350,50,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  slingShot1.display();
  slingshot2.display();
  slingshot3.display();
  slingshot4.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  
  drawSprites();
 
}



