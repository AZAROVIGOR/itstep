//19. Дан числовой массив. Преобразовать массив так, чтобы сначала шли нулевые элементы, а затем все остальные.

let array = [5, 7, 21, 0, 14, 31, 46, 0, 22];

let newArray = array.filter(item => item !== 0);
let zeros = array.filter(item => item == 0).concat(newArray);

console.log(zeros);


