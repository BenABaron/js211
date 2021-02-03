/**
 * we want to simulate a square
 */

class Square {
  side;

  constructor(inputSide) {
    this.side = inputSide;
  }

  /**
   * Returns the perimeter of the square
   */
  perimeter(){
    return 4 * this.side
  }

  /**
   * Returns the area of the square
   */
  area(){
    return Math.pow(this.side, 2);
  }
}

let s1 = new Square(4);

let s2 = new Square(2);

console.log("S1 area = ", s1.area());
console.log("S2 perimeter = ", s2.perimeter());