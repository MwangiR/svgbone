const inquirer = require("inquirer");
const fs = require("fs/promises");
const Triangle = require("./lib/triangle");
const Square = require("./lib/square");
const Circle = require("./lib/circle");

async function promptForText() {
  const answers = await inquirer.prompt({
    type: "input",
    name: "text",
    message: "Enter text",
  });

  if (answers.text.length > 3) {
    console.log("Must enter a value of no more than 3 characters.");
    return promptForText();
  }

  return answers.text;
}

async function promptForColor() {
  const answers = await inquirer.prompt({
    type: "string",
    name: "color",
    message: "Enter text color (named color or hexadecimal format)",
    validate: function (input) {
      // Check if the input is a valid named color or a valid 3 or 6 character hexadecimal color
      const namedColorRegex = /^[a-zA-Z]+$/;
      const hexColorRegex = /^#?([0-9A-Fa-f]{3}){1,2}$/;

      if (!input || (!namedColorRegex.test(input) && !hexColorRegex.test(input))) {
        throw new Error(
          "Invalid color format. Please enter a valid named color or a valid 3 or 6 character hexadecimal color.",
        );
      }

      if (hexColorRegex.test(input) && !input.startsWith("#")) {
        throw new Error(
          "Invalid hexadecimal color format. Please enter a valid 3 or 6 character hexadecimal color.",
        );
      }

      return true;
    },
  });

  return answers.color;
}

async function promptForShapeColor() {
  const answers = await inquirer.prompt({
    type: "string",
    name: "color",
    message: "Enter shape color (named color or hexadecimal format)",
    validate: function (input) {
      // Check if the input is a valid named color or a valid 3 or 6 character hexadecimal color
      const namedColorRegex = /^[a-zA-Z]+$/;
      const hexColorRegex = /^#?([0-9A-Fa-f]{3}){1,2}$/;

      if (!input || (!namedColorRegex.test(input) && !hexColorRegex.test(input))) {
        throw new Error(
          "Invalid color format. Please enter a valid named color or a valid 3 or 6 character hexadecimal color.",
        );
      }

      if (hexColorRegex.test(input) && !input.startsWith("#")) {
        throw new Error(
          "Invalid hexadecimal color format. Please enter a valid 3 or 6 character hexadecimal color.",
        );
      }

      return true;
    },
  });

  return answers.color;
}

async function promptForShape() {
  const answers = await inquirer.prompt({
    type: "list",
    name: "shape",
    message: "Select shape",
    choices: ["triangle", "square", "circle"],
  });
  return answers.shape;
}

function generateSVG(shapeType, shapeColor, text, textColor) {
  let shape;
  switch (shapeType) {
    case "circle":
      shape = new Circle(shapeColor, text, textColor);
      break;
    case "triangle":
      shape = new Triangle(shapeColor, text, textColor);
      break;
    case "square":
      shape = new Square(shapeColor, text, textColor);
      break;

    default:
      throw new Error("Invalid Shape Type");
  }
  const svgContent = shape.render();
  const renderedText = `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${textColor}">${text}</text>`;
  return {
    svgContent,
    renderedText,
  };
}

async function saveSVGToFile(svgContent, renderedText) {
  const htmlContent = `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${svgContent}
  ${renderedText}
  </svg>
  `;

  await fs.writeFile("./output/index.svg", htmlContent);
  console.log("Saved SVG to file");
}

async function main() {
  try {
    const text = await promptForText();
    console.log("Logo text", text);

    const textColor = await promptForColor();
    console.log("Logo color", textColor);

    const shapeType = await promptForShape();
    console.log("Logo shape", shapeType);

    const shapeColor = await promptForShapeColor();
    console.log("Logo shape color", shapeColor);

    const { svgContent, renderedText } = generateSVG(shapeType, shapeColor, text, textColor);
    console.log(svgContent);

    await saveSVGToFile(svgContent, renderedText);
  } catch (error) {
    console.log(error);
  }
}

main();

module.exports = {
  promptForText,
  promptForColor,
  promptForShape,
  promptForShapeColor,
  generateSVG,
  saveSVGToFile,
};
