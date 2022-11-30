//6. Дан массив [1,3,6,4,3,3,5,6]. Найти все значения, которые больше среднего арифметического значения всех элементов массива.

let array = [1, 3, 6, 4, 3, 3, 5, 6];

let arithmeticMean = array.reduce((sum, item) => sum += item / array.length)

let value = array.filter((item) => item > arithmeticMean );

console.log(value);