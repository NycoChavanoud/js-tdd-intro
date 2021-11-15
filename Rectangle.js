class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  isSquare() {
    return this.a === this.b;
  }

  getArea() {
    return this.a * this.b;
  }

  getPerimeter() {
    return this.a + this.b + this.a + this.b;
  }
}

module.exports = Rectangle;
