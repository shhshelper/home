setup=function() {
    size(400, 400);
  };
  var ballSize=25;
var scoredOn=0;
var old=millis();
var end=0;
var score1=0;
var score2=0;
var x=170;
var w=0;
var ballX=200;
var e=0;
var r=200;
var y =170;
var x1=0;
var y1=0;
var difficulty=90;
var diffSet=1;
var diffChange=1;
var rectsCollide = function(a,b) {
    
    return (a.x < b.x + b.w && 
            a.x + a.w > b.x && 
            a.y < b.y + b.h && 
            a.h + a.y > b.y);
};
var gameFocus=false;
var computer=0;
var failure=0;
var refail=0;
var ballRadius=12.5;
var pause=0;
var oldSpeedX=0;
var oldSpeedY=0;
var hi1=0;
var hi2=0;
var hi=0;
var win=0;
var failSpot=0;

var failcall=function(){
    failure=random(1,100);
    refail=1;
    if(failure>=difficulty){failSpot=x;}
};
mouseClicked=function(){
    gameFocus=true;
    old=millis();
};
draw= function() {
    if(diffChange===1){difficulty=90;}
    else{if(diffChange===2){difficulty=95;}
    else{if(diffChange===3){difficulty=100;}
    }}
    if(ballSize>25){ballSize=25;}
    if (ballSize<12.5){ballSize=12.5;}
    if(r>200&refail===0){failcall();}
    if(r<200){refail=0;}
    if(failure>=90&computer===1){x=failSpot;}
    if(failure<90&computer===1){x=ballX-ballRadius;}
    ballRadius=ballSize/2;
    y=x1+y;
    x=y1+x;
    background(0, 36, 4);
    noFill();
    strokeWeight(5);
    stroke(255,255, 255);
    line(400,0,0,0);
    line(0,400,0,0);
    line(400,0,400,400);
    line(400,400,0,400);
    line(400,200,0,200);
    line(160,200,160,0);
    line(240,200,240,400);
    fill(255, 255, 255);
   noStroke();
   rect(y,350,80,10); //Bottom Paddle
    rect(x,50,80,10);  //Top Paddle
    fill(0, 255, 4);
    ellipse(ballX,r,ballSize,ballSize);//ball
    if(pause===0){
    ballX=ballX+w;
    r=r+e;}
    if (r>=400){
        score1++;
        ballX=200;
        r=200;
        e=e-e;
        w=w-w;
        old=millis();
        fill(255, 0, 0);
        scoredOn=2;
        if(ballSize>12.5){ballSize-=2.5;}
        
    }
    if (r<=0){
        score2++;
        r=200;
        ballX=200;
        e=e-e;
        w=w-w;
        failure=random(1,100);
        old=millis();
        scoredOn=1;
        if(ballSize>10){ballSize-=5;}
        failcall();
    }
    
    if(gameFocus&&millis()-old>=1000 && e===0 && w===0){
        e=2.5;
        w=5;
        if(scoredOn===1){e=-2.5;}
    }
    
    
    if(ballX>=400 ||ballX<=0){w=-w;}
    if (r>=400||r<=0){e=-e;}
    fill(255, 255, 0);
    textSize(20);
    text(score2,6,380,100,100);//Score on bottom
    text(score1,6,6,100,100); //Score on top
    
    if(win===1){y=ballX;}
    if(score1>=11&&score2<=score1-2){
        fill(0,0,0);
        rect(0,0,4000,4000);
        fill(255, 255, 0);
        textSize(50);
        text("Player Two Wins!",11,155,454,200);
        end++;
    }
    if(score2>=11&&score1<=score2-2){
        fill(0,0,0);
        rect(0,0,4000,4000);
        fill(255, 255, 0);
        textSize(50);
        text("Player One Wins!",10,155,455,200);
        end++;
    }

var rect1={x:ballX-ballRadius,y:r-ballRadius,w:ballSize,h:ballSize};
var rect2={x:x,y:50,w:80,h:10};
var rect3={x:y,y:350,w:80,h:10};

if(rectsCollide(rect1,rect2)) {e=abs(e);
   
}
if(rectsCollide(rect1,rect3)) {e=-abs(e);
   
}  if(x>=315){x=315;}
    if(x<=5){x=5;}
    if(y>=315){y=315;}
    if(y<=5){y=5;}
    if(gameFocus===false){fill(0, 0, 0);
        rect(0,0,400,400);
        fill(255, 255, 255);
        text('Pong Instructions',125,33,254,552);
        text('-To start, click with the mouse.',10,60,334,50); 
        text('-To move the top paddle, use "a" and "d".',9,90,375,50);
        text('-To move the bottom paddle, use the left and right arrow keys.',9,120,400,50); 
        text('-Bottom paddle is player one and top paddle is player two.',9,170,392,50);
        text('-To play against the computer, press up.',9,220,392,50);
        text('-When playing against the computer, you are the bottom paddle.',9,245,392,50);
        text('-To turn off computer mode, press down.',9,295,392,50);
        text('-Press Control to pause and press Shift to unpause.',9,320,392,50);
        text('-Press q to toggle difficulty', 9, 370, 392, 50);
    }
    if(pause===1){
        ballX=ballX;
        r=r;
        fill(0, 0, 0);
        rect(0,0,400,400);
        fill(255, 255, 255);
        text('Pause Menu',125,33,400,100);
        text('-To resume your game, press Shift.',10,60,334,50);
        if(difficulty===90&computer===1){text('Difficulty:Easy',30,90, 334,50);}
    else{if(difficulty===95&computer===1){text('Difficulty:Medium',30,90, 334,50);}
    else{if(difficulty===100&computer===1){text('Difficulty:Hard',30,90, 334,50);}
    }
    
    
    
    if(end>0){noLoop();}
    }
    }
};


keyPressed=function(){
    if(keyCode===LEFT&win===0&x<=315&x>=5){x1=-15;}
    if(keyCode===RIGHT&win===0&x<=315&x>=5){x1=15;}
    if(key.toString()==='a'&computer===0){y1=-15;}
    if (key.toString() ==='d'&computer===0){y1=15;}
    if(keyCode===UP){computer=1;}
    if(keyCode===DOWN&gameFocus===true){computer=0;}
    if(keyCode===CONTROL&gameFocus===true&pause===0){pause=1;}
    if(keyCode===SHIFT&gameFocus===true&pause===1){pause=0;}
    if(key.toString()==='h'){hi1=1;}
    if(key.toString()==='i'&hi1===1){hi2=1;}
    if(hi1===1&hi2===1){hi=1;}
    if(key.toString()==='p'&hi===1){score2++;}
    if(key.toString()==='o'&hi===1){score2--;}
    if(key.toString()==='m'&hi===1){hi2=0;}
    if(key.toString()==='m'&hi===1){hi1=0;}
    if(key.toString()==='m'&hi===1){hi=0;}
    if(key.toString()==='u'&hi===1){score1--;}
    if(key.toString()==='e'&hi===1){score1++;}
    if(key.toString()==='/'&hi===1){win=1;}
    if(key.toString()==='j'&hi===1){win=1;}
    if(key.toString()==='k'){win=0;}
    if(key.toString()===','&hi===1&ballSize<25){ballSize+=2.5;}
    if(key.toString()==='.'&hi===1&ballSize>12.5){ballSize-=2.5;}
    
    
    if(key.toString()==='q'&difficulty===90){diffChange=2;}
    if(key.toString()==='q'&difficulty===95){diffChange=3;}
    if(key.toString()==='q'&difficulty===100){diffChange=1;}
if(key.toString()==='q'){pause=1;}

};
keyReleased=function(){
    if(keyCode===LEFT){x1=0;}
    if(key.toString()==='/'){win=0;}
    if(keyCode===RIGHT){x1=0;}
    if(key.toString()==='a'&computer===0){y1=0;}
    if (key.toString() ==='d'&computer===0){y1=0;}
    };

