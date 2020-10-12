class box{


    constructor(x,y,width,height){
        var ball_option={
    
            restitution:0.8
            
             }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    
     this.body=Bodies.rectangle(x,y,width,height,ball_option);
     
        World.add(world,this.body);
   
    
    }
    
    display(){
        push ();
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle);
    rect(0,0,this.width,this.height);
    pop ();
    
    
    
    
    }
}