const Shapes = require("./shapes");

class Triangle extends Shapes {
      render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.colour}" />`;
      }
    }

module.exports = Triangle;