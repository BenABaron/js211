/**
 * make a rectangle class that has the following attributes:
 * - length
 * - width
 * 
 * has the following methods:
 * area()
 * perimeter()
 */

class Rectangle {
  length;
  width;

  constructor(iLength, iWidth){
    this.length = iLength;
    this.width = iWidth;
  }

  area(){
    return this.length * this.width
  }

  perimeter() {
    return this.length * 2 + this.width * 2
  }
}

class Square extends Rectangle {

  constructor(side){
    super(side, side);
  }
}

let a = new Rectangle(3,2);
let b = new Square(3);

console.log("Square area : ", b.area());
console.log("Rectangle area : ", a.area());