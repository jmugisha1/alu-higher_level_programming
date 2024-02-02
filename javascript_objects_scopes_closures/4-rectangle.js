#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      (this.width = w), (this.height = h);
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

  rotate() {
    return ([this.width, this.height] = [this.height, this.width]);
  }

  double() {
    for (let i = 0; i < this.height * 2; i++) {
      for (let j = 0; j < this.width * 2; j++) {
        process.stdout.write('X');
      }
      console.log('');
    }
  }
}
module.exports = Rectangle;
