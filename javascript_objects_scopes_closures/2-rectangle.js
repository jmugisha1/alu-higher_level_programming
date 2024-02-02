#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w && h) {
      (this.width = w), (this.height = h);
    } else {
      return;
    }
  }
}
module.exports = Rectangle;
