class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        //permite que la liga se estire "Constraint"
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    //permite que el ave se pueda ir con la liga
    attach(body){
        this.sling.bodyA = body;
    }
    //indica que el ave no volara 
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        //Permite unir las ligas con la resortera
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            //Grosor de las ligas 
            stroke(48,22,8);
            //Creamos las ligas 
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}