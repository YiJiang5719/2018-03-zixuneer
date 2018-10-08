function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(30);
}

function draw() {
  background(180);
  for(x=0; x<width; x+=5){
  	for(y=0; y<width; y+=5){
    	var n=noise(0.02*x,0.04*y)*255;
      noStroke();
      var col=color(n+50,n-100,n-250);
      fill(col);

      //var size=noise(0.02*x,0.04*y)*3.2
      ellipse(x,y,3.2);
      x=x+frameCount/1400;
      y=y+frameCount/1400;

      if(x>windowWidth+1.1){
      	frameCount=-frameCount;
      }
    }
  }
}
