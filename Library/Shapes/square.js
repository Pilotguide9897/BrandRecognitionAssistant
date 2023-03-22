const Shapes = require("./shapes");

class Square extends Shapes {
      render() {
        return `<rect x="60" y="60" width="180" height="180" fill="${this.colour}" />`;
      }
    }

module.exports = Square;