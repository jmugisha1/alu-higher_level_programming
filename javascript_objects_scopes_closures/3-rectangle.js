#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      (this.width = w), (this.height = h);
    }
  }

  print() {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        console.log('*');
      }
      console.log();
    }
  }
}
module.exports = Rectangle.print();
