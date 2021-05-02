const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var snow = [];
var bgImg

function preload(){
bgImg = loadImage("snow1.jpg")
characterImg = loadAnimation("animation1.png")
//character_jumping = loadAnimation("5.png")

}

function setup() {
  createCanvas(800,400);

  character = createSprite(200, 310, 50, 50);
  character.addAnimation("standing",characterImg);
  character.scale = 0.5

  engine = Engine.create();
  world = engine.world;

  //to create ground
  ground = new Ground(width/2,height,width,20);


}

function draw() {
  background(bgImg); 
  Engine.update(engine); 
  
  if(frameCount%10===0){
    snow.push(new Snow(random(width/2,width-10),30,30));

  }

  if(frameCount%10===0){
    snow.push(new Snow(random(width/2,width+10),30,30));

  }
  for (var i = 0; i < snow.length; i++) {
    snow[i].display();
  } 

  //display the snow 
  for (var i = 0; i < snow.length; i++) {
    snow[i].display();
  } 

  stroke("black")
  fill("purple")
  textSize(20)
  text("USE RIGHT AND LEFT ARROW TO MOVE LEFT RIGHT",270,40)

  if(keyDown("RIGHT_ARROW")){
  //  character.changeAnimation("moving",character_jumping)
    character.position.x = character.position.x+10
    
    }
    if(keyDown("LEFT_ARROW")){
      //character.addAnimation("jumping",character_jumping)
      character.position.x = character.position.x-10
      
      }
   
  

  ground.display()
  drawSprites();
}



function keyPressed(){

  }
