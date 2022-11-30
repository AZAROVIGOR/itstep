//2. Найти сумму только положительных элементов массива.

let array = [1, 2 , -2, -3, 4];

let newArra = array.filter(item => item > 0)
        .reduce((sum, item) => sum += item);


console.log(newArra);