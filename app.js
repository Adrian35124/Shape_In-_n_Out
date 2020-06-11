const shapeContainer = document.getElementById("shapeContainer")
class Shape {
     constructor () {
        this.shape = document.createElement("div")
        shapeContainer.appendChild(this.shape);
     }
 }

 class Square extends Shape {
     constructor (sideLength) {
        super();
        this.sideLength = sideLength;
        this.shape.classList.add("squareDiv")
        this.shape.style.backgroundColor = getRandomColor();
        this.shape.style.height = sideLength + "px";
        this.shape.style.width = sideLength + "px";
        this.shape.style.top = `${Math.floor(Math.random() * 600)}px`
        this.shape.style.left = `${Math.floor(Math.random() * 600)}px`
     }
 }
class Rectangle extends Shape {
    constructor (height, width) {
        super();
        this.height = height;
        this.width = width;
        this.shape.classList.add("rectangleDiv")
        this.shape.style.backgroundColor = getRandomColor();
        this.shape.style.height = height + "px"
        this.shape.style.width = width + "px"
        this.shape.style.top = `${Math.floor(Math.random() * 600)}px`
        this.shape.style.left = `${Math.floor(Math.random() * 600)}px`
    }
}
class Triangle extends Shape {
    constructor (height) {
        super();
        this.height = height;
        this.shape.classList.add("triangleDiv")
        this.shape.style.height = `${this.height}px`
        this.shape.style.width = `${this.height}px`
    }
}
class Circle extends Shape {
    constructor (radius) {
        super();
    this.radius = radius;
    this.shape.classList.add("circleDiv");
    this.shape.style.backgroundColor = getRandomColor();
    this.shape.style.height = 2 * radius + "px";
    this.shape.style.width = 2 *radius + "px";
    this.shape.style.borderRadius = radius + "px";
    this.shape.style.top = `${Math.floor(Math.random() * 600)}px`
    this.shape.style.left = `${Math.floor(Math.random() * 600)}px`
    }
} 
let creatingSquare = () => {
    let sideLength = $(".sideLength").val();
    let square = new Square(sideLength);
}

let creatingCircle = () => {
    let circleRadius = $(".circleRadius").val();
    let circle = new Circle(circleRadius);
}
let creatingRectangle = () => {
    let rectangleHeight = $(".rectangleHeight").val();
    let rectangleWidth = $(".rectangleWidth").val();
    new Rectangle(rectangleHeight, rectangleWidth)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }