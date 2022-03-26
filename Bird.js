class Bird extends baseClass {
    constructor(x, y) {
 super(x,y,50,50)
 thisimage =loadImage("sprites/bird.png")
      };

    };
    display()
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
     super.display();