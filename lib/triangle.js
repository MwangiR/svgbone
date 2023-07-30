const shape = require("./shapes");

class triangle extends shape {
  render() {
    console.log("Triangle");
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = triangle;
