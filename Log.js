//create the blueprint of boxes

class Log extends BaseClass{
  //properties
  constructor(x,y,width,height,angle){
    super(x,y,width,height);
    this.image=loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body,angle);
    }    
    //functions
  display(){
    super.display();
  }
  }
  
