class Ball{

    constructor(x,y,radius){
        var op={
            isStatic:false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,op);
        this.x=x;
        this.y=y;
        this.radius=radius;        
  
        World.add(world,this.body)
    }
  
    display(){
        var po=this.body.position;
        ellipseMode(RADIUS)
        fill ("green")
        ellipse(po.x,po.y,this.radius)
        
        
    }
}

