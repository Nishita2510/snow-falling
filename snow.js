class Snow{
    constructor(x,y,radius){
        var options = {
            friction: 0.8,
            density: 0.1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image = loadImage("snow5.webp");
        
        this.Visiblity=400
        snow.scale = 9
        World.add(world,this.body)
    }

    display(){
        var angle = this.body.angle
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS); 
        this.Visiblity=this.Visiblity-5
        tint(400,this.Visiblity)
        this.image.scale=2
        image(this.image,0,0,this.radius,this.radius);
        pop()
    }

}