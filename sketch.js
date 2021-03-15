const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hexagon, hexagonImg;
var stand1, stand2; 
var slingShot;

//boxes for stand1
var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10, box11, box12;
var box13, box14, box15;
var box16;
//boxes for stand2
var box17, box18, box19, box20, box21;
var box22, box23, box24;
var box25;


function preload() {
    hexagonImg = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(300,height-50,250,10)
    stand2 = new Ground(600, height - 155, 200, 10)

    //stand 1 level 1 
    block1 =  new Box(330,height-75,30,40);
    block2 = new Box(360,height-75,30,40);
    block3 = new Box(390,height-75,30,40);
    block4 = new Box(300, height-75, 30,40);
    block5 = new Box(270, height-75, 30, 40);
    block6 = new Box(240, height-75, 30, 40);
    block7 = new Box(210, height-75, 30, 40);
    //stand 1 level 2 
    block8 = new Box(360, height-115, 30, 40);
    block9 = new Box(330, height-115, 30, 40);
    block10 = new Box(300, height-115, 30, 40);
    block11 = new Box(270, height-115, 30, 40);
    block12 = new Box(240, height-115, 30, 40);
    //stand 1 level 3
    block13 = new Box(330, height-155, 30, 40);
    block14 = new Box(300, height-155, 30 , 40);
    block15 = new Box(270, height-155, 30, 40);
    //stand 1 level 4 
    block16 = new Box(300, height-195, 30, 40);

    //stand 2 level 1 
    block17 = new Box(600, height-180, 30, 40);
    block18 = new Box(570, height-180, 30, 40);
    block19 = new Box(540, height-180, 30, 40);
    block20 = new Box(630, height-180, 30, 40);
    block21 = new Box(660, height-180, 30, 40);
    //stand 2 level 2 
    block22 = new Box(570, height-220, 30, 40);
    block23 = new Box(600, height-220, 30, 40);
    block24 = new Box(630, height-220, 30, 40);
    //stand 2 level 3 
    block25 = new Box(600, height-260, 30, 40);


    hexagon = Bodies.circle(50,200,20);
    World.add(world,hexagon);

    slingShot = new SlingShot(this.hexagon,{x:100,y:200});   

}

function draw () {
    background("pink");

    stand1.display();
    stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    slingShot.display();

    imageMode(CENTER);
    image(hexagonImg, hexagon.position.x,hexagon.position.y,40,40);


}

function mouseDragged(){
    Matter.Body.setPosition(this.hexagon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}