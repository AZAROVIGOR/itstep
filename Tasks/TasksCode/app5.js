//Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0.

var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }

    return result;
}


