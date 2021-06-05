const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,bg;



function preload() {
    // create getBackgroundImg( ) here
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);
  
    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13);

    if(hour>=06 && hour<=07 ){
        bg="sunrise1.png";
    }
    else if (hour>=08 && hour<=09){
    bg="sunrise2.png"
    }

    else if(hour>=09 && hour<=16){
        bg="sunrise6.png"
    }

    else if (hour>=16 && hour<=17){
        bg="sunset7.png"
    }

    else if(hour>=17 && hour<=18){
        bg="sunset8.png"
    }
    else if (hour>=18 && hour<=06){
       bg="sunset12.png"
    }

    
     backgroundImg = loadImage(bg);
     console.log(backgroundImg);
    
}
