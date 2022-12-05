//2. Дан числовой массив. Что больше сумма положительных чисел или модуль суммы отрицательных чисел. (Модуль числа - значение числа без знака).

let array = [5, 7, 21, 14, 31, -5, -7, -21, -14, -31];

let sumPositiveNumbers = array.filter(item => item > 0).reduce((sum, item) => sum += item);

let moduleSumNegativeNumbers = array.filter(item => item < 0).map(item => item < 0 ? Math.abs(item) : item).reduce((sum, item) => sum += Math.abs(item));

if(sumPositiveNumbers > moduleSumNegativeNumbers){
    console.log(`Сумма положительных чисел больше`);
}
else if(sumPositiveNumbers < moduleSumNegativeNumbers){
    console.log(`Модуль суммы отрицательных чисел больше`);
}
else{
    console.log(`Они равны`);
}

