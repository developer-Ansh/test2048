
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var d1,d2,d3,d4;
var gr;
var crumble, Ds;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    d1 = new Dustbin(600,655,120,10);
    d2 = new Dustbin(540,620,10,55);
    d3 = new Dustbin(660,620,10,55);

    Ds = new DS(600,635,5,5);

    d4 = new Dustbin(400,670,800,10);
    gr = new ground(400,680,800,10);
    crumble = new Paper(100,640,30);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  gr.display();
  d1.display();
  d2.display();
  d3.display();
  Ds.display();
//   d4.display();
  
  crumble.display();


  drawSprites();
 
}

function keyPressed(){
    if (keyCode === UP_ARROW) {

        Matter.Body.applyForce(crumble.body,crumble.body.position,{x:10,y:-20})

    }
}


