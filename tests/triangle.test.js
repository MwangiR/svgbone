const Triangle = require("../lib/triangle");

describe("Triangle", ()=>{
    it("should render a triangle", () => {
        const shape = new Triangle();
        shape.setColor('blue')
        console.log(shape.render());
        expect(shape.render()).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
    });

})