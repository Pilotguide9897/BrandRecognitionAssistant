// Please ignore this code. I might come back to it eventually. For now, though, I am unable to get it to work...

// const { main } = require('../../../index');

// I was unable to import the questions for some reason. As a result, to test them I have added them here. 

const inquirer = require('inquirer');

async function main () {
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
const answers = await inquirer.prompt(questions);
console.log('Answers:', answers);
}

// Tests 
describe('main', () => {
  test('should return the value typed in as a response', async() => {
    const inquirerMock = jest.spyOn(inquirer, 'prompt').mockResolvedValue({
      logoChars:'ABC',
    });
    await main();

    expect(inquirerMock).toHaveBeenCalledWith(questions);
  })
});

//   jest.mock('inquirer', () => ({
//     prompt: jest.fn().mockResolvedValue({
//       logoChars: 'ABC',
//     }),
//   }));
// })

//   test('Should return the value typed in as the response', async () => {
//     const { logoChars } = await main();
//     expect(logoChars).toBe('ABC');
//   });
    
//     test('fontFamily', () => {
//         it('Should ', async () => {
            
//         })
//       });
    
//       test('fontSize', () => {
//         it('Should ', async () => {})
//       });

//       test('fontWeight', () => {
//         it('Should ', async () => {})
//       });

//       test('lineStyling', () => {
//         it('Should ', async () => {})
//       });

//       test('textColour', () => {
//         it('Should ', async () => {})
//       });

//       test('logoShape', () => {
//         it('Should ', async () => {})
//       });

//       test('shapeColour', () => {
//         it('Should ', async () => {})
//       });
// });