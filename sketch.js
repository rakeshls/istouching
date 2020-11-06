var box1,box2
function setup() {
  createCanvas(800,400);
  box1=createSprite(400, 200, 70, 70);
  box1.shapeColor="green"
  box2=createSprite(600,200,50,50);
  box2.shapeColor="green"
}

function draw() {
  background("pink");  
  box2.x=mouseX;
  box2.y=mouseY;
  if(box1.x-box2.x<(box1.width+box2.width)/2
  && box2.x-box1.x<(box1.width+box2.width)/2
  && box1.y-box2.y<(box1.height+box2.height)/2
  && box2.y-box1.y<(box1.height+box2.height)/2){
    box1.shapeColor="red"
    box2.shapeColor="red"
  }
  else{
    box1.shapeColor="green"
    box2.shapeColor="green"
  }
  drawSprites();
}