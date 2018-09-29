function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
    frameRate(20);
    background(0);
    strokeWeight(0.15);
}

function draw() {

 translate(width/2,height/2);
 angleMode(CENTER);



 rotate(frameCount*4);
line(300,0,cos(frameCount*3)*300,sin(frameCount*3)*300);

 stroke(lerpColor(color('#ea0043'), color('#0fefca'),frameCount/120));
 noFill();

 ellipse(60,10,250,250);
 ellipse(-60,-10,250,250);
 ellipse(30,50,100,100);
 ellipse(-60,-10,100,100);
 ellipse(120,20,250,250);

 rotate(frameCount*2);
 stroke(lerpColor(color('#ea0043'), color('#0fefca'),frameCount/120));

 //sopra
 line(0,height,cos(frameCount*3)*width,sin(frameCount*3)*width);


  //laterale

  line(width,0,cos(frameCount*3)*width,sin(frameCount*3)*width);
  line(500,0,cos(frameCount*3)*width,-sin(frameCount*3)*width);


  line(0,height,-cos(frameCount*3)*width,-sin(frameCount*3)*width);
  line(0,height,cos(frameCount*3)*height,-sin(frameCount*3)*height);

 //sotto
 line(width,height,cos(frameCount*3)*height,sin(frameCount*3)*height);
 line(width,height,cos(frameCount*3)*height,sin(frameCount*3)*height);



 if (frameCount == 200) {
    noLoop();

}

}
