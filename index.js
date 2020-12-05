// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    if (!Array.isArray(this.sides)) return;
    let sum = 0;
    for (let int of this.sides) {
      sum += int
    }
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.sides[0] + this.sides[1] <= this.sides[2] || this.sides[0] + this.sides[2] <= this.sides[1] || this.sides[1] + this.sides[2] <= this.sides[0] || this.countSides != 3) {
      return false
    }
    return true
  }
}

class Square extends Polygon {
  
  get isValid() {
    if (!Array.isArray(this.sides) || this.countSides !== 4) {
      return false;
    } else if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3]) {
      return true;
    } else {
      return false;
    }
    
  }

  get area() {
    return this.sides[0] * this.sides[1]
  }
}