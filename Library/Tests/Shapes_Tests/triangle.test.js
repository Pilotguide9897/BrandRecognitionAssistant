const Triangle = require("../../Shapes/triangle");

test("Should render triangle when the triangle method is called and return the correct SVG string", () => {
  const triangle = new Triangle();
  triangle.setColour("blue");
  expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue"/>');
});
