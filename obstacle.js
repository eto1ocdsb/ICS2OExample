class Obstacle {
  constructor(){
  this.pos = createVector(450, height-100);
  this.vel = createVector(-1, 0);
  this.acc = createVector(0, 0);
  }
  show(){
    fill(20,320,244);
    ellipse(this.pos.x,this.pos.y, 20, 20);
  }
  
  update(){
        this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  
}
