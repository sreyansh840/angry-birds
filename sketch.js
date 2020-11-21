var myEngine,myWorld;
var myGroundBody;

var box1,box2,box3,box4;

var bird;

var log1,log2;

var pig1,pig2;

function setup() {
  createCanvas(1200, 800);
  
  //creating engine
  myEngine=Matter.Engine.create();
  
  //creating world from our engine
  myWorld=myEngine.world;
  
  box1=new Box(800,750,70,70);
  box2=new Box(1000,750,70,70);
  box3=new Box(800,650,70,70);
  box4=new Box(1000,650,70,70);
  box5=new Box(900,550,70,70);
  log1=new Log(890,700,20,300,PI/2);
  log2=new Log(890,600,20,300,PI/2);
  log3=new Log(870,530,20,120,0.6604754566735175);
  log4=new Log(930,550,20,150,-0.6604754566735175);
  bird=new Bird(20,200,40,40);
  pig1=new Pig(900,750,70,70);
  pig2=new Pig(900,650,70,70);
  //properties for the ground
  var myGroundProp={
    //without gravity- static or fixed
    isStatic:true
  }
  //creating ground body.. 1
  myGroundBody=Matter.Bodies.rectangle(600,790,1200,20,myGroundProp);
  //add the body to the world.. 2
  Matter.World.add(myWorld,myGroundBody);
  
}

function draw() {
  background(220);
  //update the engine
  Matter.Engine.update(myEngine);
  //console.log(myGroundBody.position.y);
  
  //give physical shape
  rectMode(CENTER);
  rect(myGroundBody.position.x,myGroundBody.position.y,1200,20);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  bird.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  pig2.display();
  pig1.display();

  text(mouseX+","+mouseY,mouseX,mouseY);

}