class Polygon{
    constructor(x,y,radius){
        var options = {
            isStatic: false
        }
        this.radius = radius;
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;	
		push()
		translate(pos.x, pos.y); 
		rotate(this.body.angle)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.radius*2, this.radius*2)
		pop()
    }
}