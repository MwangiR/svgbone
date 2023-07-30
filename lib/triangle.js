const shape = require("./shapes");

class triangle extends shape {
  render() {
    console.log("Triangle");
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
    <text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = triangle;
