class BaseClass {
  constructor(x, y, height, angle) {
      var options = {
        'density':1.0,
        'friction': 1.0,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
      this.image = loadImage("sprites/base.png")
    };
    display(){
      var pos = this.body.position;
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image,0, 0, this.width, this.height);
      pop();
    };
  };
  