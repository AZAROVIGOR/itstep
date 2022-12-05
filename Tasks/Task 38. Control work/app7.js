//7. Дан числовой массив и 2 числа N, M, причем N < M. Найти все элементы, которые лежат в интервале от N до M.

let array = [5, 7, 21, 14, 31, 46, 22];

let N = 5;
let M = 30;

let elements = array.filter((item, index) => item >= N && item <= M )


console.log(elements)