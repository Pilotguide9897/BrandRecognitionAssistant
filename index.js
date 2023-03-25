import('inquirer').then(({ default: inquirer }) => {
async function main () {
  const fs = require('fs').promises;
  const path = require('path');
  const colours = require('./Library/Colours/colours');
  const fileName = require('./filename.js');
  const Triangle = require('./Library/Shapes/triangle');
  const Circle = require('./Library/Shapes/circle');
  const Square = require('./Library/Shapes/square');
  const { error } = require('console');

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
        choices: ['Arial', 'Verdana', 'Times New Roman', 'Helvetica', 'Georgia', 'Courier New', 'Trebuchet MS', 'Impact', "Comic Sans MS"]
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
        choices: ['none', 'underline', 'overline', 'lighter', 'line-through', ]
      },
      {
        type: 'autocomplete',
        name: 'textColour',
        message: 'Enter the text colour (colour keyword or hexadecimal number):',
        suggest: function(input){
          const filteredColours = colours.filter(
            colour => colour.toLowerCase().indexOf(input.toLowerCase()) !== -1
          );
           return filteredColours;
        },
        validate: function (input) {
          const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
          if (!colours.hasOwnProperty(input.toLowerCase()) && !hexColorRegex.test(input)) {
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
      suggest: function(input){
        const filteredColours = colours.filter(
          colour => colour.toLowerCase().indexOf(input.toLowerCase()) !== -1
        );
         return filteredColours;
      },
      validate: function (input) {
        const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
        if (!colours.hasOwnProperty(input.toLowerCase()) && !hexColorRegex.test(input)) {
          return 'Please enter a valid color keyword or hexadecimal number.';
        }
        return true;
      },
    },
  ];

  inquirer.prompt(questions)
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
      const svgHeader = `<?xml version="1.0" encoding="UTF-8"?> <svg width="300px" height="200px" version="1.1" xmlns="http://www.w3.org/2000/svg">`;

      // To try to help vertically align the text regardless of font size.
      // let dy;
      // switch (chosenShape){
      //     case 'square':
      //       dy = 0.60;
      //       break;
      //     case 'triangle':
      //       dy = 0.85;
      //       break;
      //     default:
      //       dy = 0.20;
      //   }

      const svgFooter = `</svg>`;
      const svgText = `<text x="50%" y="50%" dy="0.35em" dominant-baseline = "middle" font-size="${fontSize}"; font-family="${fontFamily}" style="text-decoration: ${lineStyling}" font-weight="${fontWeight}" text-anchor="middle" fill="${textColour}">${logoChars}</text>`;
      const shapeSvg = chosenShape.render();
      const svgLogo = `${svgHeader}${shapeSvg}${svgText}${svgFooter}`;

      console.log(svgLogo);

        try {
          const filePath = await fileName.logoIdentifier();
          await fs.writeFile(filePath, svgLogo);
          console.log('Generated logo.svg');
        } catch {
          console.error('Unable to write logo', error);
        }
      }
    }

main();    

});


