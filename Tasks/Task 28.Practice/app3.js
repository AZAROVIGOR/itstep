//Даны 3 числа a, b, c. Можно ли из них составить треугольник со стронами равными a, b, c. 

var a = 5;
var b = 6;
var b = 7;

if (a < b + c && b < c + a && c < b + a) {
    console.log("Треугольник можно составить");
}
else {
    console.log("Треугольник составть нельзя");
}