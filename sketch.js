
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Render = Matter.Render;


var wpaper;
var ground;
var dustbin;

//function preload(){
  // paperImage=loadImage("paper.png");
   //dImage=loadImage("dustbin.png");
//}


function setup(){
	

	  canvas = createCanvas(800, 700);


	 engine = Engine.create();
	 world = engine.world;

	 //Create the Bodies Here.
	 wpaper = new Paper(200,100,30);
	 dustbin = new Dustbin(675,575);
	 ground = new Ground(400,600,800,20);
	 
	 Engine.run(engine);
  
}

function draw(){
 // rectMode(CENTER);
     background("lightgrey");
     Engine.update(engine);

	 wpaper.display();
	 

	 ground.display();
	 dustbin.display();

  
     drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(wpaper.body,wpaper.body.position,{x:x=17,y:y=-18})
	}
}

