var box;
function setup() {
  createCanvas(400,400);
  background(51);
  box=createSprite(200,200,30,30);
}

function draw() 

{
  
 if(keyIsDown(DOWN_ARROW))
 {
   background('red');
 }
 if(keyIsDown(UP_ARROW))
 {
   background('green');
 }
 if(keyIsDown(LEFT_ARROW))
 {
   background('BLUE');
 }
 if(keyIsDown(RIGHT_ARROW))
 {
   background('black');
 }
 drawSprites();
}




