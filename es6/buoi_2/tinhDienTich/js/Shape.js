export default class Shape {
    constructor(bgColor, sizeX, sizeY, name) {
        this.bgColor = bgColor;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.name = name;
        this.area = 0;
    }

    calcArea() {
        this.area = 0;
    }

    draw() {
        document.getElementById("main").innerHTML = "Chưa tính diện tích";
    }
}