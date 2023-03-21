const inquirer = require('inquirer');
const fs = require('fs');
const inquirerAutocompletePrompt = require('inquirer-autocomplete-prompt');
const inquirerFuzzyPath = require('inquirer-fuzzy-path');
const colours = require('./Library/Colours/colours');
const generateLogo = require('./generateLogo');
const Triangle = require('./Library/Shapes/triangle');
const Circle = require('./Library/Shapes/circle');
const Square = require('./Library/Shapes/square');

inquirer.registerPrompt('autocomplete', inquirerAutocompletePrompt);
inquirer.registerPrompt("fuzzypath", inquirerFuzzyPath);

const searchColours = (input) => {
  input = input || '';
  const colourList = Object.keys(colours);
  return new Promise ((resolve) => {
    resolve(colourList.filter((colours) => {
      return colours.toLowerCase().indexOf(input.toLowercase()) !== -1;
    }));
  });
};

const questions = [    
    {
        type: 'input',
        message: 'Enter up to three characters to include in your logo:',
         name: 'logoChars',
         validate: function (input){
             if (input.length > 3) {
                 return "Please enter no more than three characters!";
             } else if (input === '') {
                    return "Please include at least one valid character!";
            } else {
                return true;
            }
        }
     },
     {
      type: 'autocomplete',
      name: 'textColour',
      message: 'Enter the text color (color keyword or hexadecimal number):',
      source: (answers, input) => searchColors(input),
      validate: function (input) {
        const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
        if (!colours.hasOwnProperty(input) && !hexColorRegex.test(input)) {
          return 'Please enter a valid color keyword or hexadecimal number.';
        }
        return true;
      },
    },
    {
        type: 'list',
        message: 'Please choose a shape for your logo.',
        name: 'logoShape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'autocomplete',
      name: 'shapeColour',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
      source: (answers, input) => searchColors(input),
      validate: function (input) {
        const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
        if (!colours.hasOwnProperty(input) && !hexColorRegex.test(input)) {
          return 'Please enter a valid color keyword or hexadecimal number.';
        }
        return true;
      },
    },
  ];
  
  inquirer.prompt(questions)
    .then(answers => {
      const {logoChars, textColour, shape, shapeColour} = answers;
      const chosenShape = shape === 'triangle'
      ? new Triangle(shapeColour)
      : shape === 'circle'
        ? new Circle(shapeColour)
        : new Square(shapeColour);

        generateLogo(logoChars, textColour, chosenShape);
    });

    function generateLogo(logoChars, textColour, chosenShape){

    fs.writeFile('logo.svg',logoSVG, (err) => { 
        if (err) throw new Error('An error occurred writing your file.');
        return;
    }
        console.log('Generated logo.svg');
    });
  }