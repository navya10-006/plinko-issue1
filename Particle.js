class Particle{
    constructor(x,y,r){
        this.r=r;
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.circle(x,y,this.r,options);
        this.color=color(random(1,255),random(1,255),random(1,255));
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}