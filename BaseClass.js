class BaseClass{
  //properties
  constructor(x,y,width,height){
    //create the physics properties of box body
    var options={
      restitution:0.8,
      density:1.0,
      friction:1.1
    }
    //creating the body
    this.body=Matter.Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage("sprites/base.png");
    this.width=width;
    this.height=height;
    //add the body to my world
    Matter.World.add(myWorld,this.body);
  }
  //functions
  display(){
    imageMode(CENTER);
    //console.log(this.body.angle);
    var angle=this.body.angle;
    push();//do the settings
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    //show the image
    image(this.image,0,0,this.width,this.height);
    pop();//remove those settings
  }
}