const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;
var ground
var particle=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
function setup() {
  var canvas=createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(240,780,480,20);
  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(0);  
  drawSprites();
  Engine.update(engine);
  ground.display();
  // how to display divisions and plinkos??
  if(frameCount===90){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
}