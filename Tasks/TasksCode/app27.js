/*Учитывая массив целых чисел, вернуть новый массив с удвоением каждого значения.*/

const maps = (x) => x.map(item => item * 2);

let m = maps([1, 2, 3]);
console.log(m);