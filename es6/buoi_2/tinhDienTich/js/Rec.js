import Shape from "./Shape.js";

export default class Rec extends Shape {

    // Từng tham số của con, các tham số còn lại của cha
    constructor(height, width, ...propsParent) {
        super(...propsParent);
        this.height = height;
        this.width = width;
    }

    calcArea() {
        this.area = this.height * this.width;
    }

    drau() {
        document.getElementById("main").innerHTML = `
            <div style= "background: ${this.bgColor}; width: ${this.sizeX}; height: ${this.sizeY}">${this.name}</div>
        `
    }
}