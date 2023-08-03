const Shape = require("../lib/shapes");

describe("Shape", () => {
  it("should set the color correctly using constructor", () => {
    const shapeColor = "blue";
    const shape = new Shape(shapeColor);

    expect(shape.color).toBe(shapeColor);
  });

  it("should update the color correctly using setColor", () => {
    const shapeColor = "blue";
    const newColor = "red";
    const shape = new Shape(shapeColor);

    shape.setColor(newColor);

    expect(shape.color).toBe(newColor);
  });
});
