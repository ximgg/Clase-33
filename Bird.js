class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
//Permite leer + rapido sus propiedades 
    super.display();
//Para la velocidad de la trayectoria 
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      //el ave se puede mover dentro del lienzo 
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   
//Para dibujar la imagen del humo respecto a su trayectoria
    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
