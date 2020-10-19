const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var object;
var ground,ball;
var box1;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  
 
  console.log(object);
 // object.speed=5;

  var object_options={
      isStatic:true
  }
  ground= Bodies.rectangle(200,390,200,20,object_options);
  World.add(world,ground);

 /* var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);*/

  box1= new Box(200,100,100,50);
  box2= new Box(200,50,150,50);
}

function draw() {
  background("lightblue"); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  box1.display();
  box2.display();
  
  /*ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)*/

}