let oCount = 40;
let mode =14
let img ;
let lines = 'Open For An \nUnexpected Outcome';
let para = 'Type in a four digit pin \nto reveal an unexpected outcome.'
let para2 = 'Instructions :\n\nUse numbers between 0-9\nConsecutively same numbers\nUp Arrow : 2\nDown Arrow : 3\nRight Arrow : 4\nLeft Arrow: Repeat numbers\npreviously used in sequence\nPress S to save image\nReturn to start over'

function preload(){

  img = loadImage('keys.png');
  font = loadFont('Supply-Regular.otf');
}

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
}

function draw() {
  background(220);
  textFont (font);
  
     if (mode == 1) { orb () }
  else if (mode ==2) {orb2 ()}
  else if (mode ==3 ) {orb3 ()}
   else if (mode ==4 ) {orb4 ()}
   else if (mode ==5 ) {orb5 ()}
  else if (mode ==6 ) {orb6 ()}
    else if (mode ==7 ) {orb7 ()}
  else if (mode ==8 ) {orb8 ()}
  else if (mode ==9 ) {orb9 ()}
   else if (mode ==0 ) {orb0 ()}
   else if (mode ==10 ) {wild1 ()}
  else if (mode ==11 ) {wild2 ()}
   else if (mode ==12 ) {wild3 ()}
   else if (mode ==13 ) {wild4 ()}
    else if (mode ==14 ) {home ()}
  
  
}

function keyPressed() {

  if (key == '1') {
  mode = 1
  }
  if (key == '2') {
   mode = 2
  }
   if (key == '3') { 
    mode = 3
  }
 if (key == '4') { 
    mode = 4
 }
  if (key == '5') { 
    mode = 5
 }
    if (key == '6') { 
    mode = 6
 }
   if (key == '7') { 
    mode = 7
 }
  if (key == '8') { 
    mode = 8
 }
    if (key == '9') { 
    mode = 9
 }
      if (key == '0') { 
    mode = 0
 }
      if (keyCode == UP_ARROW) { 
    mode = 10
 }
      if (keyCode == DOWN_ARROW) { 
    mode = 11
 }
    if (keyCode == LEFT_ARROW) { 
    mode = 12
 }
  
    if (keyCode == RIGHT_ARROW) { 
    mode = 13
 }
    
   if (keyCode == RETURN) { 
    mode = 14
 }
    if (key == 's') {
    saveCanvas('opensesame', 'png')}
}
function orb3 () {
     push()
   fill ('52')
    textFont (font);
  
  textSize (60)
  text ('03',-500,0)
    push()
  textSize (20)
  text ('Magnetic \nAttraction',-500,40)
  pop()
fill ('white');
  push();
  noStroke ();
  rotate (radians (frameCount));
  ellipse (0,0,100,100)       
  pop()
  frameRate (60)
  let oAngle = PI/oCount;

 rectMode(CENTER);
  for(var i=0; i<oCount; i++){
 push()
  if(i%2==1){
        fill('#347fa5');
      } else {
        fill('#f3c73b');
  
      }
  rotateZ(frameCount * -0.004* PI*oAngle);
  push ()
    noStroke ();
    fill ('black')
  rect (0,0,60,60); 
  pop ()
 
  for(var j=0; j<1; j++){
        push();
    noStroke ();
    rotateX(j*PI/2);
    rotateZ(PI/4);
    translate(width/6,0,0)
   rect(0,0,100,100);
  
       pop()

  }}}

function orb2 () {   push()
   fill ('52')
    textFont (font);
  
  textSize (60)
  text ('02',-500,0)
                                   push()
  textSize (20)
  text ('Orange \nRoulette',-500,40)

  pop()
  frameRate (10)
   let oAngle = PI/oCount;

  for(var i=0; i<oCount; i++){
 push()
  if(i%2==1){
        fill(255);
    strokeWeight (1);
    stroke ('#f4792a')
      } else {
        fill(0);
  
      }
  rotateZ(frameCount * -0.1 % 4*oAngle);
  
  for(var j=0; j<50; j++){
        push();
      rotateY(j * 2*PI/40);
        translate(width/6,0,0);
      rotateZ(PI/2);
 
      ellipse(0,0,120,120);
       pop();
      }}
}

function orb () {
   push()
   fill ('52')
    textFont (font);
  
  textSize (60)
  text ('01',-500,0)
  push()
  textSize (20)
  text ('Red \nCynosure',-500,40)
  pop()
  
frameRate (10)
 let oAngle = PI/oCount;
  for(var i=0; i<oCount; i++){
 push()
  if(i%2==1){
        fill(255);
    strokeWeight (4);
    stroke ('red')
      } else {
        fill(0);
  
      }
  rotateZ(frameCount * -0.1 % 4*oAngle);
  
  for(var j=0; j<50; j++){
        push();
    rotateY(j *20*PI/20);
     rotateY(PI/2);
 
      ellipse(0,0,400,400);
       pop()}}

      }


function orb4() {
     push()
   fill ('52')
    textFont (font);
  
  textSize (60)
  text ('04',-500,0)
     push()
  textSize (20)
  text ('Chatoyant \nCobalt',-500,40)
  pop()
   let oAngle = PI/oCount;
  
  rectMode(CENTER);
  for(var i=0; i<oCount; i++){
 push()
  if(i%2==1){
        fill(0);
    strokeWeight (2);
    stroke ('black')
      } else {
        fill('blue');
  
      }
  rotateZ(frameCount * -0.05 % 4*oAngle);
  
  for(var j=0; j<40; j++){
        push();
     translate(width/6.5,10,100);
    rotateZ(j *100*PI/20);
     rotateY(PI/4);
  ellipse (0,0,100,100);
       pop();
    
  push ()
    ellipse (0,0,400,400);
    rotateY(-PI/4);
    strokeWeight (11);
    stroke ('white');
    fill ('black')
rect (0,0,100,400);
    pop()
  
  }}}

function orb5 () {
  
    textFont (font);
    push()
   fill ('52')
  textSize (60)
  text ('05',-500,0)
    push()
  textSize (20)
  text ('Printer \nMalfunctioned',-500,40)
  pop()
   let oAngle = PI/oCount;

  rectMode(CENTER);
  for(var i=0; i<oCount; i++){
 push()
  if(i%2==1){
    noStroke ()
        fill(255);

      } else {
        fill(0);
  
      }
  rotateZ(frameCount * -0.05 % 4*oAngle);
  
  for(var j=0; j<50; j++){
        push();
    frameRate (10);
      rotateY(j/100*PI);
      rotateZ(PI/2);
 
      rect(0,0,400,150);
       pop();
      }}
}

function orb6() {
     push()
   fill ('52')
    textFont (font);
  
  textSize (60)
  text ('06',-500,0)
     push()
  textSize (20)
  text ('Alien \nCabbage',-500,40)
  pop()
    let oAngle = PI/oCount;
  for(var i=0; i<oCount; i++){
 push()
      rotateX (i*oAngle);
  if(i%2==1){
    noStroke ()
        fill(0);

      } else {
        stroke ('grey');
        strokeWeight (6);
        fill('#38563d')
      }
  rotateZ(frameCount * -0.1 % 8*oAngle);
  
  for(var j=0; j<50; j++){
        push();

      rotateY(j*PI*2);
      rotateZ(PI/8*PI*2*frameCount/40);
   ellipse(0,0,500,300);
   
       pop();
      }}
}

function orb7 () {
     push()
   fill ('52')
    textFont (font);
  
  textSize (60)
  text ('07',-500,0)
      push()
  textSize (20)
  text ('Glistening \nVanilla',-500,40)
  pop()
   
  let oAngle = PI/oCount;
 
  for(var i=0; i<oCount; i++){
 push()
  if(i%2==1){
    noStroke ()
      fill('#a5b8d7');

      } else {
       
        fill('#f3f0de');
  
      }
  rotateZ(frameCount * -0.05 % 4*oAngle);
  
  for(var j=0; j<50; j++){
        push();
    frameRate (10);
    translate(width/7.5,0,0);
      rotateY(j*frameCount/20);
      rotateY(-PI*j);
     rotateZ(PI/8*PI*2*frameCount/40);
    ellipse(0,0,100,250);
       pop();
    push ()
    stroke ('black')
    strokeWeight (6)
    fill ('grey')
    ellipse (0,0,10,300)
    pop ()
      }}
}

function orb8 (){
     push()
   fill ('52')
    textFont (font);
  
  textSize (60)
  text ('08',-500,0)
    push()
  textSize (20)
  text ('Speckled \nStranger',-500,40)
  pop()
    let oAngle = PI/oCount;
  rectMode(CENTER);
  for(var i=0; i<oCount; i++){
 push()
      rotateX (i*oAngle);
    
  if(i%2==1){
    noStroke ()
        fill(0);

      } else {
        
        fill('#f7da5c')
      }
  rotateZ(frameCount * -0.01 % 8*oAngle);
  
  for(var j=0; j<50; j++){
       push();
  frameRate (4)

      rotateY(j/PI*2);
  
      rotateX(PI/10*frameCount);
 rect(0,0,20,400);
   pop();
    
  
      }
}}

function orb9() {
  
     push()
   fill ('52')
    textFont (font);
  
  textSize (60)
  text ('09',-500,0)
   push()
  textSize (20)
  text ('Flamingo \nLabyrinth',-500,40)
  pop()
   noStroke ()

  frameRate (40)
  rotate (PI/4)
  rotate (radians (frameCount));

  
  let oAngle = PI/oCount;

  rectMode(CENTER);
  for(var i=0; i<oCount; i++){
 push()
  if(i%2==1){
    fill (0)
  
      } else {
        fill('#f184b4');
  
      }
  rotateZ(frameCount * -0.04% PI*oAngle);
  
  for(var j=0; j<20; j++){
     
    
    push ()
   
    rect (0,0,100,400)
    pop ()
    
    push ()
     rotateZ(j*PI/2);
    rotateZ(PI/2);
    translate(width/6,0,0)
   rect(0,0,100,100);
       pop();
    
    push()

    square(0,0,200 ,120)

    pop()
    
     push()

    fill ('grey')
    square(0,0,100 ,100)

    pop()
    
      }
  
  
  }
}

function orb0() {
     push()
   fill ('52A')
    textFont (font);
  
  textSize (60)
  text ('00',-500,0)
      push()
  textSize (20)
  text ('Nebulous \nMonster',-500,40)
  pop()
  
    let oAngle = PI/oCount;

  for(var i=0; i<oCount; i++){
 push()
      rotateZ (i*oAngle);
    frameRate (6)
  if(i%2==1){
    noStroke ()
        fill(0);

      } else {
        
        fill('#a5b3d5')
      }
  rotateZ(frameCount * -0.1 % 6*oAngle);
  
  for(var j=0; j<50; j++){

    
push()
    strokeWeight (14)
rotateX(PI/frameCount);
   stroke ('#ebe7e2')
 ellipse (0,0,500,500)
    pop ()
    push ()

      rotateX(PI/frameCount);
    ellipse (0,0,400,400)

    fill ('grey')
    
    ellipse (0,0,300,450)
    pop()
  
      }}
}

function wild1() {
  background(25);

   push()
   fill ('#EFEADA')
    textFont (font);
  
  textSize (60)
  text ('22',-500,0)
    push()
  textSize (20)
  text ('Double \nHappiness',-500,40)
  pop()
  
  let oAngle = PI/oCount;

 rectMode(CENTER);
  for(var i=0; i<oCount; i++){
 push()
  if(i%2==1){
        fill('#ECCC46');
   noStroke ()
      } else {
        fill('#BABABA');
  stroke ('#EFEADA')
        strokeWeight (10)
      }
  rotateZ(frameCount * -0.05 % 4*oAngle);
  
  for(var j=0; j<50; j++){
        push();

      rotateX(PI/6*frameCount);
    
      rotateZ(PI);
    
 translate(width/10,0,0);
     rect(0,0,300,40);
       pop();
      }}
}

function wild2() {
   
  background(25);

   push()
   fill ('#EFEADA')
    textFont (font);
  
  textSize (60)
  text ('333',-500,0)
    push()
  textSize (20)
  text ('Third Times \nThe Charm',-500,40)
  pop()
  let oAngle = PI/oCount;
  for(var i=0; i<oCount; i++){
 push()
  if(i%2==1){
        fill('#E55525');
   noStroke ()
      } else {
        fill('#5381c2');
        
 
      }
  rotateZ(frameCount * -0.05 % 3.5*oAngle);
  frameRate (6)
  for(var j=0; j<50; j++){
        push();
 rotateY(-PI*j/2);
      rotateY(PI/10*frameCount);
    
    
 translate(width/14,0,0);
     rect(0,0,10,400);
       pop();
    push ()
    rotateZ (PI*frameCount)
    fill ('white')
    ellipse (0,0,200,200);
    pop()
      }}
}

function wild3() {
  
  background(25);
   push()
   fill ('#EFEADA')
    textFont (font);
  
  textSize (60)
  text ('1001',-500,0)
    push()
  textSize (20)
  text ('Baby Hit Me \nOne More Time',-500,40)
  pop()
  
  let oAngle = PI/oCount;

  
  for(var i=0; i<oCount; i++){
 push()

  if(i%2==1){
        fill('#212ccb');
   noStroke ()
      } else {
        fill('#BABABA');
  stroke ('#EFEADA')
        strokeWeight (10)
      }
    
    push()
    noStroke()
    fill ('white')
    ellipse (0,0,200,200)
    pop()
  rotateZ(frameCount * -0.05 % 3.5*oAngle);
  
  for(var j=0; j<50; j++){
        push();
frameRate (4.5)
      rotateY(PI*j+frameCount);
     
      rotateZ(PI/frameCount);

translate(width/10,0,0);
     ellipse(0,0,300,40);
       pop();
    
 
      }
   
}}

function wild4() {
   background(25);

  
  let oAngle = PI/oCount;

 push()
   fill ('#EFEADA')
    textFont (font);
  
  textSize (60)
  text ('4444',-500,0)
    push()
  textSize (20)
  text ('Fortune \nDragon',-500,40)
  pop()
      

  
  for(var i=0; i<oCount; i++){
 push()
      rotateZ (i*oAngle);
  if(i%2==1){
        fill('#5C8F7F');
   noStroke ()
      } else {
        fill('#9cbec3');
  stroke ('black')
        strokeWeight (4)
      }
  rotateZ(frameCount * -0.05 % 4*oAngle);
  
  for(var j=0; j<50; j++){
        push();
frameRate (4)
      rotateY(j*PI+frameCount/10);
      //rotateY(j*PI*2);
      rotateZ(PI/j);

translate(width/10,0,0);
     ellipse(0,0,300,40);
   
       pop();
   
    }
   
}}

function home() {

  
  
  background(40);

  
  push ()
    fill ('#EFEADA')
    textFont (font);
  
  textSize (60) 
  text ('0123',-500,0)
  
  push()
  textSize (15)
  //text ('Open Sesame', -500,40)
  text (lines, -500,40)
  //text (para, -500,-300)
 // text (para2,380,20)
  pop()
  pop()
  
  push()

  scale (1.05)
  safe ()
  pop()

}


function safe () {
  rectMode(CENTER);
  let ringCount = 40;
  let ringAngle = PI/ringCount;
  


  push()
  stroke (140)
  strokeWeight (10)
  fill ('#EFEADA')
 ellipse (0,0,500,500)
  pop()
  
 
  for(var i=0; i<ringCount; i++){
 push()
  if(i%2==1){
    fill (25)
       
   noStroke ()
      } else {
        fill('#6D9BCB');
       noStroke()
        
 
      }
    
   push()
  rotateZ(frameCount * -0.15 % 4*ringAngle);
  
 
  for(var j=0; j<50; j++){
        push();
    rotateZ (j/40)
  
    ellipse(0,0,400,100);
       pop();
    push ()

    fill ('#489DB5')
    rotateY (PI*frameCount)
    rotateZ(PI/8*j);
rect(0,0,100,300);
    pop()

    push ()
    fill ('grey')
    rotateX (PI*frameCount)
    rotateZ(PI/8*j);
rect(0,0,300,100);
    pop()

    
      }}
  push()
  ellipse (0,0,50,50)
  pop()
  
    push()
  fill ('white')
  ellipse (0,0,20,20)
  pop()
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
