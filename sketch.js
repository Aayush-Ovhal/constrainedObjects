
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground,holder,bob;

var constraintholder;


function setup() {
  createCanvas(800,400);

engine = Engine.create();
world = engine.world;

  ground = new Ground(400,390,800,30);

  holder  = new Holder(400,100,100,20);

  bob = new Bob(400,200,30);

  var options ={
    bodyA: holder.body,
    bodyB: bob.body,
    stiffness: 0.004,
    length: 10
  }

  var chain = Constraint.create(options);

}

function draw() {
  background(0);  
  Engine.update(engine);

  strokeWeight(4);
  stroke("purple");
  line(bob.body.position.x,bob.body.position.y,holder.body.position.x,holder.body.position.y)

  holder.display();
  bob.display();

 

  drawSprites();
}