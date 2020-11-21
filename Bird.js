//create the blueprint of boxes

class Bird extends BaseClass{
  //properties
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.image=loadImage("sprites/bird.png");
    }
   //functions
  display(){
    this.body.position.x=mouseX;
    this.body.position.y=mouseY;
    super.display();
  }
  }
  
