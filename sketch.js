var jerry;
var rat_Image;
var BackGround;
var tom;
var cat_Image;
var running;
var stoppedTom;
var rat_Imagelast;




function preload() {
    //load the images here
      
    rat_Image=loadAnimation("images/jerryOne.png","images/jerryThree.png"
    );

    Back_Ground=loadAnimation("images/garden.png");

   cat_Image=loadAnimation("images/tomOne.png");

   running=loadAnimation("images/tomTwo.png","images/tomThree.png");

   stoppedTom=loadImage("images/tomFour.png","images/jerryFour.png");

  


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    BackGround=createSprite(500,400,50,50);
    BackGround.addAnimation("background",Back_Ground);
    BackGround.scale=1.2;



    jerry=createSprite(200,500,50,40);
    jerry.addAnimation("jerry_Image", rat_Image);
    jerry.scale=0.1;
    
    jerry.setCollider("rectangle",0,0,1000,1000);


   
    tom=createSprite(700,500,50,50);
    tom.addAnimation("tomImage",cat_Image);
    
    tom.scale=0.2;
    
    tom.setCollider("rectangle",0,0,1300,1000);


}

function draw() {

    background("green");
    //Write condition here to evalute if tom and jerry collide

    

    if(tom.x - jerry.x < (tom.width-jerry.width)/2){
     jerry.addAnimation("lastImage",rat_Image);
     jerry.changeAnimation("lastImage",rat_Imagelast);    

    tom.velocityX=0;
    
    tom.addImage("tom last Image",stoppedTom);              
    tom.changeImage("tom last Image");
   
   


    } 
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode===LEFT_ARROW){
        
        tom.velocityX=-3;
        tom.addAnimation("running",running);
        tom.changeAnimation("running",running);


    }


}
