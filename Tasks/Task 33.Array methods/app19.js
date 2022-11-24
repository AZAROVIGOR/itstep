/*reduce, reduceRight:
19. Дан массив с числами. Найдите сумму этих чисел.*/

let array = [3, 4, -1, 2, 7];

let sumArray = array.reduce((sum, element) =>  sum + element);

console.log(sumArray);