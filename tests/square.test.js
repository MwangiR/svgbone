const Square = require("../lib/square");

describe("Square", ()=>{
    it("should render a square", () => {
        const shape = new Square();
        shape.setColor('green')
        console.log(shape.render());
        expect(shape.render()).toBe(`<rect x="73" y="40" width="160" height="160" fill="green" />`);
    });

})