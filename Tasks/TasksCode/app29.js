/*
Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.

Примечание. Пустые массивы должны возвращать 0.
*/

const findAverage = (array) => array.length === 0 ? 0 : array.reduce((sum, item) => sum + item ,0) / array.length;
     






let find = findAverage([1, 1, 1]);
console.log(find);





