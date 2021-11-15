const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("rectangle", () => {
  it("side of the rectangle are egual", () => {
    const rectangle = new Rectangle(10, 10);
    assert.strictEqual(rectangle.isSquare(), true);
  });
  it("side of the rectangle are NOT egual", () => {
    const rectangle = new Rectangle(10, 20);
    assert.strictEqual(rectangle.isSquare(), false);
  });
  it("the area is ok", () => {
    const rectangle = new Rectangle(1, 20);
    assert.strictEqual(rectangle.getArea(), 20);
  });
  it("the perimeter is ok", () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });
});
