// TODO: Create tests for each of the prompts
const inquirer = require('inquirer');
const myPrompt = require('../myPrompt');

test('myPrompt should return the user input', async () => {
    const answers = {
      logoChars: 'abc'
    };
    inquirer.prompt = jest.fn().mockResolvedValue(answers);
    const result = await myPrompt();
    expect(result).toEqual(answers);
  });
  