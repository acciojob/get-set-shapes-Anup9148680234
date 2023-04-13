//complete this code
class Rectangle {
	constructor(width, height) {
		this.width1 = width;
		this.height1 = height;
	}

	get width() {
		return this.width1; 
	}

	
	get height() {
		return this.height1; 
	}

	getArea() {
		return this.width1 * this.height1;
	}
}

class Square extends Rectangle {
	constructor(side) {
		super(side, side);
	}
	getPerimeter() {
		return 4 * this.width1; 
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
