const Square = require("../../Shapes/square");

test("Should render a square when the square method is called and return the correct SVG string", () => {
    const square = new Square();
    square.setColour("yellow");
    expect(square.render()).toEqual(`<rect x="60" y="60" width="180" height="180" fill="yellow" />`)
})