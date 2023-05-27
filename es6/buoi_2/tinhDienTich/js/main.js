import Square from "./Square.js";
import Rec from "./Rec.js";
import Circle from "./Circle.js";

let tinhHinhVuong = () => {
    let side = document.getElementById("side").value;
    let sizeX = document.getElementById("squareX").value;
    let sizeY = document.getElementById("squareY").value;
    let bgColor = document.getElementById("squareColor").value;

    let sq = new Square(side, bgColor, sizeX, sizeY, "Hình Vuông");

    sq.calcArea();
    sq.draw();
}
document.getElementById("areaSquare").onclick = tinhHinhVuong;

let tinhHinhChuNhat = () => {
    let height = document.getElementById("recL").value;
    let width = document.getElementById("recW").value;
    let sizeX = document.getElementById("recX").value;
    let sizeY = document.getElementById("recY").value;
    let bgColor = document.getElementById("squareColor").value;

    let rec = new Rec(height, width, bgColor, sizeX, sizeY, "Hình Chữ nhật");

    rec.calcArea();
    rec.draw();
}
document.getElementById("areaRec").onclick = tinhHinhChuNhat;

let tinhHinhTron = () => {
    let radius = document.getElementById("radius").value;
    let sizeX = document.getElementById("cirX").value;
    let sizeY = document.getElementById("cirY").value;
    let bgColor = document.getElementById("cirColor").value;

    let cir = new Circle(bgColor, sizeX, sizeY, radius, "Hình tròn");

    cir.calcArea();
    cir.draw();
}
document.getElementById("areaCircle").onclick = tinhHinhTron;

