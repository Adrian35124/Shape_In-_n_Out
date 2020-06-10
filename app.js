 class Square {
     constructor (sideLength) {
        this.sideLength = sideLength;
        let squareDiv = document.createElement("div")
        squareDiv.classList.add("squareDiv")
        squareDiv.style.backgroundColor = getRandomColor();
        squareDiv.style.height = sideLength + "px";
        squareDiv.style.width = sideLength + "px";
        document.body.appendChild(squareDiv);
     }
 }
// class Rectangle extends Shape {
//     constructor () {

//     }
// }
// class Triangle extends Shape {
//     constructor () {

//     }
// }
class Circle{
    constructor (radius) {
    this.radius = radius;
    let circleDiv = document.createElement("div");
    circleDiv.classList.add("circleDiv");
    circleDiv.style.backgroundColor = getRandomColor();
    circleDiv.style.height = 2 * radius + "px";
    circleDiv.style.width = 2 *radius + "px";
    circleDiv.style.borderRadius = radius + "px";
    document.body.appendChild(circleDiv);
    }
} 
let creatingSquare = () => {
    let sideLength = $("squareLength").val();
    let square = new Square(sideLength);
}

let creatingCircle = () => {
    let circleRadius = $(".circleRadius").val();
    let circle = new Circle(circleRadius);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }