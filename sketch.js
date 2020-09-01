var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle=null;
var plinkos = [];
var divisions=[];
var score;
var gameovermusic;
var divisionHeight=300;
var score=0;
var turn=0;
var gamestate="start";
function preload(){
  gameovermusic=loadSound("GameOverYeah!.mp3");
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20);
  if(gamestate!=="end"){
    text("Score: "+score,700,100);
  }
  text("100",40,700);
  text("80",120,700);
  text("60",200,700);
  text("40",280,700);
  text("20",360,700);
  text("20",440,700);
  text("40",520,700);
  text("60",600,700);
  text("80",680,700);
  text("100",760,700);
  //text("Score : "+score,20,30);
  Engine.update(engine);
  if(particle!==null){
  particle.display();
  if(particle.body.position.y>760){
    if(particle.body.position.x<80&&particle.body.postition.x>-1){
      score=score+100
      particle=null;
      turn=turn+1;
      if(turn===5){
        gamestate="end";
      }
    }
    else if(particle.body.position.x<160){
      score=score+80
      particle=null;
      turn=turn+1;
      if(turn===5){
        gamestate="end";
      }
    }
    else if(particle.body.position.x<240){
      score=score+60
      particle=null;
      turn=turn+1;
      if(turn===5){
        gamestate="end";
      }
    }
    else if(particle.body.position.x<320){
      score=score+40
      particle=null;
      turn=turn+1;
      if(turn===5){
        gamestate="end";
      }
    }
    else if(particle.body.position.x<400){
      score=score+20
      particle=null;
      turn=turn+1;
      if(turn===5){
        gamestate="end";
      }
    }
    else if(particle.body.position.x<480){
      score=score+20
      particle=null;
      turn=turn+1;
      if(turn===5){
        gamestate="end";
      }
    }
    else if(particle.body.position.x<560){
      score=score+40
      particle=null;
      turn=turn+1;
      if(turn===5){
        gamestate="end";
      }
    }
    else if(particle.body.position.x<640){
      score=score+60
      particle=null;
      turn=turn+1;
      if(turn===5){
        gamestate="end";
      }
    }
    else if(particle.body.position.x<720){
      score=score+80
      particle=null;
      turn=turn+1;
      if(turn===5){
        gamestate="end";
      }
    }
    else if(particle.body.position.x<800){
      score=score+100
      particle=null;
      turn=turn+1;
      if(turn===5){
        gamestate="end";
      }
    }
  }
}
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(gamestate==="end"){
     textSize(100);
     text("GAME OVER",length/2,height/2);
     textSize(50);
     text("Score: "+score,400,100);
     if(gameovermusic.isPlaying()){
      gameovermusic.stop();
    } else{
      gameovermusic.play();
    }
   }
}
function mousePressed(){
  if(gamestate!=="end"){
    particle=new Particle(mouseX,10,10);
  }
}