const inquirer = require('inquirer');
const fs = require('fs');

inquirer
 .prompt([
    {
        type: 'input',
        message: 'Enter up to three characters to include in your logo:',
        name: 'logoChars',
        validate: function (input){
            if (input>3){
                return "Please enter no more than three characters!";
            } else if (input = '') {
                
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
        type: '',
        message: 'Please select a colour for your logo.',
        name: 'logoColour'
    },
    ])
    }
});
