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

  double() {
    let doubleHeight = this.height * 2;
    let doubleWidth = this.width * 2;

    for (let i = 0; i < doubleHeight; i++) {
      for (let j = 0; j < doubleWidth; j++) {
        process.stdout.write('X');
      }
      console.log('');
    }
  }

  rotate() {
    let rotateWidth = this.width;
    let rotateHeight = this.height;
    [rotateWidth, rotateHeight] = [rotateHeight, rotateWidth];
    for (let i = 0; i < rotateHeight * 2; i++) {
      for (let j = 0; j < rotateWidth * 2; j++) {
        process.stdout.write('X');
      }
      console.log('');
    }
    console.log(this.height, this.width);
  }
}
module.exports = Rectangle;
