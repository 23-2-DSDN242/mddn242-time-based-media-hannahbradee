/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function preload(){
lady= loadImage('lady.whole.png') //lady 227,542

//right arms
r1= loadImage('R1.png') //144,319
r2= loadImage('R2.png') //292,351
r3= loadImage('R3.png') //289,222
r4= loadImage('R4.png') //325,161
r5= loadImage('R5.png') //330,182

//left arms
l1= loadImage('L1.png') //207,333
l2= loadImage('L2.png') //292,355
l3= loadImage('L3.png') //289,222
l4= loadImage('L4.png') //332,329
l5= loadImage('L5.png') //316,335


}

function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off



background(210,4,45); //  red/cherry
fill(200)
textSize(40);
textAlign(CENTER, CENTER);
//text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);

//seconds
drawFlower1(60,50,obj.seconds)
if (obj.seconds>=10){
  drawFlower2(60,250,obj.seconds)

}
if (obj.seconds>=20){
  drawFlower3(60,450,obj.seconds)
}

if (obj.seconds>=30){
  drawFlower4(900,50,obj.seconds)
}
if (obj.seconds>=40){
  drawFlower5(900,250,obj.seconds)
}
if (obj.seconds>=50){
  drawFlower6(900,450,obj.seconds)
}

drawSun(490,40);


//hours

if (obj.hours>=2 && obj.hours<12){
  image(l1,265,90,187,293) 
  image(r1,485,90,144,289)

}

if (obj.hours>=4 && obj.hours<12){
  image(l2,200,100,252,325)
  image(r2,490,120,192,241)
}

if (obj.hours>=6 && obj.hours<12){
  image(l3,180,160,289,222)
  image(r3,480,170,309,242)
}

if (obj.hours>=8 && obj.hours<12){
  image(l4,190,130,323,329)
  image(r4,470,240,325,161)
}

if (obj.hours>=10 && obj.hours<12){
  image(l5,190,150,316,335)
  image(r5,470,280,323,161)
}

if (obj.hours>=14 && obj.hours<24){
  image(l1,265,90,187,293) 
  image(r1,485,90,144,289)  
}

 if (obj.hours>=16 && obj.hours<24){
  image(l2,200,100,252,325)
  image(r2,490,120,192,241)
  }


 if (obj.hours>=18 && obj.hours<24){
  image(l3,180,160,289,222)
  image(r3,480,170,309,242)
 }

 if (obj.hours>=20 && obj.hours<24){
  image(l4,180,130,323,329)
  image(r4,470,240,325,161)
 }

 if (obj.hours>=22 && obj.hours<24){
   image(l5,190,150,316,335)
   image(r5,470,280,323,161)
 }



if (obj.hours>=0){
  image(lady,350,70,227,442)
}

if (obj.hours>=0 && obj.hours<=1){
  drawGlobeEven(545,85,50)
}
if (obj.hours>=1 && obj.hours<=2){
drawGlobeOdd(520,80,50)
}



}
let millisSize =0

function drawFlower1(x,y,curSec,){
  let secondMap = map(curSec,0,60,360,0)
  if(obj.millis<=500){
    millisSize= map(obj.millis,0,1000,30,200)
    millisSize= map(obj.millis,0,1000,20,200)
    }
    else if(obj.millis>=500){
    millisSize= map(obj.millis,0,1000,100,30)
    millisSize= map(obj.millis,0,1000,100,20)
    }

  if(curSec>=0){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
    pop()
  }
  if (curSec>=1){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  pop()
  }
  if(curSec>=2){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(0,50,50)
  pop()
   

  }
  if(curSec>=3){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  
  pop()
   

  }

  if(curSec>=4){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  
 
  pop()
   

  }
  if(curSec>=5){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  
  
  pop()
  
  }
if(curSec>=6){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
 
 
  pop()
  

}
if(curSec>=7){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  
 
  pop()
  

}
  
if(curSec>=8){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}

if(curSec>=9){
  fill(255,255,0,100)
 
  push();
  translate(x,y);
  ellipse(0,0,millisSize)
  fill("yellow")
  ellipse(0,0,30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
if(curSec>=10){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill(255,192,203,50);
  ellipse(0,-50,millisSize);
  ellipse(-50,0,millisSize)
  ellipse(0,50,millisSize)
  ellipse(50,0,millisSize)
  ellipse(50,50,millisSize)
  ellipse(-50,-50,millisSize)
  ellipse(50,-50,millisSize)
  ellipse(-50,50,millisSize)
fill("pink")
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}

 } 
 function drawFlower2(x,y,curSec){
  let secondMap = map(curSec,0,60,360,0)
  if(obj.millis<=500){
    millisSize= map(obj.millis,0,1000,30,200)
    millisSize= map(obj.millis,0,1000,20,200)
    }
    else if(obj.millis>=500){
    millisSize= map(obj.millis,0,1000,100,30)
    millisSize= map(obj.millis,0,1000,100,20)
    }

  if(curSec>=10){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
    pop()
  }
  if (curSec>=11){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  pop()
  }
  if(curSec>=12){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(0,50,50)
  pop()
   

  }
  if(curSec>=13){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  
  pop()
   

  }

  if(curSec>=14){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  
 
  pop()
   

  }
  if(curSec>=15){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  
  
  pop()
  
  }
if(curSec>=16){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
 
 
  pop()
  

}
if(curSec>=17){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  
 
  pop()
  

}
  
if(curSec>=18){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}

if(curSec>=19){
  fill(255,255,0,100)
 
  push();
  translate(x,y);
  ellipse(0,0,millisSize)
  fill("yellow")
  ellipse(0,0,30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
if(curSec>=20){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill(255,192,203,50);
  ellipse(0,-50,millisSize);
  ellipse(-50,0,millisSize)
  ellipse(0,50,millisSize)
  ellipse(50,0,millisSize)
  ellipse(50,50,millisSize)
  ellipse(-50,-50,millisSize)
  ellipse(50,-50,millisSize)
  ellipse(-50,50,millisSize)
fill("pink")
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
 
 } 
 function drawFlower3(x,y,curSec){
 
  let secondMap = map(curSec,0,60,360,0)
  if(obj.millis<=500){
    millisSize= map(obj.millis,0,1000,30,200)
    millisSize= map(obj.millis,0,1000,20,200)
    }
    else if(obj.millis>=500){
    millisSize= map(obj.millis,0,1000,100,30)
    millisSize= map(obj.millis,0,1000,100,20)
    }

  if(curSec>=20){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
    pop()
  }
  if (curSec>=21){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  pop()
  }
  if(curSec>=22){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(0,50,50)
  pop()
   

  }
  if(curSec>=23){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  
  pop()
   

  }

  if(curSec>=24){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  
 
  pop()
   

  }
  if(curSec>=25){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  
  
  pop()
  
  }
if(curSec>=26){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
 
 
  pop()
  

}
if(curSec>=27){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  
 
  pop()
  

}
  
if(curSec>=28){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}

if(curSec>=29){
  fill(255,255,0,100)
 
  push();
  translate(x,y);
  ellipse(0,0,millisSize)
  fill("yellow")
  ellipse(0,0,30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
if(curSec>=30){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill(255,192,203,50);
  ellipse(0,-50,millisSize);
  ellipse(-50,0,millisSize)
  ellipse(0,50,millisSize)
  ellipse(50,0,millisSize)
  ellipse(50,50,millisSize)
  ellipse(-50,-50,millisSize)
  ellipse(50,-50,millisSize)
  ellipse(-50,50,millisSize)
fill("pink")
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
  
 } 
 function drawFlower4(x,y,curSec){
  let secondMap = map(curSec,0,60,360,0)
  if(obj.millis<=500){
    millisSize= map(obj.millis,0,1000,30,200)
    millisSize= map(obj.millis,0,1000,20,200)
    }
    else if(obj.millis>=500){
    millisSize= map(obj.millis,0,1000,100,30)
    millisSize= map(obj.millis,0,1000,100,20)
    }

  if(curSec>=30){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
    pop()
  }
  if (curSec>=31){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  pop()
  }
  if(curSec>=32){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(0,50,50)
  pop()
   

  }
  if(curSec>=33){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  
  pop()
   

  }

  if(curSec>=34){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  
 
  pop()
   

  }
  if(curSec>=35){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  
  
  pop()
  
  }
if(curSec>=36){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
 
 
  pop()
  

}
if(curSec>=37){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  
 
  pop()
  

}
  
if(curSec>=38){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}

if(curSec>=39){
  fill(255,255,0,100)
 
  push();
  translate(x,y);
  ellipse(0,0,millisSize)
  fill("yellow")
  ellipse(0,0,30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
if(curSec>=40){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill(255,192,203,50);
  ellipse(0,-50,millisSize);
  ellipse(-50,0,millisSize)
  ellipse(0,50,millisSize)
  ellipse(50,0,millisSize)
  ellipse(50,50,millisSize)
  ellipse(-50,-50,millisSize)
  ellipse(50,-50,millisSize)
  ellipse(-50,50,millisSize)
fill("pink")
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
 } 
 function drawFlower5(x,y,curSec){
  let secondMap = map(curSec,0,60,360,0)
  if(obj.millis<=500){
    millisSize= map(obj.millis,0,1000,30,200)
    millisSize= map(obj.millis,0,1000,20,200)
    }
    else if(obj.millis>=500){
    millisSize= map(obj.millis,0,1000,100,30)
    millisSize= map(obj.millis,0,1000,100,20)
    }

  if(curSec>=40){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
    pop()
  }
  if (curSec>=41){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  pop()
  }
  if(curSec>=42){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(0,50,50)
  pop()
   

  }
  if(curSec>=43){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  
  pop()
   

  }

  if(curSec>=44){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  
 
  pop()
   

  }
  if(curSec>=45){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  
  
  pop()
  
  }
if(curSec>=46){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
 
 
  pop()
  

}
if(curSec>=47){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  
 
  pop()
  

}
  
if(curSec>=48){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}

if(curSec>=49){
  fill(255,255,0,100)
 
  push();
  translate(x,y);
  ellipse(0,0,millisSize)
  fill("yellow")
  ellipse(0,0,30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
if(curSec>=50){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill(255,192,203,50);
  ellipse(0,-50,millisSize);
  ellipse(-50,0,millisSize)
  ellipse(0,50,millisSize)
  ellipse(50,0,millisSize)
  ellipse(50,50,millisSize)
  ellipse(-50,-50,millisSize)
  ellipse(50,-50,millisSize)
  ellipse(-50,50,millisSize)
fill("pink")
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
 } 
 function drawFlower6(x,y,curSec){
  let secondMap = map(curSec,0,60,360,0)
  if(obj.millis<=500){
    millisSize= map(obj.millis,0,1000,30,200)
    millisSize= map(obj.millis,0,1000,20,200)
    }
    else if(obj.millis>=500){
    millisSize= map(obj.millis,0,1000,100,30)
    millisSize= map(obj.millis,0,1000,100,20)
    }

  if(curSec>=50){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
    pop()
  }
  if (curSec>=51){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  pop()
  }
  if(curSec>=52){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(0,50,50)
  pop()
   

  }
  if(curSec>=53){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  
  pop()
   

  }

  if(curSec>=54){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  
 
  pop()
   

  }
  if(curSec>=55){
    fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  
  
  pop()
  
  }
if(curSec>=56){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
 
 
  pop()
  

}
if(curSec>=57){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  
 
  pop()
  

}
  
if(curSec>=58){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}

if(curSec>=59){
  fill(255,255,0,100)
 
  push();
  translate(x,y);
  ellipse(0,0,millisSize)
  fill("yellow")
  ellipse(0,0,30);
  rotate(secondMap);
  fill("pink");
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}
if(curSec>=59){
  fill("yellow")
 
  push();
  translate(x,y);
  ellipse(0,0, 30);
  rotate(secondMap);
  fill(255,192,203,50);
  ellipse(0,-50,millisSize);
  ellipse(-50,0,millisSize)
  ellipse(0,50,millisSize)
  ellipse(50,0,millisSize)
  ellipse(50,50,millisSize)
  ellipse(-50,-50,millisSize)
  ellipse(50,-50,millisSize)
  ellipse(-50,50,millisSize)
fill("pink")
  ellipse(0,-50,50);
  ellipse(-50,0,50)
  ellipse(0,50,50)
  ellipse(50,0,50)
  ellipse(50,50,50)
  ellipse(-50,-50,50)
  ellipse(50,-50,50)
  ellipse(-50,50,50)
 
  pop()
  

}


 } 



//seconds

function drawSun(x,y){
noStroke()

fill(255,191,0,200);// Yellow
ellipse(x, y, 150);

fill(255,191,0,100);//yellow

//fill(255,191,0,150);

if(obj.millis<=500){
millisSize= map(obj.millis,0,1000,150,300)
millisSize= map(obj.millis,0,1000,130,300)
}
else if(obj.millis>=500){
millisSize= map(obj.millis,0,1000,300,150)
millisSize= map(obj.millis,0,1000,300,130)
}
ellipse(x, y, millisSize)
}

function drawGlobeOdd(x,y){
  noStroke()

fill(255,255,255,200);// white
ellipse(x,y, 50);

fill(255,255,255,50);//white

//fill(255,191,0,150);

if(obj.millis<=500){
millisSize= map(obj.millis,0,1000,50,100)
millisSize= map(obj.millis,0,1000,40,100)
}
else if(obj.millis>=500){
millisSize= map(obj.millis,0,1000,100,50)
millisSize= map(obj.millis,0,1000,100,40)
}
ellipse(x,y,millisSize)

}
function drawGlobeEven(x,y){
  noStroke()

  fill(125,255,155,200);// malachite
  ellipse(x,y, 50);
  
  fill(125,255,185,50);// tourmiline
  
  
  if(obj.millis<=500){
  millisSize= map(obj.millis,0,1000,50,200)
  millisSize= map(obj.millis,0,1000,30,200)
  }
  else if(obj.millis>=500){
  millisSize= map(obj.millis,0,1000,200,50)
  millisSize= map(obj.millis,0,1000,200,30)
  }
  ellipse(x,y,millisSize)
}

console.log()