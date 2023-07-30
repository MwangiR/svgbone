const shapes = require("./shapes");

class circle extends shapes {
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />
    <text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = circle;
