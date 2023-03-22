import('inquirer').then(({ default: inquirer }) => {
async function main () {
  const fs = require('fs').promises;
  const colours = require('./Library/Colours/colours');
  const Triangle = require('./Library/Shapes/triangle');
  const Circle = require('./Library/Shapes/circle');
  const Square = require('./Library/Shapes/square');
  const { error } = require('console');

  const inquirerAutocompletePrompt = (await import('inquirer-autocomplete-prompt')).default;
  // inquirer.registerPrompt('autocomplete', inquirerAutocompletePrompt); // For some reason this code halts the execution of the rest of my prompts...

const searchColours = (input, colours) => {
  input = input || '';
  const colourList = Object.keys(colours);
  console.log(colourList);

  return new Promise ((resolve) => {
    const filteredColors = colourList.filter((color) => {
      return color.toLowerCase().indexOf(input.toLowerCase()) !== -1;
    });
    resolve(filteredColors.length > 0 ? filteredColors : ['No matching colors found']);
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
             } else if (input.length === 0 || input === " " || input === "  " || input === "   ") {
                    return "Please include at least one valid character!";
            } else {
                return true;
            }
        }
     },
     {
        type: 'list',
        message: 'Please select a font style:',
        name: 'fontFamily',
        choices: ['Arial', 'Verdana', 'Times New Roman', 'Helvetica', 'Georgia']
     },
     {
      type: 'list',
      message: 'Please select a font size:',
      name: 'fontSize',
      choices: ['8px', '10px', '12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px', '96px']
      },
      {
      type: 'list',
      message: 'Please select a font weight:',
      name: 'fontWeight',
      choices: ['normal', 'bold', 'bolder', 'lighter']
      },
      {
        type: 'list',
        message: 'Please select a line styling:',
        name: 'lineStyling',
        choices: ['none', 'underline', 'overline', 'lighter', 'line-throug', ]
      },
     {
      type: 'autocomplete',
      name: 'textColour',
      message: 'Enter the text colour (colour keyword or hexadecimal number):',
      source: (input) => searchColours(input, colours),
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
      message: 'Enter the shape colour (colour keyword or hexadecimal number):',
      source: (input) => searchColours(input, colours),
      validate: function (input) {
        const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
        if (!colours.hasOwnProperty(input) && !hexColorRegex.test(input)) {
          return 'Please enter a valid colour keyword or hexadecimal number.';
        }
        return true;
      },
    },
  ];
  
  inquirer.prompt(questions) // Something is going on here that stops any shape but the square from being selected.
    .then(answers => {
      const {logoChars, fontFamily, fontSize, fontWeight, lineStyling, textColour, logoShape, shapeColour} = answers;
      console.log (logoChars, textColour, logoShape, shapeColour);
      const chosenShape = logoShape === 'Triangle'
      ? new Triangle(shapeColour)
      : logoShape === 'Circle'
        ? new Circle(shapeColour)
        : new Square(shapeColour);

        console.log(logoChars, fontSize, fontFamily, fontWeight, lineStyling, textColour, chosenShape);
        generateLogo(logoChars, fontSize, fontFamily, fontWeight, lineStyling, textColour, chosenShape);
    });

   async function generateLogo(logoChars, fontSize, fontFamily, fontWeight, lineStyling, textColour, chosenShape){
      const svgHeader = `<?xml version="1.0" encoding="UTF-8"?> <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">`;
      const svgFooter = `</svg>`;
      const svgText = `<text x="50%" y="50%" font-size="${fontSize}"; font-family="${fontFamily}" style="text-decoration: ${lineStyling}" font-weight="${fontWeight}" text-anchor="middle" fill="${textColour}">${logoChars}</text>`;
      const shapeSvg = chosenShape.render();
      const svgLogo = `${svgHeader}${shapeSvg}${svgText}${svgFooter}`;

      console.log(svgLogo);

        try {
          await fs.writeFile("./Examples/logo.svg", svgLogo);
          console.log('Generated logo.svg');
        } catch {
          console.error('Unable to write logo', error);
        }
      }
    }

main();    

});


