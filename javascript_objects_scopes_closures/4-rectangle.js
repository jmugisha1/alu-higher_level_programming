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
    let doubleHeight = this.height * 2;
    let doubleWidth = this.width * 2;
    for (let i = 0; i < doubleWidth; i++) {
      for (let j = 0; j < doubleHeight; j++) {
        process.stdout.write('X');
      }
      console.log('');
    }
  }
}
module.exports = Rectangle;
