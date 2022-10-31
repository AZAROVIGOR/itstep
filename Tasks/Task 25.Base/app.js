// var a = 18.30, b = 21.20;
// c = ;
// d = ;
// console.log(d);

// Задача 2

var a = 3, b = 1;
var perimeter = (a * 2) + (b * 2);
var square = a * b;
console.log("Произведение площади к периметру равно " + (square / perimeter));

// Задача 3
var summ = 1000;
var procent = 10;
var summYear = (summ + (summ / 100) * procent);
var summTwooYear = (summYear + (summYear / 100) * procent);
var summThreeYear = (summTwooYear + (summTwooYear / 100) * procent);
console.log("сумма  за  три  года " + (summThreeYear - summ));

//Задача про Васю Пупкина
var name = "Вася";
const surname = "Пупкин";
var weight, growth;
weight = 0.89;
growth = 180;
var weightKilogram = weight * 100;
console.log("Меня зовут", name, surname,".", "Я вешу", weight, "ц.", "Мой рост -" , growth, "см.");
var weightPlus = weightKilogram + 10;
var growthMin = growth - 2;
console.log(name, surname, "потолстел и стоптался.");
name = "Петя";
var weightPetya = weightKilogram * 2;
var difference = weightPetya / weightKilogram;
console.log("Теперь я", name, surname, "и вешу в", difference,"раза больше чем в молодости.");


//Задача периетр

var sideSquare = 7;
var perimeter = sideSquare * 4;
console.log("Периметр квадрата равен", perimeter);

//Радиус окружности

var radius = 7;
var areaCircle = Math.PI * radius ** 2;
console.log("Площадь круга равна",areaCircle);

//Гипотинуза

var a = 3;
var b = 4;
var c = (3**2) + (4**2);
var d = c**0.5;
console.log("Гипотенуза равна", d);

// Переменные меняем  значение

var x = 5;
var y = 6;
console.log(x, y);
var z = x + y;
var x = z - x;
var y = z - y;
console.log(x,y);

//Сумма цифр

var x = 357;
var thirdNum = x % 10;
// console.log(thirdNum);
var z = (x - thirdNum) / 10;
var secondNum = z % 10;
// console.log(secondNum);
var firstNum = (z - z % 10) / 10;
// console.log(firstNum);
var sum = (`${firstNum + secondNum + thirdNum}`);
console.log(sum);
var reverse = (`${thirdNum}${secondNum}${firstNum}`);
console.log(reverse);





