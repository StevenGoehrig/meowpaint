var r1 = 0;
var g1 = 0;
var b1 = 0;

var r2 = 0;
var g2 = 0;
var b2 = 0;

var r3 = 0;
var g3 = 0;
var b3 = 0;

var r4 = 0;
var g4 = 0;
var b4 = 0;

var r5 = 0;
var g5 = 0;
var b5 = 0;

var r6 = 0;
var g6 = 0;
var b6 = 0;

var r7 = 0;
var g7 = 0;
var b7 = 0;

var r8 = 0;
var g8 = 0;
var b8 = 0;

function setup() {
  createCanvas(600,400);
    background(200);
}

function draw() {
}

function mouseClicked(){
  //left ear
  fill(r3,g3,b3);
  stroke(0);
  triangle(mouseX-60,mouseY-60,mouseX-50,mouseY,mouseX,mouseY-50);
  if (r3==0){
      r3=random(256);
    } else {
      r3=random(256);
    }
     if (g1==0){
      g3=random(256);
    } else {
      g3=random(256);
    }
     if (b1==0){
      b3=random(256);
    } else {
      b3=random(256);
    }
     //right ear
  fill(r4,g4,b4);
  stroke(0);
  triangle(mouseX+60,mouseY-60,mouseX+50,mouseY,mouseX,mouseY-50);
  if (r4==0){
      r4=random(256);
    } else {
      r4=random(256);
    }
     if (g1==0){
      g4=random(256);
    } else {
      g4=random(256);
    }
     if (b1==0){
      b4=random(256);
    } else {
      b4=random(256);
    }
  //head
  fill (r1,g1,b1);
  stroke(0);
  ellipse(mouseX,mouseY,100,100);
   if (r1==0){
      r1=random(256);
    } else {
      r1=random(256);
    }
     if (g1==0){
      g1=random(256);
    } else {
      g1=random(256);
    }
     if (b1==0){
      b1=random(256);
    } else {
      b1=random(256);
    }
  //left lip
  noFill();
  arc(mouseX-12,mouseY+22,25,15,0,PI);
  //right lip
  noFill();
  arc(mouseX+12,mouseY+22,25,15,0,PI);
  //mid lip
  line(mouseX,mouseY+10,mouseX,mouseY+22)
  //mid lip
  line(mouseX-1,mouseY+10,mouseX-1,mouseY+22)
  //left whisker 1
  line(mouseX,mouseY+10,mouseX-35,mouseY+10);
  //left whisker 2
  line(mouseX,mouseY+10,mouseX-30,mouseY);
  //left whisker 3
  line(mouseX,mouseY+10,mouseX-30,mouseY+20);
  //right whisker 1
  line(mouseX,mouseY+10,mouseX+35,mouseY+10);
  //left whisker 2
  line(mouseX,mouseY+10,mouseX+30,mouseY);
  //right whisker 3
  line(mouseX,mouseY+10,mouseX+30,mouseY+20);
  //nose
  fill(r2,g2,b2);
  noStroke;
  ellipse(mouseX,mouseY+10,10,10);
   if (r2==0){
      r2=random(256);
    } else {
      r2=random(256);
    }
     if (g2==0){
      g2=random(256);
    } else {
      g2=random(256);
    }
     if (b2==0){
      b2=random(256);
    } else {
      b2=random(256);
    }
  //left eye
  fill(r5,g5,b5);
  noStroke;
  ellipse(mouseX-18,mouseY-20,30,30);
  if (r5==0){
      r5=random(256);
    } else {
      r5=random(256);
    }
     if (g1==0){
      g5=random(256);
    } else {
      g5=random(256);
    }
     if (b1==0){
      b5=random(256);
    } else {
      b5=random(256);
    }
   //left pupil
  fill(r6,g6,b6);
  noStroke;
  ellipse(mouseX-18,mouseY-20,5,30);
  if (r6==0){
      r6=random(256);
    } else {
      r6=random(256);
    }
     if (g1==0){
      g6=random(256);
    } else {
      g6=random(256);
    }
     if (b1==0){
      b6=random(256);
    } else {
      b6=random(256);
    }
  //right eye
  fill(r7,g7,b7);
  noStroke;
  ellipse(mouseX+18,mouseY-20,30,30);
  if (r7==0){
      r7=random(256);
    } else {
      r7=random(256);
    }
     if (g1==0){
      g7=random(256);
    } else {
      g7=random(256);
    }
     if (b1==0){
      b7=random(256);
    } else {
      b7=random(256);
    }
  //right pupil
  fill(r8,g8,b8);
  noStroke;
  ellipse(mouseX+18,mouseY-20,5,25);
  if (r8==0){
      r8=random(256);
    } else {
      r8=random(256);
    }
     if (g1==0){
      g8=random(256);
    } else {
      g8=random(256);
    }
     if (b1==0){
      b8=random(256);
    } else {
      b8=random(256);
    }
  }