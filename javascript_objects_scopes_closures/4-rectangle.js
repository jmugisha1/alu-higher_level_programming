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
    let roHeight = this.height * 2;
    let roWidth = this.width * 2;
    for (let i = 0; i < roWidth; i++) {
      for (let j = 0; j < roHeight; j++) {
        process.stdout.write('X');
      }
      console.log('');
    }
  }
}

const r1 = new Rectangle(2, 3);
console.log('Normal:');
r1.print();
console.log('Double:');
r1.double();
console.log('Rotate:');
r1.rotate();

// module.exports = Rectangle;
