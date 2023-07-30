class shape {
  constructor(shapeColor, text, textColor) {
    this.color = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
  setColor(varColor) {
    this.color = varColor;
  }
}

module.exports = shape;
