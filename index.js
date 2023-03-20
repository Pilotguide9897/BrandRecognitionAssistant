const inquirer = require('inquirer');
const fs = require('fs');
const autocomplete = require('inquirer-autocomplete-prompt');
const color = require('colors');

const colours = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Black', 'White'];

// inquirer
//  .prompt([
    
     
//     {
//         type: '',
//         message: 'Please select a colour for your logo.',
//         name: 'logoColour'
//     },
//     ])
//     }
// });

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
     },
    {
        type: 'list',
        nessage: 'Please choose a shape for your logo.'
        name: 'logoShape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the color for the text:',
      validate: function(value) {
        if (this.answers.textColorType === 'Color keyword') {
          return (value.match(/^[a-zA-Z]+$/) ? true : 'Please enter a valid color keyword');
        } else {
          return (value.match(/^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/) ? true : 'Please enter a valid hexadecimal color number');
        }
      }
    }
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color for the shape. You may provide either a colour name keyword or a valid hexadecimal value:',
        validate: function(value) {
          if (this.answers.shapeColorType === 'Color keyword') {
            return (value.match(/^[a-zA-Z]+$/) ? true : 'Please enter a valid color keyword');
          } else {
            return (value.match(/^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/) ? true : 'Please enter a valid hexadecimal color number');
          }
        }
      }
  ];
  
  inquirer.prompt(questions)
    .then(answers => {
      console.log(`The text color is: ${color[answers.textColor](answers.textColorType)}`);
    })
    .catch(error => {
      console.log(error);
    });

    const renderShape = {

    }

    fs.writeFile('logo.svg', ,(err) => { // Need to include the data to take in.
        if (err) throw new Error('An error occurred writing your file.');
        console.log('Generated logo.svg');
    });