class Shapes {
    constructor(colour){
        this.colour = colour;
    }
    setColour(colour){
        this.colour = colour;
    }
    render(){
        // Error to be inherited by all the shapes.
        throw new Error ('Error with shapes!');
    }
}

module.exports = Shapes;
