var shipImg1;
var seaImg;
var sea;
var ship;


function preload(){
seaImg=loadImage("sea.png")
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,180,400,20);
  sea.addImage(seaImg);
  ship=createSprite(0,0,200,200);
  ship.addAnimation(shipImg1);
 
  
}

function draw() {
 
// background("white");
 
  if(sea.x<0){
    sea.x=sea.width/2;
  }
   
}