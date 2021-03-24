var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    edge =   createEdgeSprites();

    //create 4 different surfaces
    surface1 = createSprite(300,600,150,50);
    surface1.shapeColor = "yellow"
    surface2 = createSprite(517,600,150,50);
    surface2.shapeColor = "blue"
    surface3 = createSprite(730,600,150,50);
    surface3.shapeColor = "green"
    surface4 = createSprite(75,600,150,50);
    surface4.shapeColor = "red"


    //create box sprite and give velocity
    box = createSprite(400,300,20,20);
    box.shapeColor = "white"
    box.setVelocity (5,5)
}

function draw() {
    background(0);
    //create edgeSprite
  
    box.bounceOff(edge);

    if (touching(box,surface1)) {
        box.shapeColor = "yellow"
    }

    if (touching(box,surface2)) {
        box.shapeColor = "blue"
        box.setVelocity(0,0)
    }

    if (touching(box,surface3)) {
        box.shapeColor = "green"
    }

    if (touching(box,surface4)) {
        box.shapeColor = "red"
    }
    drawSprites();
}

function touching(box1,box2) {
    if (box1.x - box2.x <= (box1.width/2 + box2.width/2)
    && box2.x - box1.x <= (box1.width/2 + box2.width/2)
    && box1.y - box2.y <= (box1.height/2 + box2.height/2)
    && box2.y - box1.y <= (box1.height/2 + box2.height/2)){
      return true
   }
   else{
      return false
   }
  }