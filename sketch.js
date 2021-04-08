const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var bog1,bog2,bog3,bog4,bog5,bog6;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  bog1 = new Bog(50,170,50,50)
  bog2 = new Bog(150,170,50,50)
  bog3 = new Bog(250,170,50,50)
  bog4 = new Bog(350,170,50,50)
  bog5 = new Bog(450,170,50,50)
  bog6 = new Bog(550,170,50,50)
  
  chain1 = new Chain(bog1.body,bog2.body);
  chain2 = new Chain(bog2.body,bog3.body);
  chain3 = new Chain(bog3.body,bog4.body);
  chain4 = new Chain(bog4.body,bog5.body);
  chain5 = new Chain(bog5.body,bog6.body);

  rock = new Rock(1100,200,100,100)

}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  bog1.show();
  bog2.show();
  bog3.show();
  bog4.show();
  bog5.show();
  bog6.show();
  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();
  rock.show();

  var collision = Matter.SAT.collides(bog6.body, rock.body);
  if(collision.collided){
    flag=1
  }
  if(flag===1){
    textSize(32);
    fill("blue")
    textFont("Algerian");
    text("Crash",500,200);
  }
  }
function keyPressed(){
  if (keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(bog6.body,{x:bog6.body.position.x,y:bog6.body.position.y},{x:0.1,y:0});
  }
}
  
