class Dustbin
{
   constructor(x,y)
   {    
      this.x=x;
      this.y=y;
      this.dWidth=200;
      this.dHeight=250;
      this.wThickness=20;
      
      this.image=loadImage("dustbin.png");
      this.bottomBody=Bodies.rectangle(this.x,this.y,this.dWidth,this.dHeight, {isStatic:true});
      this.leftBody=Bodies.rectangle(this.x-this.dWidth/2,y-this.dHeight/2,this.wThickness,this.dHeight,{isStatic:true});
      this.rightBody=Bodies.rectangle(this.x+this.dWidth/2,y-this.dHeight/2,this.wThickness,this.dHeight,{isStatic:true});

        World.add(world,this.bottomBody);
        World.add(world,this.rightBody);
        World.add(world,this.leftBody);
         
          
   }
     display()
     {
        var bpos = this.bottomBody.position
        var lpos=this.leftBody.position;
        var rpos=this.rightBody.position;
           push()
           translate(lpos.x,lpos.y);
           rectMode(CENTER);
     	 angleMode(RADIANS);
	      fill(255);
		 rotate(this.angle)
           pop()

           push()
		 translate(rpos.x, rpos.y);
		 rectMode(CENTER)
		 angleMode(RADIANS)
		 fill(255)
           rotate(-1*this.angle)
            pop()

          // var angle=this.bottomBody.angle;
           push()
           translate(bpos.x, bpos.y+10);
		 rectMode(CENTER)
		 angleMode(RADIANS)
		 fill(255)
		 imageMode(CENTER);
		 image(this.image, 0,-this.dHeight/2+5,this.dWidth, this.dHeight)	
           pop()
       

       
 }

}