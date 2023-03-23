# BrandRecognitionAssistant
A simple and intuitive command-line application that takes in user input to generate a logo and save it as an SVG file. 

![](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
This application is a simple command-line logo generator that allows users to create a logo with customizable text, text color, shape, and shape color. It provides an interactive experience using inquirer for gathering user inputs, with the added functionality of autocompletion and fuzzy search for color selection.

A video illustrating this application's functionality may be viewed [here]().

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing) 
- [Tests](#tests) 
- [Questions](#questions)
- [License](#license)

## Screenshots 
![Screenshot 1]([./Examples/Screenshots/screenshotSVG2])

![Screenshot 2]([image URL])
![Screenshot 1]([image URL])
![Screenshot 1]([image URL])
![Screenshot 1]([image URL])
![Screenshot 1]([image URL])
![Screenshot 1]([image URL])
![Screenshot 1]([image URL])

## Installation
To install this application, clone the repository to your local machine. You can do this by running the following command in your terminal: 'git clone <repository-url>. The repo url can be achieved by clicking the green code button in the main repo page, clicking the SSH tab, and then copying the URL provided. Once the repo is cloned to the local system, navigate to the directory in the terminal until index.js is located. Index.js is the main file for this application. This application requires that users already have node.js and Node Package Manager (NPM) installed. For more information on installing these technologies please consult their official documentation. 

To install the necessary dependencies, run the following command in your project directory: <npm install inquirer inquirer-autocomplete-prompt inquirer-fuzzy-path>. Additionally, ensure that the required module files, including the Library, Colours, and Shapes folders, are present in your project directory.

## Usage

To run the application, execute the main script (e.g., node index.js or the appropriate script name) from your project directory.

The application will prompt you for the following information:

1. Logo Characters: Enter up to three characters to include in your logo.
2. Text Color: Choose a text color using a color keyword or hexadecimal number. This field supports autocompletion and fuzzy search.
3. Shape: Select a shape for your logo from the list of available options (Circle, Triangle, Square).
4. Shape Color: Choose a shape color using a color keyword or hexadecimal number. This field also supports autocompletion and fuzzy search.

Upon entry of all the required information, the application will generate an SVG file named logo.svg in the project directory. Open the logo.svg file in your browser of choice to view the generated logo that matches the criteria you entered!

## Contributing
Users interested in contributing to this project or with ideas for additional functionality may fork the repo and submit their changes to the original repository as a pull request. These pull requests will subsequently be reviewed by the project author. If accepted, the changes will be merged and added to the project's main branch to create the new starting point for future development!

## Tests

This application was built and tested using Jest.


## Questions
* If you have any questions concerning this application, do not hesitate to reach me at jaredryan1997@hotmail.com.
* You may also view my GitHub profile at http://github.com/Pilotguide9897.

## License
This project is licensed under the ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg). See the [license](https://opensource.org/licenses/MIT) documentation for more information.