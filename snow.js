class Snow1{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,radius);
       this.radius = radius; 
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(RADIUS);
        image(snowImg,0,0,this.radius,this.radius);
        pop();
      }
    }