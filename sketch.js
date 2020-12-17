
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50, 400, 10);

	side1 = new Dustbin(650, 400, 10, 100);
	side2 = new Dustbin(780, 400, 10, 100);
	bottom = new Dustbin(715, 435, 120, 10);

	ground = new Ground(400, 450, 800, 20);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  paper.display();
  side1.display();
  side2.display();
  bottom.display();
  ground.display();

  if (keyWentDown("up")){
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:20, y:-13})
  }
}



