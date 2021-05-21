var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,190,30);
    block3.shapeColor = "red";

    block4 = createSprite(700,580,180,30);
    block4.shapeColor = "green";
    

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX =  3;
    ball.velocityY =  3;           


}

function draw() {

    background(rgb(169,169,169));

    edges=createEdgeSprites();

    ball.bounceOff(edges);

if(ball.x<0){
    music.stop();
    ball.velocityX = 3;

}
else

 if(ball.x>800){
    music.stop();
    ball.velocityX = -3;
}

    if(ball.isTouching(block4)){
        ball.shapeColor = "green";
        music.play();
       ball.bounceOff(block4);

    }

    if(ball.isTouching(block3)){
        ball.shapeColor = "red";
        music.stop();
       bounceOff(ball,block3);

    }

    if(ball.isTouching(block2)){
        ball.shapeColor = "orange";
        music.stop();
       bounceOff(ball,block2);

    }

    if(ball.isTouching(block1)){
        ball.shapeColor = "blue";
        music.stop();
       ball.bounceOff(block1);

    }

    if(ball.y<0){
music.stop();
ball.velocityY = 3;
    }

    
    bounceOff(ball,block1);
    bounceOff(ball,block2);
    bounceOff(ball,block3);
    bounceOff(ball,block4);

    isTouching(ball,block1); 
    isTouching(ball,block2);  
    isTouching(ball,block3);  
    isTouching(ball,block4);  

    drawSprites();
}

function bounceOff(object1,object2){

    if(object1.x-object2.x<object2.width/2+object1.width/2
      &&object2.x-object1.x<object2.width/2+object1.width/2){
    
    object1.velocityX = object1.velocityX*(-1)
    object2.velocityX = object2.velocityX*(-1)
    
      }
    
      if(object1.y-object2.y<object2.height/2+object1.height/2
        &&object2.y-object1.y<object2.height/2+object1.height/2){
      
      object1.velocityY = object1.velocityY*(-1)
      object2.velocityY = object2.velocityY*(-1)
      
        }
    }   


    function isTouching(object1,object2){

if(object1.x-object2.x<object2.width/2+object1.width/2 
    && object2.x-object1.x<object1.width/2+object2.width/2  ){

        return true;
    }
    else{
        return false;
    }



    }