//1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

let sqrNum = (a) =>  a * a;

 let sqr = sqrNum(6);
 console.log(sqr);



//2. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

let result = (a, b, c) => {
    let x =(a - b) / c;
    return x; 
};

let resultNum = result(100, 50 , 2);

console.log(resultNum);

//3. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

let day = (a) => {
    if(a == 1){
        return "Понедельник"
    }
    else if(a == 2){
        return "Вторник"
    }
    else if (a == 3) {
        return "Среда"
    }
    else if (a == 4) {
        return "Четверг"
    }
    else if (a == 5) {
        return "Пятница"
    }
    else if (a == 6) {
        return "Суббота"
    }
    else if (a == 7) {
        return "Воскресенье"
    }
    else  {
        return "Число введено не корректно!!!"
    }
};

let dayWeek = day(8);
console.log(dayWeek);

//4. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
let twoNumbers = (a, b) => {
    if(a == b ){
        return true;
    }
    return false;
}

let numbers = twoNumbers(5, 6);
console.log(numbers);

//5. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.

let sumOfNumbers = (a, b) => {
    if((a + b) > 10){
        return true;
    }
    return false;
}

let sum = sumOfNumbers(1, 2);
console.log(sum);