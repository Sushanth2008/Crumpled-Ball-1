class Line{

    constructor(x,y,width,height){
        var op={
            isStatic:true,
            'friction':0.5
        }
        this.body=Bodies.rectangle(x,y,width,height,op);
        this.width=width;
        this.height=height;
  
        World.add(world,this.body)
    }
  
    display(){
        var po=this.body.position;
        rectMode(CENTER)
        fill ("white")
        rect(po.x,po.y,this.width,this.height)
        
    }
  
  }
  