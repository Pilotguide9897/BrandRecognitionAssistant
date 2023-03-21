const Circle = require("../../Shapes/circle");

test ("Should render a circle when the circle method is called and return the correct SVG sring", () =>{
    const circle = new Circle;
    circle.setColour("blue");
    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`)
})