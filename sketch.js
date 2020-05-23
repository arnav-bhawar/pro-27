
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var wall ,bob ,ground;

function setup(){
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic :true
  }

    ground = Bodies.rectangle(200,350,400,30,options)
    World.add(world,ground);

    wall = Bodies.rectangle(100,200,10,300,options)
    World.add(world,wall);

  var option2 = {
    restitution :0.5,
    density: 0.9
  }

      bob = Bodies.circle(200,200,20,option2);
      World.add(world,bob);

      var option3 = {
        bodyA : bob,
        bodyB : wall,
        lenght :70,
        stiffness:0.1
      }

      var string = Constraint.create(option3);
      World.add(world,string);
      //fill("green")

}

  function draw(){
    background	("black");
    Engine.update(engine);

    
    textSize(20);
    fill("yellow");
    text("press ctrl to make the bob ocsillate",120,160);
    fill("green");
    text("press space to make the bob follow the ",120,100);
    text("mouse",120,130);
    fill("white");
    text("press down arrow to stop the oscillation",120,70)
    fill("red");



    rectMode(CENTER);
    rect(wall.position.x,wall.position.y,10,300);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,30,);

    ellipseMode(CENTER);
    ellipse(bob.position.x,bob.position.y,20);


    if(keyCode===32){
      bob.position.x = mouseX;
      bob.position.y=mouseY;
    }

    if(keyCode===40){
      bob.position.x = 150;

    }
   
















  }





