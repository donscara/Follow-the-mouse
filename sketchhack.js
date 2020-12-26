//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
// Adapted from https://github.com/nature-of-code/
// released under MIT license

var balls = [];
///////////////////////////////////////////////
function setup() {
  createCanvas(900,600);
    for (i = 0; i<100;i++){
          
            balls[i] = new Ball();

    }   
  
  background(0);
}
////////////////////////////////////////////////
function draw() {
//  background(0);
  for (i = 0; i<100;i++){
            

           balls[i].run();  

  }     

}
///////////////////////////////////////////////
class Ball {

  constructor(){
    var randomX = width/2+random(-100,100);
    var randomY = height/2+random(-100,100);
    
    this.velocity = new createVector(0, 0);
    this.location = new createVector(randomX,randomY);
    this.prevLocation = new createVector(randomX, randomY);
    //this.prevLocation = new createVector(width/2, height/2);
    this.acceleration = new createVector(0, 0);
    this.maxVelocity = 5;
    this.colore = color(random(0,255),random(0,255),random(0,255));

  }

  run(){
    this.draw();
    this.move();
//    this.edges();
  }

  draw(){
    
    stroke(this.colore);
    strokeWeight(1);
    line(this.location.x,this.location.y,this.prevLocation.x,this.prevLocation.y);
    this.prevLocation = this.location.copy();
    
  }

  move(){
    var mouse = createVector(mouseX, mouseY);
    var dir = p5.Vector.sub(mouse, this.location);
    dir.normalize();
    dir.mult(0.3);
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxVelocity);
    this.location.add(this.velocity);
  }

//  edges(){
//    if (this.location.x<0) this.location.x=width;
//    else if (this.location.x>width) this.location.x = 0;
//    else if (this.location.y<0) this.location.y = height;
//    else if (this.location.y>height) this.location.y = 0;
//  }
}
