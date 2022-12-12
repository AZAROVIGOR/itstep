// Дано стороны прямоугольника , найти периметр и площадь 

let rectangle = {
    length: 5,
    width: 10,
    
    getPerimetr(){
        return (this.length + this.width) * 2;
    },
    getSquare(){
        return this.length * this.width;
    }
}

console.log(rectangle.getPerimetr(), rectangle.getSquare());

