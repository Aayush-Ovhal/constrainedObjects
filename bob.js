class Bob{

    constructor(x,y,d){
     
      var options ={
          'restitution':1.0,
          'density':0.5
      }

      this.body = Bodies.circle(x,y,d,options);
      this.diameter = d;

      World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
      // pos.x = mouseX;
      // pos.y = mouseY;
       

        push();
        
        fill("blue");
        ellipseMode(RADIUS);
        circle(pos.x,pos.y,this.diameter);

       if(keyCode === 32){
        pos.x = mouseX;
        pos.y = mouseY;
       }
     

         pop();


    }
}