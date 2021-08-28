const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var background;
var snow;
var snow2;
var backgroundImg,snowImg;

function preload(){
backgroundImg = loadImage("snow2.jpg")
snowImg = loadImage("snow4.webp")
}
function setup(){
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

snow = new Snow1(20,20,10,10)
snow2 = new Snow1(20,20,10,10)
snow3= new Snow1(20,20,10,10)
snow4= new Snow1(20,20,10,10)
snow5= new Snow1(20,20,10,10)
snow6= new Snow1(20,20,10,10)
snow7= new Snow1(20,20,10,10)
snow8= new Snow1(20,20,10,10)
snow9= new Snow1(20,20,10,10)
snow10= new Snow1(20,20,10,10)
snow11= new Snow1(20,20,10,10)
snow12= new Snow1(20,20,10,10)
snow13= new Snow1(20,20,10,10)
snow14= new Snow1(20,20,10,10)
snow15= new Snow1(20,20,10,10)
snow16= new Snow1(20,20,10,10)
snow17= new Snow1(20,20,10,10)
snow18= new Snow1(20,20,10,10)
snow19= new Snow1(20,20,10,10)
snow20= new Snow1(20,20,10,10)
snow21= new Snow1(20,20,10,10)
}

function draw(){
 background(backgroundImg);
Engine.update(engine);
snow.display();
snow2.display();
snow3.display();
snow4.display();
snow5.display();
snow6.display();
snow7.display();
snow8.display();
snow9.display();
snow10.display();
snow11.display();
snow12.display();
snow13.display();
snow14.display();
snow15.display();
snow16.display();
snow17.display();
snow18.display();
snow19.display();
snow20.display();
snow21.display();
  if(frameCount%60===0){
    snow.push(new snow(random(0,800),0))
  }


if(frameCount%60===0){
  snow.push(new snow(random(0,800),0))
}


if(frameCount%60===0){
  snow.push(new snow(random(0,800),0))
}


if(frameCount%60===0){
  snow.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow.push(new snow(random(0,800),0))
}


if(frameCount%60===0){
  snow.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow2.push(new snow(random(0,800),0))
}


if(frameCount%60===0){
  snow3.push(new snow(random(0,800),0))
}


if(frameCount%60===0){
  snow4.push(new snow(random(0,800),0))
}


if(frameCount%60===0){
  snow5.push(new snow(random(0,800),0))
}


if(frameCount%60===0){
  snow6.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow7.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow8.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow9.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow10.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow11.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow12.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow13.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow14.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow15.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow16.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow17.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow18.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow19.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow20.push(new snow(random(0,800),0))
}

if(frameCount%60===0){
  snow21.push(new snow(random(0,800),0))
}
}