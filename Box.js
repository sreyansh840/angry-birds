//create the blueprint of boxes

class Box extends BaseClass{
  //properties
  constructor(x,y,width,height){
    super(x,y,width,height);
    //customization
    this.image=loadImage("sprites/wood1.png");
  }
  //functions
  display(){
   super.display();
  }
}