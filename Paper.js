class Paper {
    constructor(x, y, radius) {
      var options= {
          isStatic: false, 
          restitution:0.3,
          friction:0.5,
          density:1.2,
      }

      this.radius = radius;
      this.body = Bodies.circle(x, y, this.radius-20/2, options);

      this.image = loadImage("paper.png");
      
      World.add(world, this.body);
    }
    display(){

      fill("purple");
      var posit = this.body.position;
      push();
      translate(posit.x, posit.y);
      imageMode(RADIUS);
      image(this.image, 0, 0, this.radius, this.radius);
      pop();

    }
}