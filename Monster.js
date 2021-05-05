class Monster {
  constructor(x,y,r){
		var options = { 
      density: 5, 
      frictionAir: 0
    }
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		this.animation=loadAnimation("corona1.png", "corona2.png", "corona3.png", "corona4.png", "corona5.png", "corona6.png");
		World.add(world, this.body);
	}

	display(){
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y-100);
			imageMode(CENTER);
			animation(this.animation, 10,200, 300, 300);
			pop()		
	}
};