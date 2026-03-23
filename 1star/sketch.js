class Sprite {
    constructor(animation, x, y, scaling, speed) {
      this.x = x;
      this.y = y;
      this.animation = animation;
      this.w = this.animation[0].width;
      this.h = this.animation[0].height;
      this.scaling = scaling;
      this.len = this.animation.length;
      this.speed = speed;
      this.index = 0;

    }
  
    show() {
      let index = floor(this.index) % this.len;
      image(this.animation[index], this.x, this.y, this.w*this.scaling,this.h*this.scaling);
    }
  
    animate() {
      this.index += this.speed;
      //this.x += this.speed;
  
      if (this.x > width) {
        this.x = -this.w;
      }
    }
  }let spritesheet;
let spritedata;

let animation = [];

let penguin;

function preload() {
  spritedata = loadJSON('assets/lr_penguin2.json');
  spritesheet = loadImage('assets/lr_penguin2.png');
}


function setup() {
  createCanvas(640, 480);
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
  
  penguin = new Sprite(animation, width/2-64, height/2-64, 5,random(0.1, 0.4));
  
}

function draw() {
  background(125);
  penguin.show();
  penguin.animate();
  
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}