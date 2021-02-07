// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    set diameter(diameter) {
        this._diameter = diameter
        this.radius = this._diameter/2;
    }

    set circumference(circumference) {
        this._circumference = circumference
        this.radius = this._circumference/(2*Math.PI);
    }
  
    get diameter() {
      return 2*this.radius;
    }

    get circumference() {
        return 2*this.radius*Math.PI;
      }

    get area() {
        return (this.radius**2)*Math.PI;
      }
  }