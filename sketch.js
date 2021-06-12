const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint ; 
var box1;

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground (600,height,1200,40)
     Ball = new ball (650,250,40)

rope = new Rope(Ball.body,{x:650,y:0})

    box1 = new box(780,560,70,70)
    box2 = new box(780,510,70,70)
    box3 = new box(780,460,70,70)
    box4 = new box(780,410,70,70)
    box5 = new box(780,360,70,70)
    box6 = new box(780,310,70,70)
    box7 = new box(780,260,70,70)
    box8 = new box(780,210,70,70)
    box9 = new box(780,160,70,70)
    box10 = new box(900,560,70,70)
    box11 = new box(900,510,70,70)
    box12 = new box(900,460,70,70)
    box13 = new box(900,410,70,70)
    box14 = new box(900,360,70,70)
    box15 = new box(900,310,70,70)
    box16 = new box(900,260,70,70)
    box17 = new box(900,210,70,70)
}

function draw(){
   
    background("white");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
   ground.display();
   Ball.display();
   rope.display();
}
function mouseDragged(){
    
        Matter.Body.setPosition(Ball.body, {x: mouseX , y: mouseY});
    
}