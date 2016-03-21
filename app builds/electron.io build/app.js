function setup() {
  var myCanvas = createCanvas(800, 520);
  myCanvas.parent('myContainer');
}

var system1 = [];
function draw() {
	background(155,10);
	system1.push(new System(10, 5, 300, 100));

	for (var i = 0; i < system1.length; i++) {
		system1[i].lights();
		system1[i].planter();
		system1[i].tank();
	};
    
     
    rect(520,height/2,10,20);
    rect(500,height/2,10,20);
    rect(500,height/2.5,10,20);
    rect(520,height/2.5,10,20);
    
    
    
};

 function System(x, y, xmax, ymax) {
	this.x = x;
	this.y = y;
	this.xmax = xmax;
	this.ymax = ymax;
	lh = this.y+50; //light height
	th =this.y+150;	//tank height
	fh = this.y+150; // fish height
	ss=this.y+20; // soil start
	fs =this.y +20;

	this.lights = function() {
		//	ellipse(this.x, this.y, 20, 20);
		fill(255);
		//rect(this.x, this.y, this.xmax, 100);
		beginShape();
		vertex(this.x,this.y);
		vertex(this.x,lh);
		vertex(this.xmax,lh);
		vertex(this.xmax,this.y);
		vertex(this.x,this.y);
		endShape();
	}

	this.planter = function() {
		//	ellipse(this.x, this.y, 20, 20);
		
		translate(0, 150);
		fill(255);
		beginShape();
		vertex(this.x,this.y);
		vertex(this.x,th);
		vertex(this.xmax,th);
		vertex(this.xmax,this.y);
		vertex(this.x,this.y);
		endShape();
		
		fill(200,250,200);
		beginShape();
		vertex(this.x,ss);
		vertex(this.x,th);
		vertex(this.xmax,th);
		vertex(this.xmax,ss)
		vertex(this.x,ss);
		endShape();
		
		translate(0, -150);
	}

	this.tank = function() {
		//	ellipse(this.x, this.y, 20, 20);
		translate(0, 350);
		fill(255);
		beginShape();
		vertex(this.x,this.y);
		vertex(this.x,fh);
		vertex(this.xmax,fh);
		vertex(this.xmax,this.y);
		vertex(this.x,this.y);
		endShape();
		
			fill(0,0,200);
		beginShape();
		vertex(this.x,fs);
		vertex(this.x,fh);
		vertex(this.xmax,fh);
		vertex(this.xmax,fs)
		vertex(this.x,fs);
		endShape();
		translate(0, -350);
	}



}


function Hub(){
    
    
    
    
}

