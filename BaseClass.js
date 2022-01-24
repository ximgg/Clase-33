class BaseClass{
    constructor(x, y, width, height, angle) {
      //JSON (valores de la física)
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //creacion del cuerpo
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        //nos permite marcar el final y  regresar 
        pop();
      }
}