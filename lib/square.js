const shapes = require("./shapes");

class square extends shapes {
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />
    <text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = square;
