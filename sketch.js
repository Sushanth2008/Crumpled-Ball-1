
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var line1,line2,line3;
var ball;
var ground

function preload(){

	
}

function setup() {
	createCanvas(1350,600);


	engine = Engine.create();
	world = engine.world;

	line1=new Line(1000,533,20,100);
	line2=new Line(1200,533,20,100);
	line3=new Line(1100,575,180,20);
	ground=new Ground(750,593,3000,20);
	ball=new Ball(100,100,20);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  line1.display();
  line2.display();
  line3.display();
  ground.display();
  ball.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
  
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	
	}
  }
