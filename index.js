const inquirer = require("inquirer");
const fs = require("fs/promises");
const triangle = require("./lib/triangle");
const square = require("./lib/square");
const Circle = require("./lib/circle");

async function promptForText() {
  const answers = await inquirer.prompt({
    type: "input",
    name: "text",
    message: "Enter text",
  });
  return answers.text;
}

async function promptForColor() {
  const answers = await inquirer.prompt({
    type: "input",
    name: "color",
    message: "Enter text color",
  });
  return answers.color;
}

async function promptForShapeColor() {
  const answers = await inquirer.prompt({
    type: "input",
    name: "color",
    message: "Enter shape color",
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
      shape = new triangle(shapeColor, text, textColor);
      break;
    case "square":
      shape = new square(shapeColor, text, textColor);
      break;

    default:
      throw new Error("Invalid Shape Type");
  }
  return shape.render();
}

async function saveSVGToFile(svgContent) {
  const htmlContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgContent}</svg>`;

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

    const svgContent = generateSVG(shapeType, shapeColor, text, textColor);
    console.log(svgContent);

    await saveSVGToFile(svgContent);
  } catch (error) {
    console.log(error);
  }
}

main();
