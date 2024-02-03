#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        process.stdout.write('X');
      }
      console.log('');
    }
  }

  double() {
    this.height *= 2;
    this.width *= 2;
  }

  rotate() {
    [this.height, this.width ] = [this.width, this.height];
  }
}
module.exports = Rectangle;
