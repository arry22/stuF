const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box,box2,ball,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var box_options={
restitution:2

}

var box2_options={
    restitution:1.5
}
var ball_options={
    restitution:1.25
}
var ball2_options={
restitution:1

}
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
  box=Bodies.rectangle(150,150,50,50,box_options);  
  box2=Bodies.rectangle(145,145,50,50, box2_options);
  ball=Bodies.circle(200,200,25,ball_options);
  ball2=Bodies.circle(100,180,25,ball2_options);
  World.add(world,box);
  World.add(world,box2);
  World.add(world,ball);
  World.add(world,ball2);
 console.log(ground);
}

function draw(){
    background(0);
  Engine.update(engine);
    rectMode(CENTER);
   
 rect(ground.position.x,ground.position.y,400,20);
rect(box.position.x,box.position.y,50,50);
rect(box2.position.x,box2.position.y,45,45);
ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y,25,25);
ellipse(ball2.position.x,ball2.position.y,25,25);
}