const Circle = require("../lib/circle");

describe("Circle", ()=>{
    it("should render a circle", () => {
        const shape = new Circle();
        shape.setColor('red')
        console.log(shape.render());
        expect(shape.render()).toBe(`<circle cx="150" cy="115" r="80" fill="red" />`);
    });

})