class Brick{
    constructor(x,y,width,height){  
        var options={
            isStatic: false,
            'restitution': 0.8,
            'friction': 0.0,
        }
        this.Visibility = 225;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed < 3){
            //var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            //rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility -5;
            tint(255,this.Visibility);
            pop();
        }
    }

    scores(){
        if(this.Visibility < 0 && this.Visibility >- 105){
            score ++;
        }
    }

}