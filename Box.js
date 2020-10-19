class Box
{
   constructor(x,y,width,height)
   {
    var object_options= {
        restitution: 1
      }
      this.body=Bodies.rectangle(x,y,width,height,object_options);
      this.width = width;
      this .height = height;
      World.add(world,this.body);
   }

   display()
   { var pos = this.body.position;
      var angle = this.body.angle;
      push();
    rectMode(CENTER);
    fill("blue");
    rect(pos.x,pos.y,this.width,this.height);
   pop()
   }


}