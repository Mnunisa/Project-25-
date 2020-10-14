class Ground {
    constructor(x,y,width,height){
      
         var options= {
               isStatic: true

         }
             this.ground=Bodies.rectangle(x,y,width,height,options);
             this.width=width;
             this.height=height;
             World.add(world,this.ground);
        }
         display(){
             var Pground=this.ground.position;
             rectMode(CENTER);
             fill("grey");
             rect(Pground.x,Pground.y,this.width,this.height);
         }
    }