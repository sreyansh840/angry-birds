//create the blueprint of boxes

class Pig extends BaseClass{
  //properties
  constructor(x,y,width,height){
    super(x,y,width,height); 
    this.image=loadImage("sprites/enemy.png");  
  }
  //functions
  display(){
    super.display();
  }
}