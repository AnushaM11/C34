class ball {
    constructor(x,y,r){
      this.body = Bodies.circle(x,y,r);
      this.r = r
      World.add(world,this.body);


    }

    display(){
      var angle = this.body.angle 
      push () ;
      fill ("red")
      translate (this.body.position.x , this.body.position.y )
      rotate (angle);
      ellipseMode (RADIUS);
      ellipse(0,0,this.r, this.r );
      pop ();

    }

}